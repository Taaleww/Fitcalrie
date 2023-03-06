import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {Button, IconButton, Text, Card, Avatar} from 'react-native-paper';
import ListFood from '../../components/ListFood';

const FoodScreen = ({navigation}) => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    var monthNames = [
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
    var date = new Date().getDate(); //Current Date
    var month = monthNames[new Date().getMonth()]; //Current Month
    var year = new Date().getFullYear(); //Current Year
    setCurrentDate(date + ' ' + month + ' ' + year);
  }, []);
  return (
    <ScrollView>
      <View style={styles.box}>
        <View
          style={{
            paddingTop: 50,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{width: 48}}></View>
          <Text style={styles.text_header}>
            วันนี้คุณรับประทานไปทั้งหมด
            <Text style={styles.innerText}> 500</Text> Kcal
          </Text>

          <View style={styles.iconbutton}>
            <IconButton
              icon="calendar-month"
              iconColor="white"
              mode="contained-tonal"
              containerColor="#FD9A86"
              size={20}
              onPress={() => navigation.navigate('HistoryFood')}
            />
          </View>
        </View>

        <View
          style={{
            paddingTop: 24,
            flexDirection: 'row',
          }}>
          <Text style={styles.text_Regular}>{currentDate}</Text>
          <View style={styles.iconbutton}>
            <IconButton
              icon="alert-circle-outline"
              iconColor="#8E8E8E"
              size={14}
              onPress={() => navigation.navigate('InformationFood')}
            />
          </View>
        </View>

        {/* Information */}
        <ListFood kcal={20} protein={20} carbo={20} fat={20} vitamin={20} />
        {/* Add Food */}
        <Text
          style={{
            fontSize: 14,
            paddingTop: 24,
            fontFamily: 'NotoSansThai-SemiBold',
          }}>
          อาหารที่รับประทาน
        </Text>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('DeleteFood')}>
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
        <View style={styles.button}>
          <Button
            style={{backgroundColor: '#FD9A86', borderRadius: 10}}
            labelStyle={{
              fontFamily: 'NotoSansThai-Regular',
            }}
            textColor="white"
            mode="contained"
            onPress={() => navigation.navigate('SearchFood')}>
            เพิ่มมื้ออาหาร
          </Button>
        </View>

        {/* <TouchableOpacity activeOpacity={0.5} onPress={() =>
          navigation.navigate('Nutrition')
        }>
          <View style={{ paddingTop: 10 }} >
            <Card.Title
              style={{ backgroundColor: 'white', borderRadius: 10 }}
              titleStyle={{  fontFamily: 'NotoSansThai-Regular' }}
              title="มื้อเช้า "
              subtitleStyle={{fontFamily: 'NotoSansThai-Regular'}}
              subtitle="120 kcal"
              left={(props) => <Avatar.Icon {...props} icon="weather-sunset" color='#1A212F' backgroundColor='#E9EFF2' />}
              right={(props) => <IconButton {...props} icon="plus" iconColor='#1A212F' onPress={() => { }} />}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.5} onPress={() =>
          navigation.navigate('NutritionLunch')
        }>
          <View style={{ paddingTop: 10 }} >
            <Card.Title
              style={{ backgroundColor: 'white', borderRadius: 10 }}
              titleStyle={{ fontFamily: 'NotoSansThai-Regular'  }}
              title="มื้อกลางวัน "
              subtitleStyle={{fontFamily: 'NotoSansThai-Regular'}}
              subtitle="120 kcal"
              left={(props) => <Avatar.Icon {...props} icon="white-balance-sunny" color='#1A212F' backgroundColor='#E9EFF2' />}
              right={(props) => <IconButton {...props} icon="plus" iconColor='#1A212F' onPress={() => { }} />}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.5} onPress={() =>
          navigation.navigate('NutritionNight')
        }>
          <View style={{ paddingTop: 10 }} >
            <Card.Title
              style={{ backgroundColor: 'white', borderRadius: 10 }}
              titleStyle={{ fontFamily: 'NotoSansThai-Regular' }}
              title="มื้อเย็น "
              subtitleStyle={{fontFamily: 'NotoSansThai-Regular'}}
              subtitle="120 kcal"
              left={(props) => <Avatar.Icon {...props} icon="weather-night" color='#1A212F' backgroundColor='#E9EFF2' />}
              right={(props) => <IconButton {...props} icon="plus" iconColor='#1A212F' onPress={() => { }} />}
            />
          </View>
        </TouchableOpacity> */}
      </View>
    </ScrollView>
  );
};

export default FoodScreen;

const styles = StyleSheet.create({
  box: {
    paddingBottom: 13,
    paddingLeft: 18,
    paddingRight: 18,
  },
  container: {
    paddingTop: 10,
  },
  text_header: {
    fontSize: 20,
    paddingHorizontal: 10,
    textAlign: 'center',
    fontFamily: 'NotoSansThai-SemiBold',
    width: 200,
  },
  text_Regular: {
    fontSize: 14,
    paddingTop: 12,
    fontFamily: 'NotoSansThai-SemiBold',
  },
  progress: {
    height: 8,
    borderRadius: 8,
  },
  iconbutton: {},
  button: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 24,
  },
  innerText: {
    color: '#FD9A86',
    fontFamily: 'NotoSansThai-SemiBold',
  },
});
