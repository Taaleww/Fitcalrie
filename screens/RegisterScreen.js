import React from 'react';
import { View, StyleSheet, ScrollView, Image, Text, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InputField from '../components/InputField';
const Register = ({navigation}) => {


  return (
    <ScrollView>
      <View style={styles.box}>
        <View style={styles.container}>
          <Image
            style={{ width: 160, height: 160 }}
            source={require('./Logo_FITCLRIE.png')}
          />

        </View>

        <View style={{paddingTop: 40}}>
        <InputField
          label={'ชื่อผู้ใช้'}
          icon={
            <MaterialIcons
            name="person-outline"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
          }
        />
        <InputField
          label={'รหัสผ่าน'}
          icon={
            <Ionicons
            name="ios-lock-closed-outline"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
          }
          inputType="password"
          fieldButtonFunction={() => {}}
        />
        <InputField
          label={'ยืนยันรหัสผ่าน'}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          inputType="password"
        />
        </View>

        <View style={{ paddingTop: 55 }}>
          <View style={styles.button}>
            <Button style={{ backgroundColor: '#FD9A86', borderRadius: 10 }} textColor="white" mode="contained" onPress={() => console.log('Pressed')}>
              สมัครสมาชิก
            </Button>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text>เคยสมัครแล้ว ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{color: '#FD9A86', fontWeight: '700'}}> เข้าสู่ระบบ</Text>
          </TouchableOpacity>
        </View>

      </View>

    </ScrollView>

  );
};

const styles = StyleSheet.create({
  box: {
    padding: 18

  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 110
  },
  button: {
    flex: 1,
    justifyContent: "center",
    paddingBottom: 10
  }
});

export default Register;

