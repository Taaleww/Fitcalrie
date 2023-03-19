import React, {useContext, useState, useEffect} from 'react';
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {Button, IconButton, Text, Card, Avatar} from 'react-native-paper';
import {useIsFocused} from '@react-navigation/native'; // ?
import ListFood from '../../components/ListFood';
import {AuthContext} from '../../context/AuthContext';
import {FIND_NUTRITION} from '../../graphql/query';
import {useLazyQuery} from '@apollo/client';

const FoodScreen = ({navigation}) => {
  const [currentDate, setCurrentDate] = useState('');
  const context = useContext(AuthContext);
  const ID = context.user._id;
  const CURRENT_DATE = new Date();
  const dateString = CURRENT_DATE.toISOString();
  const calorieOfUser = context.user.calorieOfUser;
  const protein = context.user.weight;
  const isFocused = useIsFocused(); // ?

  const user = context?.user;
  const [totalCalories, setTotalCalories] = useState(0);
  const [totalProtein, setTotalProtein] = useState(0);
  const [totalCarbohydrate, setTotalCarbohydrate] = useState(0);
  const [totalFat, setTotalFat] = useState(0);
  const [totalVitaminc, setTotalVitaminc] = useState(0);
  const [totalCabo_day, setTotalCabo_day] = useState(0);
  const [totalFat_day, setTotalFat_day] = useState(0);

  const [loadExpenseStatus, {loading, error, data}] =
    useLazyQuery(FIND_NUTRITION);

  useEffect(() => {
    initCurrentDate();
    loadExpenseStatus({
      variables: {
        date: dateString,
        userId: ID,
      },
    });
  }, [isFocused]);

  useEffect(() => {
    if (data) {
      // calculate total calcories
      const nutritionList = data?.findList;
      const newtotalCalories = nutritionList?.reduce(
        (acc, item) => acc + item.total_calorie,
        0,
      );
      setTotalCalories(newtotalCalories);

      // calculate total protein
      const newtotalProtein = nutritionList?.reduce((total, item) => {
        return total + item.nutritionId.protein * item.servingSize;
      }, 0);
      setTotalProtein(newtotalProtein);

      // Calculate total carbohydrate
      const newtotalCarbohydrate = nutritionList?.reduce((total, item) => {
        return total + item.nutritionId.carbohydrate * item.servingSize;
      }, 0);
      setTotalCarbohydrate(newtotalCarbohydrate);

      // Calculate total carbohydrate per day
      const newtotalCabo_day = (calorieOfUser * (50 / 100)) / 4;
      setTotalCabo_day(newtotalCabo_day);

      // Calculate total fat
      const newtotalFat = nutritionList?.reduce((total, item) => {
        return total + item.nutritionId.fat * item.servingSize;
      }, 0);
      setTotalFat(newtotalFat);

      // Calculate total fat per day
      const newtotalFat_day = (calorieOfUser * (25 / 100)) / 9;
      setTotalFat_day(newtotalFat_day);

      // Calculate total vitamin C
      const newtotalVitaminc = nutritionList?.reduce((total, item) => {
        return total + item.nutritionId.vitaminc * item.servingSize;
      }, 0);
      setTotalVitaminc(newtotalVitaminc);
    }
  }, [data]); // called when data fetched

  const initCurrentDate = () => {
    const monthNames = [
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
    const date = new Date().getDate(); //Current Date
    const month = monthNames[new Date().getMonth()]; //Current Month
    const year = new Date().getFullYear(); //Current Year
    setCurrentDate(date + ' ' + month + ' ' + year);
  };

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
            วันนี้คุณรับประทานไปทั้งหมด
            <Text style={styles.innerText}> {totalCalories}</Text> kcal
          </Text>

          <View style={styles.iconbutton}>
            <IconButton
              icon="calendar-month"
              iconColor="white"
              mode="contained-tonal"
              containerColor="#FD9A86"
              size={20}
              onPress={() => navigation.navigate('HistoryFood')}
            />
          </View>
        </View>

        <View
          style={{
            paddingTop: 24,
            flexDirection: 'row',
          }}>
          <Text style={styles.text_Regular}>{currentDate}</Text>
          <View style={styles.iconbutton}>
            <IconButton
              icon="alert-circle-outline"
              iconColor="#8E8E8E"
              size={14}
              onPress={() => navigation.navigate('InformationFood')}
            />
          </View>
        </View>

        {/* Information */}
        {data !== undefined ? (
          <ListFood
            kcal={totalCalories ? totalCalories.toFixed(0) : 0}
            protein={totalProtein ? totalProtein.toFixed(0) : 0}
            carbo={totalCarbohydrate ? totalCarbohydrate.toFixed(0) : 0}
            fat={totalFat ? totalFat.toFixed(0) : 0}
            vitamin={totalVitaminc ? totalVitaminc.toFixed(0) : 0}
            resultCalories={
              totalCalories / calorieOfUser >= 0
                ? totalCalories / calorieOfUser
                : 0
            }
            resultProtein={
              totalProtein / protein >= 0 ? totalProtein / protein : 0
            }
            resultCarbo={
              totalCarbohydrate / totalCabo_day >= 0
                ? totalCarbohydrate / totalCabo_day
                : 0
            }
            resultFat={
              totalFat / totalFat_day >= 0 ? totalFat / totalFat_day : 0
            }
            resultVitamin={totalVitaminc / 1000 >= 0 ? totalVitaminc / 1000 : 0}
            totalProtein={protein}
            calorieOfUser={calorieOfUser}
            totalCarbohydrate={totalCabo_day}
            totalFat={totalFat_day}
          />
        ) : (
          <ListFood
            kcal={0}
            protein={0}
            carbo={0}
            fat={0}
            vitamin={0}
            resultCalories={0}
            resultProtein={0}
            resultCarbo={0}
            resultFat={0}
            resultVitamin={0}
            totalProtein={protein}
            calorieOfUser={calorieOfUser}
            totalCarbohydrate={totalCabo_day}
            totalFat={totalFat_day}
          />
        )}

        {/* Add Food */}
        {typeof data !== 'undefined' ? (
          <View>
            <Text
              style={{
                fontSize: 14,
                paddingTop: 24,
                fontFamily: 'NotoSansThai-SemiBold',
              }}>
              อาหารที่รับประทาน
            </Text>

            {data?.findList?.map((item, index) => (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() =>
                  navigation.navigate({
                    name: 'DeleteFood',
                    params: {
                      id: item._id,
                      nutritionID: item.nutritionId._id,
                      servingSize: item.servingSize,
                      totalCalories: item.total_calorie,
                    },
                    merge: true,
                  })
                }>
                <View style={styles.container}>
                  <Card.Title
                    style={{backgroundColor: 'white', borderRadius: 10}}
                    titleStyle={{fontFamily: 'NotoSansThai-Regular'}}
                    title={`${item.nutritionId.name} (${item.servingSize})`}
                    subtitleStyle={{fontFamily: 'NotoSansThai-Regular'}}
                    subtitle={String(item.total_calorie) + ' kcal'}
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
          <View></View>
        )}

        <View style={styles.button}>
          <Button
            style={{backgroundColor: '#FD9A86', borderRadius: 10}}
            labelStyle={{
              fontFamily: 'NotoSansThai-Regular',
            }}
            textColor="white"
            mode="contained"
            onPress={() => navigation.navigate('SearchFood')}>
            เพิ่มมื้ออาหาร
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default FoodScreen;

const styles = StyleSheet.create({
  box: {
    paddingBottom: 10,
    paddingLeft: 18,
    paddingRight: 18,
  },
  container: {
    paddingTop: 10,
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
    paddingTop: 12,
    fontFamily: 'NotoSansThai-SemiBold',
  },
  progress: {
    height: 8,
    borderRadius: 8,
  },
  iconbutton: {},
  button: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 24,
  },
  innerText: {
    color: '#FD9A86',
    fontFamily: 'NotoSansThai-SemiBold',
  },
});
