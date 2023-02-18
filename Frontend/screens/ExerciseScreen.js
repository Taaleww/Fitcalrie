import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {
  Avatar,
  Card,
  IconButton,
  Text,
  ProgressBar,
  Button,
} from 'react-native-paper';

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
        <View style={styles.iconbutton}>
          <IconButton
            icon="calendar-month"
            iconColor="white"
            mode="contained-tonal"
            containerColor="#FD9A86"
            size={20}
            onPress={() => console.log('Pressed')}
          />
        </View>
        <Text style={styles.text_header}>
          วันนี้คุณเผาผลาญไปทั้งหมด 220 Kcal
        </Text>
        <Text style={styles.text_Regular}>{currentDate}</Text>

        {/* Information */}
        <View style={{paddingTop: 10}}>
          <Card.Title
            style={{backgroundColor: 'white', borderRadius: 10}}
            titleStyle={{ fontFamily: 'NotoSansThai-Regular'}}
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
          onPress={() => navigation.navigate('DeleteExercise')}>
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

        <View style={{paddingTop: 10}}>
          <View style={styles.button}>
            <Button
              style={{backgroundColor: 'white', borderRadius: 10}}
              labelStyle={{
                fontFamily: 'NotoSansThai-Regular',
              }}
              textColor="#FD9A86"
              mode="contained"
              onPress={() => navigation.navigate('CalculationExercise')}>
              เพิ่มการเผาผลาญจากการวิ่ง
            </Button>
          </View>
          <View style={styles.button}>
            <Button
              style={{backgroundColor: '#FD9A86', borderRadius: 10}}
              labelStyle={{
                fontFamily: 'NotoSansThai-Regular',
              }}
              textColor="white"
              mode="contained"
              onPress={() => navigation.navigate('SearchExercise')}>
              เพิ่มการเผาผลาญ
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default FoodScreen;

const styles = StyleSheet.create({
  box: {
    paddingLeft: 18,
    paddingRight: 18,
  },
  text_header: {
    fontSize: 20,
    paddingHorizontal: 100,
    textAlign: 'center',
    paddingTop: 20,
    fontFamily: 'NotoSansThai-SemiBold',
  },
  text_Regular: {
    fontSize: 14,
    paddingTop: 24,
    fontFamily: 'NotoSansThai-Regular',
  },
  text_details: {
    paddingRight: 10,
    fontSize: 14,
    fontFamily: 'NotoSansThai-Regular',
  },
  progress: {
    height: 8,
    borderRadius: 8,
  },
  iconbutton: {
    paddingHorizontal: 332,
    top: 50,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 10,
  },
});
