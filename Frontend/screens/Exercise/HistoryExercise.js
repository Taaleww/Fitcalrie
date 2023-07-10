import React, {useContext, useState, useEffect} from 'react';
import {StyleSheet, View, TouchableOpacity, ScrollView} from 'react-native';
import {IconButton, Text, Card, Avatar, ProgressBar} from 'react-native-paper';
import {LocaleConfig} from 'react-native-calendars';
import {Calendar} from 'react-native-calendars';
import {AuthContext} from '../../context/AuthContext';
import {useLazyQuery} from '@apollo/client';
import {FIND_EXERCISE} from '../../graphql/query';
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

const HistoryExercise = ({navigation}) => {
  const [currentDate, setCurrentDate] = useState('');
  const context = useContext(AuthContext);
  const calorieOfUser = context.user.calorieOfUser;
  const ID = context.user._id;
  const CURRENT_DATE = new Date();
  const dateString = CURRENT_DATE.toISOString();
  const [exerciseData, setExerciseData] = useState(undefined);
  const [Isodate, setIsoDate] = useState(dateString);
  const [Isomonth, setIsoMonth] = useState(dateString);
  const [total_calories_burned, setTotal_calories_burned] = useState(0);
  const [markedDate, setMarkedDate] = useState({});
  const [selectedDate, setSelectedDate] = useState({});
  const [
    loadExerciseStatus,
    {loading: exerciseLoading, error: exerciseError, data: newExerciseData},
  ] = useLazyQuery(FIND_EXERCISE);

  const [
    loadExercisemonthStatus,
    {
      loading: exercisemonthLoading,
      error: exercisemonthError,
      data: newExercisemonthData,
    },
  ] = useLazyQuery(SEARCH_EXERCISE_MONTH);

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

  useEffect(() => {
    initCurrentDate();
    loadExerciseStatus({
      variables: {
        date: Isodate,
        userId: ID,
      },
    });
  }, [Isodate]); // called once

  useEffect(() => {
    loadExercisemonthStatus({
      variables: {
        date: Isomonth,
        userId: ID,
      },
    });
  }, [Isomonth]); // called once

  useEffect(() => {
    if (newExerciseData) {
      setExerciseData(newExerciseData);
      const newtotal_calories_burned = newExerciseData?.findExList.reduce(
        (acc, item) => acc + item.total_calories_burned,
        0,
      );
      setTotal_calories_burned(newtotal_calories_burned);
    }
  }, [newExerciseData]);

  useEffect(() => {
    if (newExercisemonthData) {
      const newexercise_month = newExercisemonthData.findExListByMonth.map(
        item => item.date,
      );
      const newMarkedDate = {};

      newexercise_month.forEach(date => {
        const utcDateTime = date;
        const formattedDate = moment
          .utc(utcDateTime)
          .tz('Asia/Bangkok')
          .format('YYYY-MM-DD');
        newMarkedDate[formattedDate] = {marked: true, dotColor: '#FD9A86'};
      });
      setMarkedDate(newMarkedDate);
    }
  }, [newExercisemonthData]);

  const customizer = (objValue, srcValue) => {
    if (_.isArray(objValue?.dots)) {
      return {...srcValue, dots: objValue.dots.concat(srcValue?.dots || [])};
    }
  };

  return (
    <ScrollView style={{backgroundColor: '#F9FBFC'}}>
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
            ออกกำลังกาย
          </Text>
          <Text
            style={{
              width: 32,
            }}></Text>
        </View>
        <Calendar
          style={{
            borderRadius: 40,
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
            markedDate,
            selectedDate,
            customizer
          )}
        />
        <Text style={styles.text_Regular}>{currentDate}</Text>
        <View style={{paddingTop: 10, paddingHorizontal: 18}}>
          <Card.Title
            style={{backgroundColor: 'white', borderRadius: 10}}
            titleStyle={{fontFamily: 'NotoSansThai-Regular',fontSize:12}}
            title="เผาผลาญ (kcal)"
            left={props => (
              <Avatar.Icon
                {...props}
                icon="fire"
                color="#1A212F"
                backgroundColor="#E9EFF2"
              />
            )}
            right={props => (
              <Text style={styles.text_details}>
                {total_calories_burned?.toFixed(0)}
              </Text>
            )}
          />
          <ProgressBar
            progress={total_calories_burned / calorieOfUser}
            color={
              total_calories_burned > calorieOfUser ? '#50BFC3' : '#E2D784'
            }
            style={styles.progress}
          />
        </View>
        {exerciseData && (
          <View>
            {exerciseData?.findExList?.length > 0 && (
              <Text style={styles.text_Regular}>ออกกำลังกาย</Text>
            )}
            {exerciseData?.findExList?.map((item, index) => (
              <TouchableOpacity
                activeOpacity={0.5}
                style={{paddingHorizontal: 18}}
                onPress={() =>
                  navigation.navigate({
                    name: 'InformationExercise',
                    params: {
                      name: item.exerciseId.name,
                      time: item.time,
                      total_calories_burned: item.total_calories_burned,
                    },
                    merge: true,
                  })
                }>
                <View style={{paddingTop: 10}}>
                  <Card.Title
                    style={{backgroundColor: 'white', borderRadius: 10}}
                    titleStyle={{fontFamily: 'NotoSansThai-Regular',fontSize:12}}
                    title={item.exerciseId.name}
                    subtitleStyle={{fontFamily: 'NotoSansThai-Regular',fontSize:12}}
                    subtitle={
                      String(item.total_calories_burned?.toFixed(0)) + ' kcal'
                    }
                    left={props => (
                      <Avatar.Icon
                        {...props}
                        icon="arm-flex"
                        color="#1A212F"
                        backgroundColor="#E9EFF2"
                      />
                    )}
                    right={props => (
                      <IconButton
                        {...props}
                        icon="chevron-right"
                        iconColor="#1A212F"
                      />
                    )}
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10,
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
    backgroundColor:'#E9EFF2'
  },
  text_details: {
    paddingRight: 10,
    fontSize: 12,
    fontFamily: 'NotoSansThai-Regular',
  },
});

export default HistoryExercise;
