import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  SafeAreaView,
  Text,
} from 'react-native';
import {Button, IconButton} from 'react-native-paper';
import {Formik} from 'formik';
import * as Yup from 'yup';

const EditNameSchema = Yup.object().shape({
  name: Yup.string()
    .min(6, 'ชื่อผู้ใช้อย่างน้อย 6 ตัวอักษร')
    .required('กรุณากรอกชื่อผู้ใช้'),
});

const EditFormWeight = ({navigation}) => {
  const [text, onChangeText] = React.useState('');

  const Input = values => {
    console.log(values.name);
  };

  return (
    <ScrollView>
      <Formik
        initialValues={{
          name: '',
        }}
        validationSchema={EditNameSchema}
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
          <View style={styles.box}>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: 8,
              }}>
              <IconButton
                style={{width: 32}}
                icon="chevron-left"
                iconColor="#1A212F"
                size={32}
                onPress={() => navigation.goBack()}
              />
              <Text
                style={{
                  color: 'black',
                  fontSize: 20,
                  fontFamily: 'NotoSansThai-SemiBold',
                }}>
                ชื่อ
              </Text>
              <Text
                style={{
                  width: 32,
                }}></Text>
            </View>
            <View style={styles.container}>
              <Image
                style={{width: 300, height: 300}}
                source={require('../../assets/images/personalname.png')}
              />
              <SafeAreaView>
                {Input(values)}
                <TextInput
                  style={styles.input}
                  value={values.name}
                  onChangeText={handleChange('name')}
                  onBlur={() => setFieldTouched('name')}
                  placeholder="ชื่อ"
                />
                {touched.name && errors.name && (
                  <Text style={styles.errorTxt}>{errors.name}</Text>
                )}
              </SafeAreaView>
            </View>

            <View style={{paddingTop: 130}}>
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
                  disabled={!isValid}
                  onPress={handleSubmit}>
                  บันทึก
                </Button>
              </View>
            </View>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  box: {},
  container: {
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_header: {
    color: '#1A212F',
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 161,
    textAlign: 'center',
  },
  iconbutton: {
    top: 50,
  },
  input: {
    width: 380,
    height: 40,
    margin: 12,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    fontFamily: 'NotoSansThai-Regular',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 18,
    paddingRight: 18,
    paddingBottom: 10,
  },
  errorTxt: {
    color: '#FD9A86',
    paddingLeft: 16,
    fontFamily: 'NotoSansThai-Regular',
  },
});

export default EditFormWeight;