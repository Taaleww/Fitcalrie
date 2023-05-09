import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Avatar, Card, Text, ProgressBar} from 'react-native-paper';

export default function ListFood({
  kcal = 0,
  protein = 0,
  carbo = 0,
  fat = 0,
  vitamin = 0,
  resultCalories = 0,
  resultProtein = 0,
  resultCarbo = 0,
  resultFat = 0,
  resultVitamin = 0,
  totalProtein = 0,
  calorieOfUser = 0,
  totalCarbohydrate = 0,
  totalFat = 0,
  totalCabo_day_start = 0,
  totalFat_day_start = 0,
  BMR = 0,
}) {
  return (
    <View>
      {/* Information */}
      <View style={styles.container}>
        <Card.Title
          style={{backgroundColor: 'white', borderRadius: 10}}
          titleStyle={{color: '#1A212F', fontFamily: 'NotoSansThai-Regular'}}
          title="แคลอรี่ (kcal)"
          left={props => (
            <Avatar.Icon
              {...props}
              icon="food"
              color="#1A212F"
              backgroundColor="#E9EFF2"
            />
          )}
          right={props => <Text style={styles.text_details}>{kcal}</Text>}
        />

        <ProgressBar
          progress={resultCalories}
          color={
            kcal > calorieOfUser
              ? '#F89C8A'
              : kcal < BMR
              ? '#E2D784'
              : '#50BFC3'
          }
          style={styles.progress}
        />
      </View>

      <View style={styles.container}>
        <Card.Title
          style={{backgroundColor: 'white', borderRadius: 10}}
          titleStyle={{color: '#1A212F', fontFamily: 'NotoSansThai-Regular'}}
          title="โปรตีน (g)"
          left={props => (
            <Avatar.Icon
              {...props}
              icon="egg"
              color="#1A212F"
              backgroundColor="#E9EFF2"
            />
          )}
          right={props => <Text style={styles.text_details}>{protein}</Text>}
        />
        <ProgressBar
          progress={resultProtein}
          color={protein > totalProtein ? '#50BFC3' : '#E2D784'}
          style={styles.progress}
        />
      </View>

      <View style={styles.container}>
        <Card.Title
          style={{backgroundColor: 'white', borderRadius: 10}}
          titleStyle={{color: '#1A212F', fontFamily: 'NotoSansThai-Regular'}}
          title="คาร์โบไฮเดรต (g)"
          left={props => (
            <Avatar.Icon
              {...props}
              icon="hamburger"
              color="#1A212F"
              backgroundColor="#E9EFF2"
            />
          )}
          right={props => <Text style={styles.text_details}>{carbo}</Text>}
        />
        <ProgressBar
          progress={resultCarbo}
          color={
            carbo > totalCarbohydrate
              ? '#F89C8A'
              : carbo < totalCabo_day_start
              ? '#E2D784'
              : '#50BFC3'
          }
          style={styles.progress}
        />
      </View>

      <View style={styles.container}>
        <Card.Title
          style={{backgroundColor: 'white', borderRadius: 10}}
          titleStyle={{color: '#1A212F', fontFamily: 'NotoSansThai-Regular'}}
          title="ไขมันทั้งหมด (g) "
          left={props => (
            <Avatar.Icon
              {...props}
              icon="water"
              color="#1A212F"
              backgroundColor="#E9EFF2"
            />
          )}
          right={props => <Text style={styles.text_details}>{fat}</Text>}
        />
        <ProgressBar
          progress={resultFat}
          color={
            fat > totalFat
              ? '#F89C8A'
              : fat < totalFat_day_start
              ? '#E2D784'
              : '#50BFC3'
          }
          style={styles.progress}
        />
      </View>

      <View style={styles.container}>
        <Card.Title
          style={{backgroundColor: 'white', borderRadius: 10}}
          titleStyle={{color: '#1A212F', fontFamily: 'NotoSansThai-Regular'}}
          title="วิตามินซี (mg) "
          left={props => (
            <Avatar.Icon
              {...props}
              icon="pill"
              color="#1A212F"
              backgroundColor="#E9EFF2"
            />
          )}
          right={props => <Text style={styles.text_details}>{vitamin}</Text>}
        />
        <ProgressBar
          progress={resultVitamin}
          color={vitamin > 1000 ? '#50BFC3' : '#E2D784'}
          style={styles.progress}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  text_details: {
    paddingRight: 10,
    fontSize: 14,
    fontFamily: 'NotoSansThai-Regular',
  },
  progress: {
    height: 8,
    borderRadius: 8,
    backgroundColor:'#E9EFF2'
  },
});
