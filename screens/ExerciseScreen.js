import * as React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Avatar, Card, IconButton, Text, ProgressBar, Button } from 'react-native-paper';

const FoodScreen = ({navigation}) => (
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
      <Text style={styles.text_header}>วันนี้คุณเผาผลาญไปทั้งหมด 220 Kcal</Text>
      <Text style={styles.text_Regular}>Mon, 23 Jan 2023</Text>

      {/* Information */}
      <View style={{paddingTop: 10}}>
        <Card.Title
          style={{ backgroundColor: 'white', borderRadius: 10 }}
          titleStyle={{ color: "#1A212F" }}
          title="เผาผลาญ (kcal)"
          left={(props) => <Avatar.Icon {...props} icon="fire" color='#1A212F' backgroundColor='#E9EFF2' />}
          right={(props) => <Text style={styles.text_details}>500</Text>}
        />
        <ProgressBar progress={0.5} color='#E2D784' style={styles.progress} />
      </View>

      <Text style={styles.text_Regular}>ออกกำลังกาย</Text>
      <TouchableOpacity activeOpacity={0.5} onPress={() =>
                navigation.navigate('DeleteExercise')
                }>
          <View style={{ paddingTop: 10 }} >
            <Card.Title
              style={{ backgroundColor: 'white', borderRadius: 10 }}
              titleStyle={{ color: "#1A212F" }}
              title="วิ่ง "
              left={(props) => <Avatar.Icon {...props} icon="arm-flex" color='#1A212F' backgroundColor='#E9EFF2' />}
              right={(props) => <Text style={{paddingRight: 10,fontSize: 14}}>120 kcal</Text>}
            />
          </View>
        </TouchableOpacity>


      <View style={{ paddingTop: 120}}>
      <View style={styles.button}>
        <Button style={{ backgroundColor: 'white', borderRadius: 10 }} textColor="#FD9A86" mode="contained" onPress={() =>
                navigation.navigate('CalculationExercise')
                }>
          เพิ่มการเผาผลาญจากการวิ่ง
        </Button>
      </View>
      <View style={styles.button}>
        <Button style={{ backgroundColor: '#FD9A86', borderRadius: 10 }} textColor="white" mode="contained" onPress={() =>
                navigation.navigate('SearchExercise')
                }>
          เพิ่มการเผาผลาญ
        </Button>
      </View>

      </View>

    </View>


  </ScrollView>

);

export default FoodScreen;

const styles = StyleSheet.create({
  box: {
    paddingBottom: 13,
    paddingLeft: 18,
    paddingRight: 18,

  },
  text_header: {
    color: '#1A212F',
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 100,
    textAlign: 'center',
    paddingTop: 20
  },
  text_Regular: {
    color: '#1A212F',
    fontSize: 14,
    paddingTop: 24
  },
  text_details: {
    paddingRight: 10,
    fontSize: 14
  },
  progress: {
    height: 8,
    borderRadius: 8
  },
  iconbutton: {
    paddingHorizontal: 332,
    top: 50
  },
  button: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 10
  }

});