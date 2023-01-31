import * as React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import {  Text,  Button, List } from 'react-native-paper';

const ProfileScreen = ({navigation}) => (
  <ScrollView>
    <View style={styles.box}>

      <Text style={styles.text_header}>โปรไฟล์ของฉัน</Text>
      <Text style={styles.text_Regular}>ข้อมูลส่วนตัว</Text>

      {/* <TouchableOpacity activeOpacity={0.7}>
        <View style={{ paddingTop: 10 }}>
          <List.Item
        style={{ backgroundColor: 'white', borderRadius: 10}}
        title="ชื่อผู้ใช้งาน"
        titleStyle = {{fontSize: 14}}
        right={(props) => <Text style={{paddingRight: 16,fontSize: 14}}>ตะหลิว</Text>}
          />
        </View> 
      </TouchableOpacity> */}

      <TouchableOpacity activeOpacity={0.7} onPress={() =>
                navigation.navigate('EditFormName')
                }>
        <View style={{ paddingTop: 10 }}>
          <List.Item
        style={{ backgroundColor: 'white', borderRadius: 10}}
        title="ชื่อ"
        titleStyle = {{fontSize: 14}}
        right={(props) => <Text style={{paddingRight: 16,fontSize: 14}}>ตะหลิว</Text>}
          />
        </View> 
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.7} onPress={() =>
                navigation.navigate('EditFormGender')
                }>
        <View style={{ paddingTop: 10 }}>
          <List.Item
        style={{ backgroundColor: 'white', borderRadius: 10}}
        title="เพศ"
        titleStyle = {{fontSize: 14}}
        right={(props) => <Text style={{paddingRight: 16,fontSize: 14}}>ผู้หญิง</Text>}
          />
        </View> 
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.7}onPress={() =>
                navigation.navigate('EditFormBirth')
                }>
        <View style={{ paddingTop: 10 }}>
          <List.Item
        style={{ backgroundColor: 'white', borderRadius: 10}}
        title="วันเกิด"
        titleStyle = {{fontSize: 14}}
        right={(props) => <Text style={{paddingRight: 16,fontSize: 14}}>22/06/2001</Text>}
          />
        </View> 
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.7} onPress={() =>
                navigation.navigate('EditFormWeight')
                }>
        <View style={{ paddingTop: 10 }}>
          <List.Item
        style={{ backgroundColor: 'white', borderRadius: 10}}
        title="น้ำหนัก"
        titleStyle = {{fontSize: 14}}
        right={(props) => <Text style={{paddingRight: 16,fontSize: 14}}>45</Text>}
          />
        </View> 
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.7} onPress={() =>
                navigation.navigate('EditFormHeight')
                }>
        <View style={{ paddingTop: 10 }}>
          <List.Item
        style={{ backgroundColor: 'white', borderRadius: 10}}
        title="ส่วนสูง"
        titleStyle = {{fontSize: 14}}
        right={(props) => <Text style={{paddingRight: 16,fontSize: 14}}>163</Text>}
          />
        </View> 
      </TouchableOpacity>

      <Text style={styles.text_Regular}>แผนควบคุมน้ำหนัก</Text>

      <TouchableOpacity activeOpacity={0.7}onPress={() =>
                navigation.navigate('EditFormGoal')
                }>
        <View style={{ paddingTop: 10 }}>
          <List.Item
        style={{ backgroundColor: 'white', borderRadius: 10}}
        title="เป้าหมายน้ำหนัก"
        titleStyle = {{fontSize: 14}}
        right={(props) => <Text style={{paddingRight: 16,fontSize: 14}}>40</Text>}
          />
        </View> 
      </TouchableOpacity>
     


      <View style={{ paddingTop: 40 }}>
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
    paddingBottom: 13,
    paddingLeft: 18,
    paddingRight: 18,

  },
  container: {
    paddingTop: 10,
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
    fontSize: 14,
    paddingTop: 24
  },
  button: {
    flex: 1,
    justifyContent: "center",
    paddingBottom: 10
  }
});