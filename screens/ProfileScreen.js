import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Avatar, Card, IconButton, Text, ProgressBar, Button } from 'react-native-paper';

const ProfileScreen = () => (
  <ScrollView>
    <View style={styles.box}>

      <Text style={styles.text_header}>โปรไฟล์ของฉัน</Text>
      <Text style={styles.text_Regular}>ข้อมูลส่วนตัว</Text>


      <View style={{ paddingTop: 120 }}>
        <View style={styles.button}>
          <Button style={{ backgroundColor: '#FD9A86', borderRadius: 10 }} textColor="white" mode="contained" onPress={() => console.log('Pressed')}>
            ออกจากระบบ
          </Button>
        </View>

      </View>





    </View>


  </ScrollView>

);

export default ProfileScreen;

const styles = StyleSheet.create({
  box: {
    paddingBottom: 13
  },
  container: {
    paddingTop: 10,
    paddingLeft: 18,
    paddingRight: 18,
  },
  text_header: {
    color: '#1A212F',
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 116,
    textAlign: 'center',
    paddingTop: 60
  },
  text_Regular: {
    color: '#1A212F',
    paddingLeft: 18,
    fontSize: 14,
    paddingTop: 24
  },
  button: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 18,
    paddingRight: 18,
    paddingBottom: 10
  }
});