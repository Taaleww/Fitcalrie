import React from 'react';
import { View, StyleSheet, ScrollView, Image, SafeAreaView, TextInput } from 'react-native';
import { Button } from 'react-native-paper';
import { FormBuilder } from 'react-native-paper-form-builder';
import { useForm } from 'react-hook-form';

const Login = () => {
  const [number, onChangeNumber] = React.useState('');

  const { control, setFocus, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

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
        <FormBuilder
          control={control}
          setFocus={setFocus}
          formConfigArray={[
            {
              type: 'email',
              name: 'email',

              rules: {
                required: {
                  value: true,
                  message: 'Email is required',
                },
              },
              textInputProps: {
                label: 'ชื่อผู้ใช้',
              },
            },
            {
              type: 'password',
              name: 'password',
              rules: {
                required: {
                  value: true,
                  message: 'Password is required',
                },
              },
              textInputProps: {
                label: 'รหัสผ่าน',
              },
            },
          ]}
        />

        </View>
        



        <View style={{ paddingTop: 70 }}>
          <View style={styles.button}>
            <Button style={{ backgroundColor: '#FD9A86', borderRadius: 10 }} textColor="white" mode="contained" onPress={() => console.log('Pressed')}>
              เข้าสู่ระบบ
            </Button>
          </View>

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