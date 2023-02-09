import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { IconButton, Text, Card, Avatar, Button, Dialog, Portal, Provider } from 'react-native-paper';
import ProgressCircle from 'react-native-progress-circle'


const MainScreen = ({ navigation }) => {

  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
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
    <Provider>
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
          <View style={styles.container_header}>
            <Avatar.Image size={42} source={require('./avatar.png')} />
            <Text style={styles.text_Regular}>สวัสดี, มายด์</Text>
          </View>

          <View style={styles.container_card}>
            <Card style={styles.card}>
              <Card.Content>
                <View style={styles.container_progress}>
                  <Text style={styles.text_Information} variant="titleLarge">วันนี้คุณควรรับประทาน 1820 (kcal)</Text>
                  <View style={styles.ProgressCircle}>
                    <ProgressCircle
                      percent={30}
                      radius={60}
                      borderWidth={16}
                      color="#FD9A86"
                      shadowColor="#F2B5AA"
                      bgColor="#fff"
                    >
                      <Text style={{ fontSize: 14, fontWeight: 'bold', paddingHorizontal: 10, textAlign: 'center' }}>{'เหลืออีก 1190 kcal'}</Text>
                    </ProgressCircle>
                  </View>
                </View>
                <Text variant="bodyMedium">BMI 18.1 ผอมเกินไป</Text>
              </Card.Content>
            </Card>
          </View>

          <Text style={{ paddingTop: 16, fontFamily: "Roboto-Medium" }}> {currentDate}</Text>

          <View style={styles.container_cardtitle}>
            <View style={{ paddingRight: 16 }}>
              <Card.Title
                style={{ backgroundColor: 'white', borderRadius: 10, width: 180 }}
                title="รับประทาน"
                subtitleStyle={{fontWeight:'bold'}}
                subtitle="500 (kcal)"
                left={(props) => <Avatar.Icon {...props} icon="food" color='white' backgroundColor='#FD9A86' />}
              />
            </View>

            <View>
              <Card.Title
                style={{ backgroundColor: 'white', borderRadius: 10, width: 180 }}
                title="เผาผลาญ "
                subtitleStyle={{fontWeight:'bold'}}
                subtitle="500 (kcal)"
                left={(props) => <Avatar.Icon {...props} icon="fire" color='white' backgroundColor='#FD9A86' />}
              />
            </View>
          </View>

          <View style={{ paddingTop: 10 }} >
            <Card.Title
              style={{ backgroundColor: 'white', borderRadius: 10 }}
              title="น้ำหนักปัจจุบัน (kg) "
              subtitle="44 /40"
              right={(props) => <Button mode="text" textColor='#FD9A86' onPress={() =>
                navigation.navigate('EditCurrentWeight')
              }>
                บันทึกน้ำหนัก
              </Button>}
            />
          </View>

          <Text style={{ paddingTop: 16, fontFamily: "Roboto-Medium" }}>เมนูแนะนำสำหรับคุณ</Text>

          <TouchableOpacity activeOpacity={0.5} onPress={() =>
            navigation.navigate('SuggestionMorning')
          }>
            <View style={{ paddingTop: 10 }} >
              <Card.Title
                style={{ backgroundColor: 'white', borderRadius: 10 }}
                titleStyle={{ color: "#1A212F" }}
                title="มื้อเช้า "
                subtitle="แซนวิช"
                left={(props) => <Avatar.Icon {...props} icon="weather-sunset" color='#1A212F' backgroundColor='#E9EFF2' />}
                right={(props) => <Text style={{ paddingRight: 10, fontSize: 14 }}>120 kcal</Text>}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.5} onPress={() =>
            navigation.navigate('SuggestionLunch')
          }>
            <View style={{ paddingTop: 10 }} >
              <Card.Title
                style={{ backgroundColor: 'white', borderRadius: 10 }}
                titleStyle={{ color: "#1A212F" }}
                title="มื้อกลางวัน "
                subtitle="แซนวิช"
                left={(props) => <Avatar.Icon {...props} icon="white-balance-sunny" color='#1A212F' backgroundColor='#E9EFF2' />}
                right={(props) => <Text style={{ paddingRight: 10, fontSize: 14 }}>120 kcal</Text>}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.5} onPress={() =>
            navigation.navigate('SuggestionNight')
          }>
            <View style={{ paddingTop: 10 }} >
              <Card.Title
                style={{ backgroundColor: 'white', borderRadius: 10 }}
                titleStyle={{ color: "#1A212F" }}
                title="มื้อเย็น "
                subtitle="แซนวิช"
                left={(props) => <Avatar.Icon {...props} icon="weather-night" color='#1A212F' backgroundColor='#E9EFF2' />}
                right={(props) => <Text style={{ paddingRight: 10, fontSize: 14 }}>120 kcal</Text>}
              />
            </View>
          </TouchableOpacity>

          <View style={styles.button}>
            <Button style={{ backgroundColor: '#FD9A86', borderRadius: 10 }} textColor="white" mode="contained" onPress={showDialog}>
              บันทึกแคลอรี่ทั้งหมด 360 kcal
            </Button>
          </View>
          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog} style={{ backgroundColor: 'white', borderRadius: 10 }} >
              <Dialog.Icon color='#42DCAE' icon="check-circle" size={30} />
              <Dialog.Title style={{ fontSize: 16, textAlign: 'center', fontWeight: 'bold' }}>เพิ่มรายการใหม่สำเร็จ</Dialog.Title>
              <Dialog.Actions>
                <Button textColor="white" buttonColor='#FD9A86' onPress={hideDialog}>                                   ยืนยัน                                       </Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>

        </View>
      
    </ScrollView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  box: {
    paddingLeft: 18,
    paddingRight: 18

  },
  container_header: {
    flexDirection: 'row'

  },
  iconbutton: {
    paddingHorizontal: 332,
    top: 40,
  },
  text_Regular: {
    color: '#1A212F',
    fontSize: 14,
    paddingLeft: 20,
    paddingTop: 10,
    fontFamily: 'Roboto-Medium'
  },
  text_Information: {
    color: '#1A212F',
    fontSize: 14,
    width: 160,
    fontFamily: 'Roboto-Medium'
  },
  container_card: {
    paddingTop: 20,
  },
  card: {
    backgroundColor: 'white'
  },
  ProgressCircle: {
    paddingHorizontal: 60
  },
  container_progress: {
    flexDirection: 'row'

  },
  container_cardtitle: {
    flexDirection: 'row',
    paddingTop: 16
  },
  button: {
    flex: 1,
    justifyContent: "center",
    paddingBottom: 10,
    paddingTop: 10
  }

});

export default MainScreen;