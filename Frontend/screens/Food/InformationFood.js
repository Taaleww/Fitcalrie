import React, {useContext} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Text, Provider, IconButton} from 'react-native-paper';
import ListNutrition from '../../components/ListNutrition';
import {AuthContext} from '../../context/AuthContext';

const InformationFood = ({navigation,route}) => {
  const context = useContext(AuthContext);
  const protein = context.user.weight;
  const calorieOfUser = context.user.calorieOfUser
  const calorie = calorieOfUser?.toFixed(0);
  const carbohydrate_start = ((calorie * (40 / 100)) / 4).toFixed(0);
  const carbohydrate = ((calorie * (50 / 100)) / 4).toFixed(0);
  const fat_start = ((calorie * (20 / 100)) / 9).toFixed(0);
  const fat = ((calorie * (25 / 100)) / 9).toFixed(0);
  const BMR = route?.params.BMR.BMR;

  console.log("route?.params.BMR.BMR",route?.params.BMR.BMR);


  return (
    <Provider>
      <ScrollView>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 8,
          }}>
          <IconButton
            style={{width: 32}}
            icon="chevron-left"
            iconColor="#1A212F"
            size={32}
            onPress={() => navigation.goBack()}
          />
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontFamily: 'NotoSansThai-SemiBold',
            }}>
            ปริมาณสารอาหารที่ควรได้รับ
          </Text>
          <Text
            style={{
              width: 32,
            }}></Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 40,
            paddingTop: 24,
          }}>
          <View style={{paddingRight: 10, alignItems: 'center'}}>
            <View
              style={{
                backgroundColor: '#E2D784',
                borderRadius: 10,
                width: 16,
                height: 16,
              }}>
              <Text></Text>
            </View>
            <Text style={styles.text_info}>
              น้อยเกินไป
            </Text>
          </View>

          <View style={{paddingRight: 10, alignItems: 'center'}}>
            <View
              style={{
                backgroundColor: '#50BFC3',
                borderRadius: 10,
                width: 16,
                height: 16,
              }}>
              <Text></Text>
            </View>
            <Text style={styles.text_info}>
              อยู่ในเกณฑ์พอดี
            </Text>
          </View>

          <View style={{paddingRight: 10, alignItems: 'center'}}>
            <View
              style={{
                backgroundColor: '#FD9A86',
                borderRadius: 10,
                width: 16,
                height: 16,
              }}>
              <Text></Text>
            </View>
            <Text style={styles.text_info}>
              มากเกินไป
            </Text>
          </View>
        </View>
        <Text style={styles.text_Regular}>ข้อมูลโภชนาการ</Text>

        {/* Information */}
        <ListNutrition
          kcal={calorie}
          protein={protein}
          carbo={carbohydrate}
          fat={fat}
          vitaminc={1000}
          carbohydrate_start={carbohydrate_start}
          fat_start={fat_start}
          BMR={BMR}
        />
        <Text style={styles.text_Header}>หมายเหตุ</Text>
        <Text style={styles.text_Detail}>
          ข้อมูลในส่วนนี้เป็นเพียงปริมาณที่แนะนำในแต่ละวัน
          สารอาหารในบางชนิดเมื่อรับประทานเกิน 100% จะเป็นสีแดง (เช่น แคลอรี่,
          คาร์โบไฮเดรต, ไขมัน)
          สารอาหารข้างต้นไม่ควรรับประทานเกินในปริมาณที่แนะนำ
        </Text>
        <Text style={styles.text_Detail}>
          สารอาหารในบางชนิดเมื่อเกิน 100% จะเป็นสีเขียวอยู่ (เช่น โปรตีน,
          วิตามินซี) สารอาหารข้างต้นคุณควรรับประทานให้ได้อย่างน้อยตามที่แนะนำ
        </Text>
      </ScrollView>
    </Provider>
  );
};

export default InformationFood;

const styles = StyleSheet.create({
  text_Regular: {
    color: '#1A212F',
    fontSize: 14,
    paddingLeft: 18,
    paddingTop: 24,
    fontFamily: 'NotoSansThai-SemiBold',
  },
  text_Detail: {
    paddingVertical: 10,
    fontSize: 12,
    fontFamily: 'NotoSansThai-Regular',
    paddingHorizontal: 18,
  },
  text_Header: {
    paddingTop: 10,
    fontSize: 14,
    fontFamily: 'NotoSansThai-SemiBold',
    paddingHorizontal: 18,
  },
  text_info:{
    paddingTop: 4,
    fontFamily: 'NotoSansThai-SemiBold',
    fontSize: 12,
  }
});
