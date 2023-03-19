import React, {useContext, useState, useEffect} from 'react';
import {StyleSheet, View, TouchableOpacity, ScrollView} from 'react-native';
import {IconButton, Text, Card, Avatar} from 'react-native-paper';
import {LocaleConfig} from 'react-native-calendars';
import {Calendar} from 'react-native-calendars';
import ListSummaryNutrition from '../../components/ListSummaryNutrtion';
import {AuthContext} from '../../context/AuthContext';
import {FIND_NUTRITION} from '../../graphql/query';
import {useLazyQuery} from '@apollo/client';

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

const HistoryFood = ({navigation}) => {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const context = useContext(AuthContext);
  const ID = context.user._id;
  const onDateChange = date => {
    setSelectedStartDate(date);
  };
  const CURRENT_DATE = new Date();
  const dateString = CURRENT_DATE.toISOString();

  const [loadExpenseStatus, {loading, error, data}] =
    useLazyQuery(FIND_NUTRITION);

  useEffect(() => {
    loadExpenseStatus({
      variables: {
        date: dateString,
        userId: ID,
      },
    });
  }, []); // called once

  console.log(data);
  const nutritionItems = data?.findList?.map(
    nutrition => nutrition?.nutritionId,
  );
  const Nutrtionid = nutritionItems?.map(item => item._id);
  const Calorie = data?.findList.map(item => item.total_calorie);
  const servingSize = data?.findList.map(item => item.servingSize);
  const nutritionList = data?.findList;
  const totalCalories = nutritionList?.reduce(
    (acc, item) => acc + item.total_calorie,
    0,
  );
  const totalProtein = nutritionItems?.reduce((total, nutrition) => {
    return total + nutrition.protein;
  }, 0);

  const totalCarbohydrate = nutritionItems?.reduce((total, nutrition) => {
    return total + nutrition.carbohydrate;
  }, 0);

  const totalFat = nutritionItems?.reduce((total, nutrition) => {
    return total + nutrition.fat;
  }, 0);

  const totalVitaminc = nutritionItems?.reduce((total, nutrition) => {
    return total + nutrition.vitaminc;
  }, 0);

  const formatdate = day => {
    const date = new Date(day);
    return date.toISOString();
  };

  return (
    <ScrollView>
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
            fontSize: 20,
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
        theme={{
          textDayFontFamily: 'NotoSansThai-SemiBold',
          textMonthFontFamily: 'NotoSansThai-SemiBold',
          textDayHeaderFontFamily: 'NotoSansThai-Regular',
          monthTextColor: 'black',
          arrowColor: 'black',
          todayTextColor: '#FD9A86',
        }}
        onDayPress={day => {
          const isoDate = formatdate(day.dateString);
          console.log('selected day', day.dateString, 'ISO date', isoDate);
        }}
        // Collection of dates that have to be marked. Default = {}
        markedDates={{
          '2023-02-16': {marked: true, dotColor: '#FD9A86'},
          '2023-02-17': {marked: true, dotColor: '#E2D784'},
          '2023-02-18': {marked: true, dotColor: '#50BFC3', activeOpacity: 0},
          '2023-02-19': {disabled: true, disableTouchEvent: true},
        }}
      />
      <Text style={styles.text_Regular}>Mon 22 Jun</Text>

      <ListSummaryNutrition
        kcal={totalCalories?.toFixed(0)}
        protein={totalProtein?.toFixed(0)}
        carbo={totalCarbohydrate?.toFixed(0)}
        fat={totalFat?.toFixed(0)}
        vitaminc={totalVitaminc?.toFixed(0)}
      />
      <Text style={styles.text_Regular}>อาหารที่รับประทาน</Text>
      {data?.findList?.map((item, index) => (
        <TouchableOpacity
          activeOpacity={0.5}
          style={{paddingHorizontal: 18}}
          onPress={() =>
            navigation.navigate({
              name: 'Information',
              params: {
                id: id[index],
                nutritionID: Nutrtionid[index],
                servingSize: servingSize[index],
                totalCalories: Calorie[index],
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
              titleStyle={{fontFamily: 'NotoSansThai-Regular'}}
              title={
                nutritionItems[index].name + ' (' + servingSize[index] + ')'
              }
              subtitleStyle={{fontFamily: 'NotoSansThai-Regular'}}
              subtitle={String(Calorie[index]) + ' kcal'}
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
    paddingTop: 10,
  },
  text_Regular: {
    fontSize: 14,
    paddingTop: 10,
    fontFamily: 'NotoSansThai-SemiBold',
    paddingLeft: 18,
  },
});

export default HistoryFood;
