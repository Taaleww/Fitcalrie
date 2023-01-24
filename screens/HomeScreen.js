import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';



const HomeScreen = () => {
    return (
      <View style={styles.container}>
    
        <Text>สวัสดี, บอสส์ </Text>
        <Text> วันนี้คุณควรรับประทาน </Text>
        <Text>1820 (kcal)</Text>
        <Text>BMI 18.1 ผอมเกินไป</Text>
        <Text> Mon, 24 Oct 2022</Text>
        <Text> รับประทาน (Kcal)</Text>
        <Text> 500 </Text>
        <Text> เผาผลาญ (Kcal)</Text>
        <Text> 200 </Text>
        <Text> น้ำหนักปัจจุบัน (Kg) </Text>
        <Text> 44/40 </Text>
        <Text> เมนูแนะนำสำหรับคุณ </Text>
        <Text> ปริมาณแคลอรี่ทั้งหมด 360 Kcal</Text>
        <Button
          title="บันทึกทั้งหมด"
          color="#841584"
          onPress={() => alert('Button Clicked!')}
        />

        


      </View>
    );
};  

export default HomeScreen;

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Roboto',
  },
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignContent: 'flex-start',
    backgroundColor: '#F9FBFC'
  },
});