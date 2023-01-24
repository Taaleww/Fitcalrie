import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ProfileScreen = () => {
    return (
      <View style={styles.container}>
        <Text>โปรไฟล์ของฉัน</Text>
        <Text>ข้อมูลส่วนตัว</Text>
      </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#F9FBFC'
  },
});