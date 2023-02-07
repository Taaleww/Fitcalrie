import React from 'react';
import { View, StyleSheet, ScrollView, Image, Text, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InputField from '../components/InputField';
const Login = ({navigation}) => {


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
        </View>


        <View style={{ paddingTop: 120 }}>
          <View style={styles.button}>
            <Button style={{ backgroundColor: '#FD9A86', borderRadius: 10 }} textColor="white" mode="contained" onPress={() => console.log('Pressed')}>
              เข้าสู่ระบบ
            </Button>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center'
          }}>
          <Text>ยังไม่มีบัญชี ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{color: '#FD9A86', fontWeight: '700'}}> สมัครสมาชิก</Text>
          </TouchableOpacity>
        </View>

      </View>

    </ScrollView>

  );
};

const styles = StyleSheet.create({
  box: {
    paddingBottom: 13,
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

export default Login;

