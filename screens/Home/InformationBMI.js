import * as React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Text, Provider, IconButton} from 'react-native-paper';
import ListBMI from '../../components/ListBMI';

const InformationBMI = ({navigation}) => {
  return (
    <Provider>
      <ScrollView style={{backgroundColor: '#F9FBFC'}}>
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
              fontSize: 16,
              fontFamily: 'NotoSansThai-SemiBold',
            }}>
            ดัชนีมวลกาย (BMI)
          </Text>
          <Text
            style={{
              width: 32,
            }}></Text>
        </View>

        <Text style={styles.text_Regular}>ข้อมูลดัชนีมวลกาย</Text>

        {/* Information */}
        <ListBMI
          kcal={'น้อยกว่า 18.5'}
          protein={'18.6-22.9'}
          carbo={'23.0-24.9'}
          fat={'25.0-29.9'}
          sugar={'30.0 ขึ้นไป'}
        />
        <Text style={styles.text_Header}>หมายเหตุ</Text>
        <Text style={styles.text_Detail}>
          ใช้ชี้วัดความสมดุลของน้ำหนักและส่วนสูงซึ่งช่วยระบุได้ว่าตอนนี้รูปร่างอยู่ในเกณฑ์หรือไม่
        </Text>
      </ScrollView>
    </Provider>
  );
};

export default InformationBMI;

const styles = StyleSheet.create({
  text_Header: {
    paddingTop: 10,
    fontSize: 12,
    fontFamily: 'NotoSansThai-SemiBold',
    paddingHorizontal: 18,
  },
  text_Regular: {
    color: '#1A212F',
    fontSize: 12,
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
});
