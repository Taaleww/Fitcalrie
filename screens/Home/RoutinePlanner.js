import React, {useContext, useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {IconButton, Text, Card, Avatar} from 'react-native-paper';
import {LocaleConfig} from 'react-native-calendars';
import {Calendar} from 'react-native-calendars';
import {AuthContext} from '../../context/AuthContext';
import {FIND_NUTRITION} from '../../graphql/query';
import {FIND_EXERCISE} from '../../graphql/query';
import {useLazyQuery} from '@apollo/client';
import {SEARCH_FOOD_MONTH} from '../../graphql/query';
import {SEARCH_EXERCISE_MONTH} from '../../graphql/query';
import moment from 'moment-timezone';
import _ from 'lodash';

LocaleConfig.locales['th'] = {
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthNamesShort: [
    'JAN.',
    'FEB.',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL.',
    'AUG',
    'SEP.',
    'OCT.',
    'NOV.',
    'DEC.',
  ],
  dayNames: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  dayNamesShort: ['S.', 'M.', 'T.', 'W.', 'TH.', 'F.', 'S.'],
  today: "Aujourd'hui",
};
LocaleConfig.defaultLocale = 'th';

const RoutinePlanner = ({navigation}) => {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [currentDate, setCurrentDate] = useState('');
  const context = useContext(AuthContext);
  const ID = context.user._id;
  const weight = context.user.weight;
  const CURRENT_DATE = new Date();
  const dateString = CURRENT_DATE.toISOString();
  const [Isodate, setIsoDate] = useState(dateString);
  const [Isomonth, setIsoMonth] = useState(dateString);
  const [markedDate, setMarkedDate] = useState({});
  const [markedDateExercise, setMarkedDateExercise] = useState({});
  const [combinedMarkedDate, setCombinedMarkedDate] = useState({});
  const [selectedDate, setSelectedDate] = useState({});

  const onDateChange = date => {
    setSelectedStartDate(date);
  };

  const [
    loadNutritionStatus,
    {loading: nutritionLoading, error: nutritionError, data: nutritionData},
  ] = useLazyQuery(FIND_NUTRITION);

  useEffect(() => {
    initCurrentDate();
    loadNutritionStatus({
      variables: {
        date: Isodate,
        userId: ID,
      },
    });
  }, [Isodate]); // called once

  const [
    loadExerciseStatus,
    {loading: exerciseLoading, error: exerciseError, data: exerciseData},
  ] = useLazyQuery(FIND_EXERCISE);

  useEffect(() => {
    initCurrentDate();
    loadExerciseStatus({
      variables: {
        date: Isodate,
        userId: ID,
      },
    });
  }, [Isodate]); // called once

  const [
    loadFoodmonthStatus,
    {loading: foodmonthLoading, error: foodmonthError, data: newfoodmonthData},
  ] = useLazyQuery(SEARCH_FOOD_MONTH);

  useEffect(() => {
    loadFoodmonthStatus({
      variables: {
        date: Isomonth,
        userId: ID,
      },
    });
  }, [Isomonth]); // called once

  const [
    loadExercisemonthStatus,
    {
      loading: exercisemonthLoading,
      error: exercisemonthError,
      data: newExercisemonthData,
    },
  ] = useLazyQuery(SEARCH_EXERCISE_MONTH);

  useEffect(() => {
    loadExercisemonthStatus({
      variables: {
        date: Isomonth,
        userId: ID,
      },
    });
  }, [Isomonth]); // called once

  useEffect(() => {
    if (newfoodmonthData) {
      const newexfood_month = newfoodmonthData.findListByMonth.map(
        item => item.date,
      );
      const newMarkedDate = {};
      newexfood_month.forEach((date, i) => {
        const utcDateTime = date;
        const formattedDate = moment
          .utc(utcDateTime)
          .tz('Asia/Bangkok')
          .format('YYYY-MM-DD');
        if (!newMarkedDate[formattedDate]) {
          newMarkedDate[formattedDate] = {dots: []};
        }
        newMarkedDate[formattedDate].dots[0] = {
          key: 'food' + formattedDate,
          color: '#68AD9F',
        };
      });
      setMarkedDate(newMarkedDate);
    }
  }, [newfoodmonthData]);

  useEffect(() => {
    if (newExercisemonthData) {
      const newexercise_month = newExercisemonthData.findExListByMonth.map(
        item => item.date,
      );
      const newMarkedDateExercise = {};
      newexercise_month.forEach((date, i) => {
        const utcDateTime = date;
        const formattedDate = moment
          .utc(utcDateTime)
          .tz('Asia/Bangkok')
          .format('YYYY-MM-DD');
        if (!newMarkedDateExercise[formattedDate]) {
          newMarkedDateExercise[formattedDate] = {dots: []};
        }
        newMarkedDateExercise[formattedDate].dots[0] = {
          key: 'exercise' + formattedDate,
          color: '#3959A4',
        };
      });
      setMarkedDateExercise(newMarkedDateExercise);
    }
  }, [newExercisemonthData]);

  const customizer = (objValue, srcValue) => {
    if (_.isArray(objValue?.dots)) {
      return {...srcValue, dots: objValue.dots.concat(srcValue?.dots || [])};
    }
  };

  const totalCalories = nutritionData?.findList.reduce(
    (acc, item) => acc + item.total_calorie,
    0,
  );

  const total_calories_burned = exerciseData?.findExList.reduce(
    (acc, item) => acc + item.total_calories_burned,
    0,
  );

  const weightOfUser = nutritionData?.findList.map(item => item.weightOfUser);

  const formatdate = day => {
    const date = new Date(day);
    return date.toISOString();
  };

  const initCurrentDate = () => {
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const date = new Date(Isodate).getDate(); //Current Date
    const month = monthNames[new Date(Isodate).getMonth()]; //Current Month
    const year = new Date(Isodate).getFullYear(); //Current Year
    setCurrentDate(date + ' ' + month + ' ' + year);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: 8,
        }}>
        <IconButton
          style={{width: 32}}
          icon="chevron-left"
          iconColor="#1A212F"
          size={32}
          onPress={() => navigation.goBack()}
        />
        <Text
          style={{
            color: 'black',
            fontSize: 16,
            fontFamily: 'NotoSansThai-SemiBold',
          }}>
          สรุปผล
        </Text>
        <Text
          style={{
            width: 32,
          }}></Text>
      </View>
      <Calendar
        style={{
          borderRadius:40
        }}
        theme={{
          textDayFontFamily: 'NotoSansThai-SemiBold',
          textMonthFontFamily: 'NotoSansThai-SemiBold',
          textDayHeaderFontFamily: 'NotoSansThai-Regular',
          monthTextColor: 'black',
          arrowColor: 'black',
          todayTextColor: '#FD9A86',
         
          'stylesheet.day.basic': {
            base: {
              height: 28,
              width: 28,
              alignItems: 'center',
            },
            selected: {
              borderRadius: 50
            },
        }
        }}
        onDayPress={day => {
          const newisoDate = formatdate(day.dateString);
          setIsoDate(newisoDate);
          const newSelectedDate = {};
          const formattedDate = moment
            .utc(newisoDate)
            .tz('Asia/Bangkok')
            .format('YYYY-MM-DD');
          newSelectedDate[formattedDate] = {
            selected: true,
            selectedColor: '#FD9A86', 
            selectedTextColor: '',
          };
          setSelectedDate(newSelectedDate);
        }}
        onMonthChange={month => {
          const newisoMonth = formatdate(month.dateString);
          setIsoMonth(newisoMonth);
        }}
        markedDates={_.mergeWith(
          {},
          markedDateExercise,
          markedDate,
          selectedDate,
          customizer
        )}
        markingType="multi-dot"
      />
      <Text style={styles.text_Regular}>{currentDate}</Text>

      <View style={styles.container_cardtitle}>
        <View style={{paddingRight: 4}}>
          <Card.Title
            style={{backgroundColor: '#DBE9EA', borderRadius: 10, width: 160}}
            titleStyle={{fontFamily: 'NotoSansThai-Regular', fontSize: 12}}
            title="รับประทาน"
            subtitleStyle={{fontFamily: 'NotoSansThai-SemiBold', fontSize: 12}}
            subtitle={(totalCalories?.toFixed(0) || 0) + ' kcal'}
            left={props => (
              <Avatar.Icon
                {...props}
                icon="food"
                color="white"
                backgroundColor="#68AD9F"
              />
            )}
          />
        </View>

        <View>
          <Card.Title
            style={{backgroundColor: '#D4DEEF', borderRadius: 10, width: 160}}
            titleStyle={{fontFamily: 'NotoSansThai-Regular', fontSize: 12}}
            title="เผาผลาญ "
            subtitleStyle={{fontFamily: 'NotoSansThai-SemiBold', fontSize: 12}}
            subtitle={(total_calories_burned?.toFixed(0) || 0) + ' kcal'}
            left={props => (
              <Avatar.Icon
                {...props}
                icon="fire"
                color="white"
                backgroundColor="#3959A4"
              />
            )}
          />
        </View>
      </View>
      <View style={{paddingTop: 10, paddingHorizontal: 18}}>
        <Card.Title
          style={{backgroundColor: '#F5ECDE', borderRadius: 10}}
          titleStyle={{fontFamily: 'NotoSansThai-Regular', fontSize: 12}}
          title="น้ำหนักปัจจุบัน (kg) "
          left={props => (
            <Avatar.Icon
              {...props}
              icon="human-handsup"
              color="white"
              backgroundColor="#E4B765"
            />
          )}
          right={props => (
            <Text
              style={{fontFamily: 'NotoSansThai-SemiBold', paddingRight: 12, fontSize: 12}}>
              {weightOfUser?.length > 0
                ? weightOfUser[weightOfUser.length - 1]
                : weight}
            </Text>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FBFC'
  },
  text_Regular: {
    fontSize: 12,
    paddingTop: 10,
    fontFamily: 'NotoSansThai-SemiBold',
    paddingLeft: 18,
  },
  progress: {
    height: 8,
    borderRadius: 8,
  },
  text_details: {
    paddingRight: 10,
    fontSize: 14,
    fontFamily: 'NotoSansThai-Regular',
  },
  container_cardtitle: {
    flexDirection: 'row',
    paddingTop: 16,
    paddingHorizontal: 18,
  },
});

export default RoutinePlanner;
