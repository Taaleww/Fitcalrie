import React, {useContext, useState} from 'react';
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
import {AuthContext} from '../../context/AuthContext';
import {Formik} from 'formik';
import * as Yup from 'yup';
import CustomModal from '../../components/ModalFail';

import {useMutation} from '@apollo/client';
import {LOGIN} from '../../graphql/mutation';

const SigninSchema = Yup.object().shape({
  username: Yup.string()
    .min(6, 'ชื่อผู้ใช้อย่างน้อย 6 ตัวอักษร')
    .required('กรุณากรอกชื่อผู้ใช้'),
  password: Yup.string()
    .min(8, 'รหัสผ่านอย่างน้อย 8 ตัวอักษร')
    .required('กรุณากรอกรหัสผ่าน'),
});

const Login = ({navigation}) => {
  const {login} = useContext(AuthContext);
  const [isModalVisible, setModalVisible] = useState(false);
  // Pass mutation to useMutation
  const [signin] = useMutation(LOGIN, {
    async onCompleted(data) {
      console.log('COMPLETE DATA: ', data.login);
      login(data.login);
    },
    onError(error) {
      setModalVisible(true);
      console.error(error);
      setTimeout(() => {
        setModalVisible(false);
      }, 2000);
    },
  });

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
            username: '',
            password: '',
          }}
          validationSchema={SigninSchema}
          onSubmit={values => Alert.alert(JSON.stringify(values))}>
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
              <View style={{paddingTop: 120}}>
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
                    onPress={() => {
                      // login(values);
                      console.log(values);
                      signin({variables: {loginUserInput: values}});
                    }}
                    disabled={!isValid}>
                    เข้าสู่ระบบ
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
          <Text style={{fontFamily: 'NotoSansThai-Regular'}}>
            ยังไม่มีบัญชี ?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text
              style={{color: '#FD9A86', fontFamily: 'NotoSansThai-SemiBold'}}>
              {' '}
              สมัครสมาชิก
            </Text>
          </TouchableOpacity>
          <CustomModal title="ข้อมูลไม่ถูกต้อง" isVisible={isModalVisible} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  box: {
    paddingBottom: 13,
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
    fontFamily: 'NotoSansThai-Regular',
  },
});

export default Login;
