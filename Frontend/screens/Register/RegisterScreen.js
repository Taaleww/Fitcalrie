import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Button} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InputField from '../../components/InputField';
import {Formik} from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(6, 'ชื่อผู้ใช้อย่างน้อย 6 ตัวอักษร')
    .required('กรุณากรอกชื่อผู้ใช้'),
  password: Yup.string()
    .min(8, 'รหัสผ่านอย่างน้อย 8 ตัวอักษร')
    .required('กรุณากรอกรหัสผ่าน'),
  confirmpassword: Yup.string()
    .min(8, 'ยืนยันรหัสผ่านอย่างน้อย 8 ตัวอักษร')
    .oneOf([Yup.ref('password')], 'รหัสผ่านไม่ตรงกัน')
    .required('กรุณายีนยันรหัสผ่าน'),
});

const Register = ({navigation, nextStep, onUpdateState, state}) => {
  return (
    <ScrollView>
      <View style={styles.box}>
        <View style={styles.container}>
          <Image
            style={{width: 160, height: 160}}
            source={require('../../assets/images/Logo_FITCLRIE.png')}
          />
        </View>
        <Formik
          initialValues={{
            username: state.username,
            password: state.password,
            confirmpassword: state.confirmpassword,
          }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            onUpdateState(values);
            nextStep();
          }}>
          {({
            values,
            errors,
            isValid,
            touched,
            handleChange,
            setFieldTouched,
            handleSubmit,
          }) => (
            <View style={{paddingTop: 40}}>
              <View style={{paddingBottom: 25}}>
                <InputField
                  label={'ชื่อผู้ใช้'}
                  value={values.username}
                  onChangeText={handleChange('username')}
                  onBlur={() => setFieldTouched('username')}
                  icon={
                    <MaterialIcons
                      name="person-outline"
                      size={20}
                      color="#666"
                      style={{marginRight: 5}}
                    />
                  }
                />
                {touched.username && errors.username && (
                  <Text style={styles.errorTxt}>{errors.username}</Text>
                )}
              </View>
              <View style={{paddingBottom: 25}}>
                <InputField
                  label={'รหัสผ่าน'}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={() => setFieldTouched('password')}
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
                {touched.password && errors.password && (
                  <Text style={styles.errorTxt}>{errors.password}</Text>
                )}
              </View>

              <View style={{paddingBottom: 25}}>
                <InputField
                  label={'ยืนยันรหัสผ่าน'}
                  value={values.confirmpassword}
                  onChangeText={handleChange('confirmpassword')}
                  onBlur={() => setFieldTouched('confirmpassword')}
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
                {touched.confirmpassword && errors.confirmpassword && (
                  <Text style={styles.errorTxt}>{errors.confirmpassword}</Text>
                )}
              </View>
              <View style={{paddingTop: 55}}>
                <View style={styles.button}>
                  <Button
                    style={{
                      borderRadius: 10,
                      backgroundColor: isValid ? '#FD9A86' : '#F2B5AA',
                    }}
                    labelStyle={{
                      fontFamily: 'NotoSansThai-Regular',
                    }}
                    textColor="white"
                    mode="contained"
                    onPress={handleSubmit}
                    disabled={!isValid}>
                    สมัครสมาชิก
                  </Button>
                </View>
              </View>
            </View>
          )}
        </Formik>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text style={{fontFamily: 'NotoSansThai-Regular',}}>เคยสมัครแล้ว ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{color: '#FD9A86',fontFamily: 'NotoSansThai-SemiBold',}}>
              {' '}
              เข้าสู่ระบบ
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 18,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 110,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 10,
  },
  errorTxt: {
    color: '#FD9A86',
    paddingTop: 8,
    fontFamily: 'NotoSansThai-Regular'
  },
});

export default Register;
