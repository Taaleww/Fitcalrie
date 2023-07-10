import React, {useContext, useState, useEffect} from 'react';
import {useIsFocused} from '@react-navigation/native'; // ?
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
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
import {FIND_NUTRITION} from '../../graphql/query';
import {FIND_EXERCISE} from '../../graphql/query';
import {RECOMMENDATIONS} from '../../graphql/query';
import {useLazyQuery} from '@apollo/client';

const MainScreen = ({navigation}) => {
  const [currentDate, setCurrentDate] = useState('');
  const context = useContext(AuthContext);
  const user = context?.user;
  const username = context.username;
  const ID = user._id;
  const CURRENT_DATE = new Date();
  const dateString = CURRENT_DATE.toISOString();
  const calorieOfUser = context.user.calorieOfUser;
  const isFocused = useIsFocused(); // ?

  const [
    loadNutritionStatus,
    {loading: nutritionLoading, error: nutritionError, data: nutritionData},
  ] = useLazyQuery(FIND_NUTRITION);

  useEffect(() => {
    loadNutritionStatus({
      variables: {
        date: dateString,
        userId: ID,
      },
    });
  }, [user, isFocused]); // called once

  const [
    loadExerciseStatus,
    {loading: exerciseLoading, error: exerciseError, data: exerciseData},
  ] = useLazyQuery(FIND_EXERCISE);

  useEffect(() => {
    loadExerciseStatus({
      variables: {
        date: dateString,
        userId: ID,
      },
    });
  }, [user, isFocused]); // called once

  const [
    loadRecommendationsStatus,
    {
      loading: recommendationsLoading,
      error: recommendationsError,
      data: recommendationsData,
    },
  ] = useLazyQuery(RECOMMENDATIONS);

  useEffect(() => {
    loadRecommendationsStatus({
      variables: {
        userId: ID,
      },
    });
  }, [user, isFocused]); // called once

  const totalCalories = nutritionData?.findList.reduce(
    (acc, item) => acc + item.total_calorie,
    0,
  );
  const total_calories_burned = exerciseData?.findExList.reduce(
    (acc, item) => acc + item.total_calories_burned,
    0,
  );

  const CalculateTotalCal = calories => {
    if (calories - Number(totalCalories) < 0) {
      return 0;
    }
    return calories - Number(totalCalories);
  };

  const percentage = (totalCalories / 1700) * 100;

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
      result = ' สมส่วน';
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
      <ScrollView style={{backgroundColor: '#F9FBFC'}}>
        <View
          style={{
            backgroundColor: '#FD9A86',
            height: 180,
            borderBottomEndRadius: 16,
            borderBottomLeftRadius: 16,
            top: 0,
            zIndex: -2,
          }}></View>
        <View style={styles.box}>
          <View style={styles.iconbutton}>
            <IconButton
              icon="calendar-month"
              iconColor="white"
              mode="contained-tonal"
              containerColor="#FD9A86"
              size={24}
              onPress={() => navigation.navigate('RoutinePlanner')}
            />
          </View>
          <View style={styles.container_header}>
            {context.user?.gender === 'male' ? (
              <Avatar.Image
                size={42}
                source={require('../../assets/images/male.png')}
              />
            ) : (
              <Avatar.Image
                size={42}
                source={require('../../assets/images/female.png')}
              />
            )}
            <Text style={styles.text_Regular}>
              สวัสดี, {context?.user?.username}{' '}
            </Text>
          </View>

          <View style={styles.container_card}>
            <Card style={styles.card}>
              <Card.Content>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <Image
                    style={{width: 90, height: 90}}
                    source={require('../../assets/images/personalgoal.png')}
                  />
                  <View style={{flexDirection: 'column'}}>
                    <View style={styles.container_progress}>
                      <Text
                        style={styles.text_Information}
                        variant='titleMedium'>
                        วันนี้คุณควรรับประทาน
                        <Text
                          style={{
                            fontFamily: 'NotoSansThai-SemiBold',
                            fontSize: 14,
                            color: '#FD9A86',
                          }}>
                          {' '}
                          {(calorieOfUser?.toFixed(0) || 0) + ' '}
                        </Text>
                        kcal
                      </Text>
                      <View style={styles.ProgressCircle}>
                        <ProgressCircle
                          percent={percentage}
                          radius={45}
                          borderWidth={10}
                          color="#FD9A86"
                          shadowColor="#F2B5AA"
                          bgColor="#fff">
                          <Text
                            style={{
                              fontSize: 11,
                              textAlign: 'center',
                              paddingHorizontal: 2,
                              fontFamily: 'NotoSansThai-SemiBold',
                            }}>
                            เหลืออีก{' '}
                            <Text
                              style={{
                                fontSize: 14,
                                fontFamily: 'NotoSansThai-SemiBold',
                                color: '#FD9A86',
                              }}>
                              {' '}
                              {isNaN(
                                CalculateTotalCal(calorieOfUser?.toFixed(0)),
                              )
                                ? '0'
                                : CalculateTotalCal(calorieOfUser.toFixed(0)) +
                                  ' '}
                            </Text>
                            kcal
                          </Text>
                        </ProgressCircle>
                      </View>
                    </View>
                  </View>
                </View>
              </Card.Content>
            </Card>
          </View>
          <View style={{paddingTop: 10}}>
            <Card.Title
              style={{backgroundColor: '#FBE5E4', borderRadius: 10}}
              titleStyle={{fontFamily: 'NotoSansThai-SemiBold', fontSize: 12}}
              title={
                'BMI :' +
                (context?.user?.BMI || 0).toFixed(2) +
                CalculatorBMI(context?.user.BMI)
              }
              subtitleStyle={{
                fontFamily: 'NotoSansThai-SemiBold',
                fontSize: 12,
              }}
              left={props => (
                <Avatar.Icon
                  {...props}
                  icon="information-variant"
                  color="white"
                  backgroundColor="#F89C8A"
                />
              )}
              right={props => (
                <IconButton
                  icon="alert-circle-outline"
                  iconColor="#F89C8A"
                  size={20}
                  onPress={() => navigation.navigate('InformationBMI')}
                />
              )}
            />
          </View>
          <Text
            style={{
              paddingTop: 24,
              fontFamily: 'NotoSansThai-SemiBold',
              fontSize: 12,
            }}>
            {' '}
            {currentDate}
          </Text>
          <View style={styles.container_cardtitle}>
            <View style={{paddingRight: 4}}>
              <Card.Title
                style={{
                  backgroundColor: '#DBE9EA',
                  borderRadius: 10,
                  width: 160,
                }}
                titleStyle={{fontFamily: 'NotoSansThai-Regular', fontSize: 12}}
                title="รับประทาน"
                subtitleStyle={{
                  fontFamily: 'NotoSansThai-SemiBold',
                  fontSize: 12,
                }}
                subtitle={(totalCalories || 0) + ' kcal'}
                left={props => (
                  <Avatar.Icon
                    {...props}
                    icon="food"
                    color="white"
                    backgroundColor="#68AD9F"
                  />
                )}
              />
            </View>

            <View>
              <Card.Title
                style={{
                  backgroundColor: '#D4DEEF',
                  borderRadius: 10,
                  width: 160,
                }}
                titleStyle={{fontFamily: 'NotoSansThai-Regular', fontSize: 12}}
                title="เผาผลาญ "
                subtitleStyle={{
                  fontFamily: 'NotoSansThai-SemiBold',
                  fontSize: 12,
                }}
                subtitle={(total_calories_burned?.toFixed(0) || 0) + ' kcal'}
                left={props => (
                  <Avatar.Icon
                    {...props}
                    icon="fire"
                    color="white"
                    backgroundColor="#3959A4"
                  />
                )}
              />
            </View>
          </View>
          <View style={{paddingTop: 10}}>
            <Card.Title
              style={{backgroundColor: '#F5ECDE', borderRadius: 10}}
              titleStyle={{fontFamily: 'NotoSansThai-Regular', fontSize: 12}}
              title="น้ำหนักปัจจุบัน (kg) "
              subtitleStyle={{
                fontFamily: 'NotoSansThai-SemiBold',
                fontSize: 12,
              }}
              subtitle={context?.user?.weight + ' / ' + context?.user?.goal}
              left={props => (
                <Avatar.Icon
                  {...props}
                  icon="human-handsup"
                  color="white"
                  backgroundColor="#E4B765"
                />
              )}
              right={props => (
                <Button
                  mode="text"
                  textColor="#E4B765"
                  labelStyle={{
                    fontFamily: 'NotoSansThai-Regular',
                    fontSize: 12,
                  }}
                  onPress={() =>
                    navigation.navigate({
                      name: 'EditCurrentWeight',
                      params: {
                        username,
                        weight: context?.user.weight,
                        onUpdateUser,
                      },
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
              paddingTop: 24,
              fontFamily: 'NotoSansThai-SemiBold',
              fontSize: 12,
              paddingBottom:10
            }}>
            เมนูแนะนำสำหรับคุณ
          </Text>
          {recommendationsData !== undefined ? (
            <View>
              {recommendationsData?.model?.map((item, index) => (
                <TouchableOpacity
                  key={item._id}
                  activeOpacity={0.5}
                  onPress={() =>
                    navigation.navigate({
                      name: 'AddFoodRecom',
                      params: {foodId: item._id},
                    })
                  }>
                  <View style={styles.container}>
                    <Card.Title
                      style={{backgroundColor: 'white', borderRadius: 10}}
                      titleStyle={{
                        fontFamily: 'NotoSansThai-Regular',
                        fontSize: 12,
                      }}
                      title={`${item.name} `}
                      subtitleStyle={{
                        fontFamily: 'NotoSansThai-Regular',
                        fontSize: 12,
                      }}
                      subtitle={String(item.calories) + ' kcal'}
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
              ))}
            </View>
          ) : (
            <View style={{
              backgroundColor:'#FBE5E4',
              borderRadius: 10,
            }}>
              <View
              style={{
                backgroundColor:'#FBE5E4',
                borderRadius: 10,
                marginBottom:14
              }}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Image
                  style={{width: 160, height: 160}}
                  source={require('../../assets/images/personalname.png')}
                />
                <View>
                  <Text
                    style={{
                      paddingHorizontal: 30,
                      paddingTop: 36,
                      fontFamily: 'NotoSansThai-Regular',
                      paddingRight: 180,
                      fontSize: 12,
                    }}>
                    กรุณาเพิ่มเมนูอาหารเพื่อให้เราได้แนะนำเมนูอาหารให้แก่คุณ
                  </Text>
                </View>
              </View>
              <View style={{ paddingHorizontal: 10}}>
                <Button
                  style={{
                    backgroundColor: '#FD9A86',
                    borderRadius: 10,
                  }}
                  labelStyle={{
                    fontFamily: 'NotoSansThai-Regular',
                    fontSize: 12,
                  }}
                  textColor="white"
                  mode="contained"
                  onPress={() => navigation.navigate('SearchFood')}>
                  เพิ่มมื้ออาหาร
                </Button>
              </View>
            </View>
            </View>
          )}
        </View>
      </ScrollView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  box: {
    top: -180,
    paddingLeft: 18,
    paddingRight: 18,
    backgroundColor: 'transparent',
  },
  container_header: {
    flexDirection: 'row',
  },
  container: {
    paddingTop: 10,
  },
  iconbutton: {
    paddingHorizontal: 280,
    top: 40,
  },
  text_Regular: {
    fontSize: 14,
    paddingLeft: 20,
    paddingTop: 10,
    fontFamily: 'NotoSansThai-SemiBold',
    color: 'white',
  },
  text_Information: {
    fontSize: 12,
    width: 120,
    fontFamily: 'NotoSansThai-Regular',
    paddingTop: 16,
  },
  container_card: {
    paddingTop: 20,
  },
  card: {
    backgroundColor: 'white',
    height: 130,
  },
  ProgressCircle: {
    left: -14,
  },
  container_progress: {
    flexDirection: 'row',
  },
  container_cardtitle: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 10,
    paddingTop: 10,
  },
});

export default MainScreen;
