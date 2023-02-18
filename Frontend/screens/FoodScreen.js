import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Avatar, Card, IconButton, Text} from 'react-native-paper';
import ListFood from '../components/ListFood';

const FoodScreen = ({ navigation }) => {

  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var date = new Date().getDate(); //Current Date
    var month = monthNames[new Date().getMonth()]; //Current Month
    var year = new Date().getFullYear(); //Current Year
    setCurrentDate(
      date + ' ' + month + ' ' + year
    );
  }, []);
  return (
    <ScrollView>
      <View style={styles.box}>
        <View style={styles.iconbutton}>
          <IconButton
            icon="calendar-month"
            iconColor="white"
            mode='contained-tonal'
            containerColor='#FD9A86'
            size={20}
            onPress={() => console.log('Pressed')}
          />
        </View>
        <Text style={styles.text_header}>วันนี้คุณรับประทานไปทั้งหมด 500 Kcal</Text>


        <Text style={styles.text_Regular}>{currentDate}</Text>

        {/* Information */}
        <ListFood
         kcal={20}
         protein={20}
         carbo={20}
         fat={20}
         sugar={20}
       />

        {/* Add Food */}
        <Text style={styles.text_Regular}>อาหารที่รับประทาน</Text>
        <TouchableOpacity activeOpacity={0.5} onPress={() =>
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
        </TouchableOpacity>

      </View>

    </ScrollView>
  );
};

export default FoodScreen;

const styles = StyleSheet.create({
  box: {
    paddingBottom: 13,
    paddingLeft: 18,
    paddingRight: 18

  },
  container: {
    paddingTop: 10
  },
  text_header: {
    fontSize: 20,
    paddingHorizontal: 100,
    textAlign: 'center',
    paddingTop: 20,
    fontFamily: 'NotoSansThai-SemiBold'
  },
  text_Regular: {
    fontSize: 14,
    paddingTop: 24,
    fontFamily: 'NotoSansThai-Regular'
  },
  progress: {
    height: 8,
    borderRadius: 8
  },
  iconbutton: {
    paddingHorizontal: 332,
    top: 50
  }

});