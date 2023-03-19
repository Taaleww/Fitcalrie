import React, {useContext, useState, useEffect, useCallback} from 'react';
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import { useIsFocused } from '@react-navigation/native' // ?
import {
  Avatar,
  Card,
  IconButton,
  Text,
  ProgressBar,
  Button,
} from 'react-native-paper';
import {AuthContext} from '../../context/AuthContext';
import {useLazyQuery} from '@apollo/client';
import {FIND_EXERCISE} from '../../graphql/query';


const ExerciseScreen = ({navigation}) => {
  const [currentDate, setCurrentDate] = useState('');
  const context = useContext(AuthContext);
  const ID = context.user._id;
  const CURRENT_DATE = new Date();
  const dateString = CURRENT_DATE.toISOString();
  const calorieOfUser = context.user.calorieOfUser;
  const [total_calories_burned, setTotal_calories_burned] = useState(0);
  const [exerciseData, setExerciseData] = useState(undefined);
  const isFocused = useIsFocused() // ?

  const [
    loadExerciseStatus,
    {loading: exerciseLoading, error: exerciseError, data: newExerciseData},
  ] = useLazyQuery(FIND_EXERCISE);
  useEffect(() => {
    loadExerciseStatus({
      variables: {
        date: dateString,
        userId: ID,
      },
    });
  }, [isFocused]); // called once

  useEffect(() => {
    if (newExerciseData) {
      setExerciseData(newExerciseData);
      const newtotal_calories_burned = newExerciseData?.findExList.reduce(
        (acc, item) => acc + item.total_calories_burned,
        0,
      );
      setTotal_calories_burned(newtotal_calories_burned);
    }
  }, [newExerciseData]);

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
        <View
          style={{
            paddingTop: 50,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{width: 48}}></View>
          <Text style={styles.text_header}>
            วันนี้คุณเผาผลาญไปทั้งหมด
            <Text style={styles.innerText}>
              {' '}
              {total_calories_burned?.toFixed(0)}
            </Text>{' '}
            kcal
          </Text>

          <View style={styles.iconbutton}>
            <IconButton
              icon="calendar-month"
              iconColor="white"
              mode="contained-tonal"
              containerColor="#FD9A86"
              size={20}
              onPress={() => navigation.navigate('HistoryExercise')}
            />
          </View>
        </View>
        <Text style={styles.text_Regular}>{currentDate}</Text>

        {/* Information */}
        <View style={{paddingTop: 10}}>
          <Card.Title
            style={{backgroundColor: 'white', borderRadius: 10}}
            titleStyle={{fontFamily: 'NotoSansThai-Regular'}}
            title="เผาผลาญ (kcal)"
            left={props => (
              <Avatar.Icon
                {...props}
                icon="fire"
                color="#1A212F"
                backgroundColor="#E9EFF2"
              />
            )}
            right={props => (
              <Text style={styles.text_details}>
                {total_calories_burned?.toFixed(0)}
              </Text>
            )}
          />
          {total_calories_burned > calorieOfUser ? (
            <ProgressBar
              progress={total_calories_burned / calorieOfUser}
              color="#50BFC3"
              style={styles.progress}
            />
          ) : (
            <ProgressBar
              progress={total_calories_burned / calorieOfUser}
              color="#E2D784"
              style={styles.progress}
            />
          )}
        </View>

        {exerciseData && (
          <View>
            <Text style={styles.text_Regular}>ออกกำลังกาย</Text>
            {exerciseData?.findExList?.map((item, index) => (
              <TouchableOpacity
                key={`exercise-${index}`}
                activeOpacity={0.5}
                onPress={() =>
                  navigation.navigate({
                    name: 'DeleteExercise',
                    params: {
                      id: item._id,
                      name: item.exerciseId.name,
                      time: item.time,
                      total_calories_burned: item.total_calories_burned,
                    },
                    merge: true,
                  })
                }>
                <View style={{paddingTop: 10}}>
                  <Card.Title
                    style={{backgroundColor: 'white', borderRadius: 10}}
                    titleStyle={{fontFamily: 'NotoSansThai-Regular'}}
                    title={item.exerciseId.name}
                    subtitleStyle={{fontFamily: 'NotoSansThai-Regular'}}
                    subtitle={String(item.total_calories_burned?.toFixed(0)) + ' kcal'}
                    left={props => (
                      <Avatar.Icon
                        {...props}
                        icon="arm-flex"
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
        )}

        <View style={{paddingTop: 24}}>
          <View style={styles.button}>
            <Button
              style={{backgroundColor: 'white', borderRadius: 10}}
              labelStyle={{
                fontFamily: 'NotoSansThai-Regular',
              }}
              textColor="#FD9A86"
              mode="contained"
              onPress={() =>
                navigation.navigate({
                  name: 'CalculationExercise',
                })
              }>
              เพิ่มการเผาผลาญจากการวิ่ง
            </Button>
          </View>
          <View style={{paddingTop: 10}}></View>
          <View style={styles.button}>
            <Button
              style={{backgroundColor: '#FD9A86', borderRadius: 10}}
              labelStyle={{
                fontFamily: 'NotoSansThai-Regular',
              }}
              textColor="white"
              mode="contained"
              onPress={() =>
                navigation.navigate({
                  name: 'SearchExercise',
                })
              }>
              เพิ่มการเผาผลาญ
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ExerciseScreen;

const styles = StyleSheet.create({
  box: {
    paddingBottom: 10,
    paddingLeft: 18,
    paddingRight: 18,
  },
  text_header: {
    fontSize: 20,
    paddingHorizontal: 10,
    textAlign: 'center',
    fontFamily: 'NotoSansThai-SemiBold',
    width: 200,
  },
  text_Regular: {
    fontSize: 14,
    paddingTop: 24,
    fontFamily: 'NotoSansThai-SemiBold',
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
  iconbutton: {},
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  innerText: {
    color: '#FD9A86',
    fontFamily: 'NotoSansThai-SemiBold',
  },
});
