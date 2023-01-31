import * as React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Avatar, Card, IconButton, Text, ProgressBar, Button } from 'react-native-paper';

const NutritionLunchScreen = ({navigation}) => (
  <ScrollView name="NutritionScreen">
    <View style={styles.box}>
      {/* <View style={styles.iconbutton}>
        <IconButton
          icon="chevron-left"
          iconColor="#1A212F"
          size={36}
          onPress={() => console.log('Pressed')}
        />
      </View>

      <Text style={styles.text_header}>อาหารกลางวัน</Text>
      <Text style={styles.text_detail}>120 Kcal</Text> */}
      <Text style={styles.text_Regular}>เมนูอาหาร</Text>

      <TouchableOpacity activeOpacity={0.5} onPress={() =>
        navigation.navigate('DeleteFood')
      } >
        <View style={styles.container}>
          <Card.Title
            style={{ backgroundColor: 'white', borderRadius: 10 }}
            titleStyle={{ color: "#1A212F" }}
            title="ข้าวกระเพราไก่"
            subtitle="120 kcal"
            left={(props) => <Avatar.Icon {...props} icon="food" color='#1A212F' backgroundColor='#E9EFF2' />}
            right={(props) => <IconButton {...props} icon="chevron-right" iconColor='#1A212F' onPress={() => { }} />}
          />
        </View>
      </TouchableOpacity>

      <View style={{ paddingTop: 410 }}>
        <View style={styles.button}>
          <Button
            style={{ backgroundColor: '#FD9A86', borderRadius: 10 }}
            textColor="white"
            mode="contained"
            onPress={() =>
              navigation.navigate('SearchFood')
            } >
            เพิ่มมื้ออาหาร
          </Button>
        </View>

      </View>
    </View>


  </ScrollView>

);

export default NutritionLunchScreen;

const styles = StyleSheet.create({
  box: {
    paddingBottom: 13
  },
  container: {
    paddingTop: 10,
    paddingLeft: 18,
    paddingRight: 18,
  },
  text_header: {
    color: '#1A212F',
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 116,
    textAlign: 'center'
  },
  text_detail: {
    color: '#FD9A86',
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 116,
    textAlign: 'center',
  },
  text_Regular: {
    color: '#1A212F',
    fontWeight: 'bold',
    fontSize: 20,
    paddingLeft: 18,
    paddingTop: 24
  },
  button: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 18,
    paddingRight: 18,
    paddingBottom: 10
  },
  iconbutton: {
    paddingLeft: 3,
    top: 50
  }
});