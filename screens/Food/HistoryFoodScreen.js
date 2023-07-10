import React, {useContext, useState, useEffect} from 'react';
import {StyleSheet, View, TouchableOpacity, ScrollView} from 'react-native';
import {IconButton, Text, Card, Avatar} from 'react-native-paper';
import {LocaleConfig} from 'react-native-calendars';
import {Calendar} from 'react-native-calendars';
import ListSummaryNutrition from '../../components/ListSummaryNutrtion';
import {AuthContext} from '../../context/AuthContext';
import {FIND_NUTRITION} from '../../graphql/query';
import {useLazyQuery} from '@apollo/client';
import {SEARCH_FOOD_MONTH} from '../../graphql/query';
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

const HistoryFood = ({navigation, route}) => {
  const [selected, setSelected] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const context = useContext(AuthContext);
  const ID = context.user._id;
  const calorieOfUser = context.user.calorieOfUser;
  const protein = context.user.weight;
  const CURRENT_DATE = new Date();
  const dateString = CURRENT_DATE.toISOString();
  const [Isodate, setIsoDate] = useState(dateString);
  const [Isomonth, setIsoMonth] = useState(dateString);
  const [markedDate, setMarkedDate] = useState({});
  const [selectedDate, setSelectedDate] = useState({});

  const [totalCalories, setTotalCalories] = useState(0);
  const [totalProtein, setTotalProtein] = useState(0);
  const [totalCarbohydrate, setTotalCarbohydrate] = useState(0);
  const [totalFat, setTotalFat] = useState(0);
  const [totalVitaminc, setTotalVitaminc] = useState(0);
  const [totalCabo_day_start, setTotalCabo_day_start] = useState(0);
  const [totalCabo_day, setTotalCabo_day] = useState(0);
  const [totalFat_day_start, setTotalFat_day_start] = useState(0);
  const [totalFat_day, setTotalFat_day] = useState(0);
  const BMR = route?.params.BMR.BMR;

  const [loadExpenseStatus, {loading, error, data}] =
    useLazyQuery(FIND_NUTRITION);

  const [
    loadFoodmonthStatus,
    {loading: foodmonthLoading, error: foodmonthError, data: newfoodmonthData},
  ] = useLazyQuery(SEARCH_FOOD_MONTH);

  useEffect(() => {
    initCurrentDate();
    loadExpenseStatus({
      variables: {
        date: Isodate,
        userId: ID,
      },
    });
  }, [Isodate]); // called once

  useEffect(() => {
    loadFoodmonthStatus({
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
      newexfood_month.forEach(date => {
        const utcDateTime = date;
        const formattedDate = moment
          .utc(utcDateTime)
          .tz('Asia/Bangkok')
          .format('YYYY-MM-DD');
        newMarkedDate[formattedDate] = {marked: true, dotColor: '#FD9A86'};
      });
      setMarkedDate(newMarkedDate);
    }
  }, [newfoodmonthData]);

  useEffect(() => {
    if (data) {
      // calculate total calcories
      const nutritionList = data?.findList;
      const newtotalCalories = nutritionList?.reduce(
        (acc, item) => acc + item.total_calorie,
        0,
      );
      setTotalCalories(newtotalCalories);

      // calculate total protein
      const newtotalProtein = nutritionList?.reduce((total, item) => {
        return total + item.nutritionId.protein * item.servingSize;
      }, 0);
      setTotalProtein(newtotalProtein);

      // Calculate total carbohydrate
      const newtotalCarbohydrate = nutritionList?.reduce((total, item) => {
        return total + item.nutritionId.carbohydrate * item.servingSize;
      }, 0);
      setTotalCarbohydrate(newtotalCarbohydrate);

      // Calculate total carbohydrate per day
      const newtotalCabo_day_start = (calorieOfUser * (40 / 100)) / 4;
      const newtotalCabo_day = (calorieOfUser * (50 / 100)) / 4;
      setTotalCabo_day_start(newtotalCabo_day_start);
      setTotalCabo_day(newtotalCabo_day);

      // Calculate total fat
      const newtotalFat = nutritionList?.reduce((total, item) => {
        return total + item.nutritionId.fat * item.servingSize;
      }, 0);
      setTotalFat(newtotalFat);

      // Calculate total fat per day
      const newtotalFat_day_start = (calorieOfUser * (20 / 100)) / 9;
      const newtotalFat_day = (calorieOfUser * (25 / 100)) / 9;
      setTotalFat_day_start(newtotalFat_day_start);
      setTotalFat_day(newtotalFat_day);

      // Calculate total vitamin C
      const newtotalVitaminc = nutritionList?.reduce((total, item) => {
        return total + item.nutritionId.vitaminc * item.servingSize;
      }, 0);
      setTotalVitaminc(newtotalVitaminc);
    }
  }, [data]); // called when data fetched

  const formatdate = day => {
    const date = new Date(day);
    return date.toISOString();
  };

  const customizer = (objValue, srcValue) => {
    if (_.isArray(objValue?.dots)) {
      return {...srcValue, dots: objValue.dots.concat(srcValue?.dots || [])};
    }
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
            อาหาร
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
                borderRadius: 50,
              },
            },
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
          markedDates={_.mergeWith({}, markedDate, selectedDate, customizer)}
        />
        <Text style={styles.text_Regular}>{currentDate}</Text>

        <ListSummaryNutrition
          kcal={totalCalories ? totalCalories.toFixed(0) : 0}
          protein={totalProtein ? totalProtein.toFixed(0) : 0}
          carbo={totalCarbohydrate ? totalCarbohydrate.toFixed(0) : 0}
          fat={totalFat ? totalFat.toFixed(0) : 0}
          vitaminc={totalVitaminc ? totalVitaminc.toFixed(0) : 0}
          percentCalories={
            totalCalories / calorieOfUser >= 0
              ? (totalCalories / calorieOfUser) * 100
              : 0
          }
          percentProtein={
            totalProtein / protein >= 0 ? (totalProtein / protein) * 100 : 0
          }
          percentCarbo={
            totalCarbohydrate / totalCabo_day >= 0
              ? (totalCarbohydrate / totalCabo_day) * 100
              : 0
          }
          percentFat={
            totalFat / totalFat_day >= 0 ? (totalFat / totalFat_day) * 100 : 0
          }
          percentVitamin={
            totalVitaminc / 1000 >= 0 ? (totalVitaminc / 1000) * 100 : 0
          }
          totalProtein={protein}
          calorieOfUser={calorieOfUser}
          totalCarbohydrate={totalCabo_day}
          totalFat={totalFat_day}
          totalCabo_day_start={totalCabo_day_start}
          totalFat_day_start={totalFat_day_start}
          BMR={BMR}
        />
        {data?.findList?.length > 0 && (
          <Text
            style={{
              fontSize: 12,
              paddingTop: 16,
              fontFamily: 'NotoSansThai-SemiBold',
              paddingLeft: 18,
              paddingBottom:10
            }}>
            อาหารที่รับประทาน
          </Text>
        )}

        {data?.findList?.map((item, index) => (
          <TouchableOpacity
            activeOpacity={0.5}
            style={{paddingHorizontal: 18}}
            onPress={() =>
              navigation.navigate({
                name: 'Information',
                params: {
                  id: item._id,
                  nutritionID: item.nutritionId._id,
                  servingSize: item.servingSize,
                  totalCalories: item.total_calorie,
                  totalProtein: totalProtein[index],
                  totalCarbohydrate: totalCarbohydrate[index],
                  totalFat: totalFat[index],
                  totalVitaminc: totalVitaminc[index],
                },
                merge: true,
              })
            }>
            <View style={styles.container}>
              <Card.Title
                style={{backgroundColor: 'white', borderRadius: 10}}
                titleStyle={{fontFamily: 'NotoSansThai-Regular', fontSize: 12}}
                title={item.nutritionId.name + ' (' + item.servingSize + ')'}
                subtitleStyle={{
                  fontFamily: 'NotoSansThai-Regular',
                  fontSize: 12,
                }}
                subtitle={String(item.total_calorie) + ' kcal'}
                left={props => (
                  <Avatar.Icon
                    {...props}
                    icon="food"
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
    paddingTop: 16,
    fontFamily: 'NotoSansThai-SemiBold',
    paddingLeft: 18,
  },
});

export default HistoryFood;
