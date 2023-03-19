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
        {kcal > calorieOfUser ? (
          <ProgressBar
            progress={resultCalories}
            color="#F89C8A" // red
            style={styles.progress}
          />
        ) : kcal < calorieOfUser ? (
          <ProgressBar
            progress={resultCalories}
            color="#E2D784" // yellow 
            style={styles.progress}
          />
        ) : (
          <ProgressBar
            progress={resultCalories}
            color="#50BFC3" // green
            style={styles.progress}
          />
        )}
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
        {protein > totalProtein ? (
          <ProgressBar
            progress={resultProtein}
            color="#50BFC3" // green
            style={styles.progress}
          />
        ) : (
          <ProgressBar
            progress={resultProtein}
            color="#E2D784" // yellow
            style={styles.progress}
          />
        )}
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
        {carbo > totalCarbohydrate ? (
          <ProgressBar
            progress={resultCarbo}
            color="#F89C8A"  // red
            style={styles.progress}
          />
        ) : carbo < totalCarbohydrate ? (
          <ProgressBar
            progress={resultCarbo}
            color="#E2D784" // yellow
            style={styles.progress}
          />
        ) : (
          <ProgressBar
            progress={resultCarbo}
            color="#50BFC3" // green
            style={styles.progress}
          />
        )}
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
        {fat > totalFat ? (
          <ProgressBar
            progress={resultFat}
            color="#F89C8A" // red
            style={styles.progress}
          />
        ) : fat < totalFat ? (
          <ProgressBar
            progress={resultFat}
            color="#E2D784" // yellow
            style={styles.progress}
          />
        ) : (
          <ProgressBar
            progress={resultFat}
            color="#50BFC3" // green
            style={styles.progress}
          />
        )}
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
        {vitamin > 1000 ? (
          <ProgressBar
            progress={resultVitamin}
            color="#50BFC3"  // green
            style={styles.progress}
          />
        ) : (
          <ProgressBar
            progress={resultVitamin}
            color="#E2D784" // yellow
            style={styles.progress}
          />
        )}
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
  },
});
