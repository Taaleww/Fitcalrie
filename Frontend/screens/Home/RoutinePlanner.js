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
        <Text style={styles.text_Regular}>Mon 22 Jun</Text>

        <View style={styles.container_cardtitle}>
          <View style={{paddingRight: 16}}>
            <Card.Title
              style={{backgroundColor: 'white', borderRadius: 10, width: 180}}
              titleStyle={{fontFamily: 'NotoSansThai-Regular', fontSize: 14}}
              title="รับประทาน"
              subtitleStyle={{fontFamily: 'NotoSansThai-SemiBold'}}
              subtitle="0 (kcal)"
              left={props => (
                <Avatar.Icon
                  {...props}
                  icon="food"
                  color="white"
                  backgroundColor="#FD9A86"
                />
              )}
            />
          </View>

          <View>
            <Card.Title
              style={{backgroundColor: 'white', borderRadius: 10, width: 180}}
              titleStyle={{fontFamily: 'NotoSansThai-Regular', fontSize: 14}}
              title="เผาผลาญ "
              subtitleStyle={{fontFamily: 'NotoSansThai-SemiBold'}}
              subtitle="0 (kcal)"
              left={props => (
                <Avatar.Icon
                  {...props}
                  icon="fire"
                  color="white"
                  backgroundColor="#FD9A86"
                />
              )}
            />
          </View>
        </View>
        <View style={{paddingTop: 10, paddingHorizontal:18}}>
          <Card.Title
            style={{backgroundColor: 'white', borderRadius: 10}}
            titleStyle={{fontFamily: 'NotoSansThai-Regular', fontSize: 14}}
            title="น้ำหนักปัจจุบัน (kg) "
            left={props => (
                <Avatar.Icon
                  {...props}
                  icon="human-handsup"
                  color="white"
                  backgroundColor="#FD9A86"
                />
              )}
            right={props => (
                <Text style={{fontFamily: 'NotoSansThai-SemiBold', paddingRight:16}}>40</Text>
              )}
          />
        </View>
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
