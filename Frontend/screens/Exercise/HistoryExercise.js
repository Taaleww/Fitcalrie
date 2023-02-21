import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {
  Button,
  IconButton,
  Text,
  Card,
  Avatar,
  ProgressBar,
} from 'react-native-paper';
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
export default class HistoryExercise extends Component {
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

        <View style={{paddingTop: 10, paddingHorizontal: 18}}>
          <Card.Title
            style={{backgroundColor: 'white', borderRadius: 10}}
            titleStyle={{fontFamily: 'NotoSansThai-Regular'}}
            title="เผาผลาญ (kcal)"
            left={props => (
              <Avatar.Icon
                {...props}
                icon="fire"
                color="#1A212F"
                backgroundColor="#E9EFF2"
              />
            )}
            right={props => <Text style={styles.text_details}>500</Text>}
          />
          <ProgressBar progress={0.5} color="#E2D784" style={styles.progress} />
        </View>
        <Text style={styles.text_Regular}>ออกกำลังกาย</Text>
        <TouchableOpacity
          activeOpacity={0.5}
          style={{paddingHorizontal:18}}
          >
          <View style={{paddingTop: 10}}>
            <Card.Title
              style={{backgroundColor: 'white', borderRadius: 10}}
              titleStyle={{
                fontFamily: 'NotoSansThai-Regular',
              }}
              title="วิ่ง "
              left={props => (
                <Avatar.Icon
                  {...props}
                  icon="arm-flex"
                  color="#1A212F"
                  backgroundColor="#E9EFF2"
                />
              )}
              right={props => (
                <Text style={{paddingRight: 10, fontSize: 14}}>120 kcal</Text>
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
    flex: 1
  },
  text_Regular: {
    fontSize: 14,
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
});
