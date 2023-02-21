import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Button, IconButton, Text, Card, Avatar} from 'react-native-paper';
import {LocaleConfig} from 'react-native-calendars';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import ProgressCircle from 'react-native-progress-circle';
import ListSummaryNutrition from '../../components/ListSummaryNutrtion';

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
export default class HistoryFood extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }

  render() {
    const {selectedStartDate} = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
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
          kcal={20}
          protein={20}
          carbo={20}
          fat={20}
          sugar={20}
        />
        <Text style={styles.text_Regular}>อาหารที่รับประทาน</Text>
        <TouchableOpacity activeOpacity={0.5} style={{paddingHorizontal: 18}}>
          <View style={styles.container}>
            <Card.Title
              style={{backgroundColor: 'white', borderRadius: 10}}
              titleStyle={{fontFamily: 'NotoSansThai-Regular'}}
              title="ข้าวกระเพราไก่"
              subtitleStyle={{fontFamily: 'NotoSansThai-Regular'}}
              subtitle="120 kcal"
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
                  onPress={() => {}}
                />
              )}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text_Regular: {
    fontSize: 14,
    paddingTop: 10,
    fontFamily: 'NotoSansThai-SemiBold',
    paddingLeft: 18,
  },
});
