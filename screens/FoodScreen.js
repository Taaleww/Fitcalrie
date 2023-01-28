import * as React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Avatar, Card, IconButton, Text, ProgressBar, MD3Colors, } from 'react-native-paper';

const FoodScreen = () => (
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


      <Text style={styles.text_Regular}>Mon, 23 Jan 2023</Text>

      {/* Information */}
      <View style={styles.container}>
        <Card.Title
          style={{ backgroundColor: 'white', borderRadius: 10 }}
          titleStyle={{ color: "#1A212F" }}
          title="แคลอรี่ (kcal)"
          left={(props) => <Avatar.Icon {...props} icon="food" color='#1A212F' backgroundColor='#E9EFF2' />}
          right={(props) => <Text style={styles.text_details}>500</Text>}
        />
        <ProgressBar progress={0.5} color='#E2D784' style={styles.progress} />
      </View>

      <View style={styles.container}>
        <Card.Title
          style={{ backgroundColor: 'white', borderRadius: 10 }}
          titleStyle={{ color: "#1A212F" }}
          title="โปรตีน (g)"
          left={(props) => <Avatar.Icon {...props} icon="egg" color='#1A212F' backgroundColor='#E9EFF2' />}
          right={(props) => <Text style={styles.text_details}>500</Text>}
        />
        <ProgressBar progress={0.5} color="#FD9A86" style={styles.progress} />

      </View>

      <View style={styles.container}>

        <Card.Title
          style={{ backgroundColor: 'white', borderRadius: 10 }}
          titleStyle={{ color: "#1A212F" }}
          title="คาร์โบไฮเดรต (g)"
          left={(props) => <Avatar.Icon {...props} icon="hamburger" color='#1A212F' backgroundColor='#E9EFF2' />}
          right={(props) => <Text style={styles.text_details}>500</Text>}
        />
        <ProgressBar progress={0.5} color="#50BFC3" style={styles.progress} />

      </View>

      <View style={styles.container}>
        <Card.Title
          style={{ backgroundColor: 'white', borderRadius: 10 }}
          titleStyle={{ color: "#1A212F" }}
          title="ไขมันทั้งหมด (g) "
          left={(props) => <Avatar.Icon {...props} icon="water" color='#1A212F' backgroundColor='#E9EFF2' />}
          right={(props) => <Text style={styles.text_details}>500</Text>}
        />
        <ProgressBar progress={0.5} color="#FD9A86" style={styles.progress} />
      </View>

      <View style={styles.container}>
        <Card.Title
          style={{ backgroundColor: 'white', borderRadius: 10 }}
          titleStyle={{ color: "#1A212F" }}
          title="น้ำตาล (g) "
          left={(props) => <Avatar.Icon {...props} icon="spoon-sugar" color='#1A212F' backgroundColor='#E9EFF2' />}
          right={(props) => <Text style={styles.text_details}>500</Text>}
        />
        <ProgressBar progress={0.5} color="#FD9A86" style={styles.progress} />
      </View>
      
      {/* Add Food */}
      <Text style={styles.text_Regular}>อาหารที่รับประทาน</Text>
      <TouchableOpacity activeOpacity={0.5}>
          <View style={{ paddingTop: 10 }} >
            <Card.Title
              style={{ backgroundColor: 'white', borderRadius: 10 }}
              titleStyle={{ color: "#1A212F" }}
              title="มื้อเช้า "
              subtitle="120 kcal"
              left={(props) => <Avatar.Icon {...props} icon="weather-sunset" color='#1A212F' backgroundColor='#E9EFF2' />}
              right={(props) => <IconButton {...props} icon="plus" iconColor='#1A212F' onPress={() => { }} />}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.5}>
          <View style={{ paddingTop: 10 }} >
            <Card.Title
              style={{ backgroundColor: 'white', borderRadius: 10 }}
              titleStyle={{ color: "#1A212F" }}
              title="มื้อกลางวัน "
              subtitle="120 kcal"
              left={(props) => <Avatar.Icon {...props} icon="white-balance-sunny" color='#1A212F' backgroundColor='#E9EFF2' />}
              right={(props) => <IconButton {...props} icon="plus" iconColor='#1A212F' onPress={() => { }} />}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.5}>
          <View style={{ paddingTop: 10 }} >
            <Card.Title
              style={{ backgroundColor: 'white', borderRadius: 10 }}
              titleStyle={{ color: "#1A212F" }}
              title="มื้อเย็น "
              subtitle="120 kcal"
              left={(props) => <Avatar.Icon {...props} icon="weather-night" color='#1A212F' backgroundColor='#E9EFF2' />}
              right={(props) => <IconButton {...props} icon="plus" iconColor='#1A212F' onPress={() => { }} />}
            />
          </View>
        </TouchableOpacity>

      

    </View>


  </ScrollView>

);

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
  }

});