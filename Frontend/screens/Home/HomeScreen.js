import React, {useContext, useState, useEffect} from 'react';
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {
  IconButton,
  Text,
  Card,
  Avatar,
  Button,
  Dialog,
  Portal,
  Provider,
} from 'react-native-paper';
import ProgressCircle from 'react-native-progress-circle';
import {AuthContext} from '../../context/AuthContext';
import {useQuery} from '@apollo/client';
import {FINDUSER} from '../../graphql/query';

const MainScreen = ({navigation}) => {
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  const [currentDate, setCurrentDate] = useState('');
  const context = useContext(AuthContext);
  const username = context.username;

  const onUpdateUser = payload => {
    context?.setUser({
      ...context?.user,
      ...payload,
    });
  };

  const CalculatorBMI = BMI => {
    let result = '';
    if (BMI <= 18.5) {
      result = ' ผอมเกินไป';
    } else if (BMI >= 18.6 && BMI < 22.9) {
      result = ' นํ้าหนักปกติ เหมาะสม';
    } else if (BMI >= 23 && BMI < 24.9) {
      result = ' นํ้าหนักเกินตัว';
    } else if (BMI >= 25 && BMI < 29.9) {
      result = ' อ้วน';
    } else if (BMI > 30) {
      result = ' อ้วนมาก';
    }

    return result;
  };

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
    <Provider>
      <ScrollView>
        <View style={styles.box}>
          <View style={styles.iconbutton}>
            <IconButton
              icon="calendar-month"
              iconColor="white"
              mode="contained-tonal"
              containerColor="#FD9A86"
              size={20}
              onPress={() => navigation.navigate('RoutinePlanner')}
            />
          </View>
          <View style={styles.container_header}>
            <Avatar.Image
              size={42}
              source={require('../../assets/images/avatar.png')}
            />
            <Text style={styles.text_Regular}>สวัสดี, {context?.user?.username} </Text>
          </View>

          <View style={styles.container_card}>
            <Card style={styles.card}>
              <Card.Content>
                <View style={styles.container_progress}>
                  <Text style={styles.text_Information} variant="titleLarge">
                    วันนี้คุณควรรับประทาน 1820 (kcal)
                  </Text>
                  <View style={styles.ProgressCircle}>
                    <ProgressCircle
                      percent={30}
                      radius={60}
                      borderWidth={16}
                      color="#FD9A86"
                      shadowColor="#F2B5AA"
                      bgColor="#fff">
                      <Text
                        style={{
                          fontSize: 14,
                          paddingHorizontal: 10,
                          textAlign: 'center',
                          fontFamily: 'NotoSansThai-SemiBold',
                        }}>
                        เหลืออีก 1190 kcal
                      </Text>
                    </ProgressCircle>
                  </View>
                </View>
                <Text
                  style={{
                    fontFamily: 'NotoSansThai-Regular',
                  }}
                  variant="bodyMedium">
                  BMI : {(context?.user?.BMI || 0).toFixed(2) + CalculatorBMI(context?.user.BMI)}
                </Text>
              </Card.Content>
            </Card>
          </View>

          <Text
            style={{
              paddingTop: 16,
              fontFamily: 'NotoSansThai-SemiBold',
              fontSize: 14,
            }}>
            {' '}
            {currentDate}
          </Text>

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

          <View style={{paddingTop: 10}}>
            <Card.Title
              style={{backgroundColor: 'white', borderRadius: 10}}
              titleStyle={{fontFamily: 'NotoSansThai-Regular', fontSize: 14}}
              title="น้ำหนักปัจจุบัน (kg) "
              subtitleStyle={{fontFamily: 'NotoSansThai-SemiBold'}}
              subtitle={context?.user?.weight + ' / ' + context?.user?.goal}
              right={props => (
                <Button
                  mode="text"
                  textColor="#FD9A86"
                  labelStyle={{
                    fontFamily: 'NotoSansThai-Regular',
                  }}
                  onPress={() =>
                    navigation.navigate({
                      name: 'EditCurrentWeight',
                      params: {username, weight: context?.user.weight, onUpdateUser},
                      merge: true,
                    })
                  }>
                  บันทึกน้ำหนัก
                </Button>
              )}
            />
          </View>

          <Text
            style={{
              paddingTop: 16,
              fontFamily: 'NotoSansThai-SemiBold',
              fontSize: 14,
            }}>
            เมนูแนะนำสำหรับคุณ
          </Text>

          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate('SuggestionMenu')}>
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

          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate('SuggestionMenu')}>
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

          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate('SuggestionMenu')}>
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

          {/* <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate('SuggestionMorning')}>
            <View style={{paddingTop: 10}}>
              <Card.Title
                style={{backgroundColor: 'white', borderRadius: 10}}
                titleStyle={{
                  fontFamily: 'NotoSansThai-Regular',
                }}
                title="มื้อเช้า "
                subtitleStyle={{fontFamily: 'NotoSansThai-Regular'}}
                subtitle="แซนวิช"
                left={props => (
                  <Avatar.Icon
                    {...props}
                    icon="weather-sunset"
                    color="#1A212F"
                    backgroundColor="#E9EFF2"
                  />
                )}
                right={props => (
                  <Text
                    style={{
                      paddingRight: 10,
                      fontSize: 14,
                      fontFamily: 'NotoSansThai-Regular',
                    }}>
                    120 kcal
                  </Text>
                )}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate('SuggestionLunch')}>
            <View style={{paddingTop: 10}}>
              <Card.Title
                style={{
                  backgroundColor: 'white',
                  borderRadius: 10,
                  fontFamily: 'NotoSansThai-Regular',
                }}
                titleStyle={{
                  fontFamily: 'NotoSansThai-Regular',
                }}
                title="มื้อกลางวัน "
                subtitleStyle={{fontFamily: 'NotoSansThai-Regular'}}
                subtitle="แซนวิช"
                left={props => (
                  <Avatar.Icon
                    {...props}
                    icon="white-balance-sunny"
                    color="#1A212F"
                    backgroundColor="#E9EFF2"
                  />
                )}
                right={props => (
                  <Text
                    style={{
                      paddingRight: 10,
                      fontSize: 14,
                      fontFamily: 'NotoSansThai-Regular',
                    }}>
                    120 kcal
                  </Text>
                )}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate('SuggestionNight')}>
            <View style={{paddingTop: 10}}>
              <Card.Title
                style={{backgroundColor: 'white', borderRadius: 10}}
                titleStyle={{
                  fontFamily: 'NotoSansThai-Regular',
                }}
                title="มื้อเย็น "
                subtitleStyle={{fontFamily: 'NotoSansThai-Regular'}}
                subtitle="แซนวิช"
                left={props => (
                  <Avatar.Icon
                    {...props}
                    icon="weather-night"
                    color="#1A212F"
                    backgroundColor="#E9EFF2"
                  />
                )}
                right={props => (
                  <Text
                    style={{
                      paddingRight: 10,
                      fontSize: 14,
                      fontFamily: 'NotoSansThai-Regular',
                    }}>
                    120 kcal
                  </Text>
                )}
              />
            </View>
          </TouchableOpacity> */}

          <View style={styles.button}>
            <Button
              style={{backgroundColor: '#FD9A86', borderRadius: 10}}
              labelStyle={{
                fontFamily: 'NotoSansThai-Regular',
              }}
              textColor="white"
              mode="contained"
              onPress={showDialog}>
              บันทึกแคลอรี่ทั้งหมด 360 kcal
            </Button>
          </View>
          <Portal>
            <Dialog
              visible={visible}
              onDismiss={hideDialog}
              style={{backgroundColor: 'white', borderRadius: 10}}>
              <Dialog.Icon color="#42DCAE" icon="check-circle" size={30} />
              <Dialog.Title
                style={{
                  fontSize: 16,
                  textAlign: 'center',
                  fontFamily: 'NotoSansThai-SemiBold',
                }}>
                เพิ่มรายการใหม่สำเร็จ
              </Dialog.Title>
              <Dialog.Actions>
                <Button
                  labelStyle={{
                    fontFamily: 'NotoSansThai-Regular',
                  }}
                  textColor="white"
                  buttonColor="#FD9A86"
                  onPress={hideDialog}>
                  {'                                '}ยืนยัน
                  {'                                   '}
                </Button>
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
    paddingRight: 18,
  },
  container_header: {
    flexDirection: 'row',
  },
  container: {
    paddingTop: 10,
  },
  iconbutton: {
    paddingHorizontal: 332,
    top: 40,
  },
  text_Regular: {
    fontSize: 14,
    paddingLeft: 20,
    paddingTop: 10,
    fontFamily: 'NotoSansThai-SemiBold',
  },
  text_Information: {
    fontSize: 14,
    width: 160,
    fontFamily: 'NotoSansThai-Regular',
  },
  container_card: {
    paddingTop: 20,
  },
  card: {
    backgroundColor: 'white',
  },
  ProgressCircle: {
    paddingHorizontal: 60,
  },
  container_progress: {
    flexDirection: 'row',
  },
  container_cardtitle: {
    flexDirection: 'row',
    paddingTop: 16,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 10,
    paddingTop: 10,
  },
});

export default MainScreen;
