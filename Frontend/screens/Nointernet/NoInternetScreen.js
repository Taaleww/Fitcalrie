import * as React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { Text } from 'react-native-paper';

const NoInternetScreen = () => (
  <ScrollView>

    <View style={styles.container}>
      <Image
        style={{ width: 300, height: 300 }}
        source={require('./nointernet.png')}
      />
    </View>

    <Text style={styles.text_header}>ไม่มีสัญญาณอินเทอร์เน็ต</Text>
    <Text style={styles.text_details}>โปรดตรวจสอบการเชื่อมต่ออินเทอร์เน็ตและลองใหม่อีกครั้ง</Text>

  </ScrollView>

);

export default NoInternetScreen;

const styles = StyleSheet.create({
  box: {
    paddingBottom: 13
  },
  container: {
    paddingTop: 100,
    justifyContent: 'center',
    alignItems: 'center',

  },
  text_header: {
    color: '#1A212F',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 10,
    fontFamily: 'NotoSansThai-Regular',
  },
  text_details: {
    paddingHorizontal: 100,
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'NotoSansThai-Regular',
  },
});