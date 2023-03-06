import * as React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {
  Text,
  Provider,
  IconButton,
} from 'react-native-paper';
import ListNutrition from '../../components/ListNutrition';

const InformationFood = ({navigation}) => {

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
                width: 12,
                height: 12,
              }}>
              <Text></Text>
            </View>
            <Text
              style={{
                paddingTop: 4,
                fontFamily: 'NotoSansThai-SemiBold',
                fontSize: 12,
              }}>
              น้อยเกินไป
            </Text>
          </View>

          <View style={{paddingRight: 10, alignItems: 'center'}}>
            <View
              style={{
                backgroundColor: '#50BFC3',
                borderRadius: 10,
                width: 12,
                height: 12,
              }}>
              <Text></Text>
            </View>
            <Text
              style={{
                paddingTop: 4,
                fontFamily: 'NotoSansThai-SemiBold',
                fontSize: 12,
              }}>
              อยู่ในเกณฑ์พอดี
            </Text>
          </View>

          <View style={{paddingRight: 10, alignItems: 'center'}}>
            <View
              style={{
                backgroundColor: '#FD9A86',
                borderRadius: 10,
                width: 12,
                height: 12,
              }}>
              <Text></Text>
            </View>
            <Text
              style={{
                paddingTop: 4,
                fontFamily: 'NotoSansThai-SemiBold',
                fontSize: 12,
              }}>
              มากเกินไป
            </Text>
          </View>
        </View>
        <Text style={styles.text_Regular}>ข้อมูลโภชนาการ</Text>

        {/* Information */}
        <ListNutrition kcal={20} protein={20} carbo={20} fat={20} sugar={20} />
      </ScrollView>
    </Provider>
  );
};

export default InformationFood;

const styles = StyleSheet.create({
  text_header: {
    color: '#1A212F',
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 116,
    textAlign: 'center',
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
    fontSize: 14,
    paddingLeft: 18,
    paddingTop: 24,
    fontFamily: 'NotoSansThai-SemiBold',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 18,
    paddingRight: 18,
    paddingBottom: 10,
  },
  iconbutton: {
    paddingLeft: 3,
    top: 50,
  },
});
