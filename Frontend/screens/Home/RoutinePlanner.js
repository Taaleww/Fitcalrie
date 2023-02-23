import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {IconButton, Text, Card, Avatar} from 'react-native-paper';
import {LocaleConfig} from 'react-native-calendars';
import {Calendar} from 'react-native-calendars';

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

  const onDateChange = date => {
    setSelectedStartDate(date);
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
            fontSize: 20,
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
      <View style={{paddingTop: 10, paddingHorizontal: 18}}>
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
            <Text
              style={{fontFamily: 'NotoSansThai-SemiBold', paddingRight: 16}}>
              40
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

export default RoutinePlanner;
