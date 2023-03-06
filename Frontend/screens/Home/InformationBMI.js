import * as React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Text, Provider, IconButton} from 'react-native-paper';
import ListBMI from '../../components/ListBMI';

const InformationBMI = ({navigation}) => {
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
            ดัชนีมวลกาย (BMI)
          </Text>
          <Text
            style={{
              width: 32,
            }}></Text>
        </View>

        <Text
            style={{
              paddingHorizontal: 20,
              fontSize: 12,
              fontFamily: 'NotoSansThai-Regular',
              textAlign:'center',
              paddingHorizontal: 90,
            }}>
            ใช้ชี้วัดความสมดุลของน้ำหนักและส่วนสูงซึ่งช่วยระบุได้ว่าตอนนี้รูปร่างอยู่ในเกณฑ์หรือไม่
          </Text>

       
        <Text style={styles.text_Regular}>ข้อมูลดัชนีมวลกาย</Text>

        {/* Information */}
        <ListBMI kcal={"น้อยกว่า 18.5"} protein={"18.6-22.9"} carbo={"23.0-24.9"} fat={"25.0-29.9"} sugar={"30.0 ขึ้นไป"} />
      </ScrollView>
    </Provider>
  );
};

export default InformationBMI;

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
