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
import {Button} from 'react-native-paper';
import {Formik} from 'formik';
import * as Yup from 'yup';

const EditHeightSchema = Yup.object().shape({
  height: Yup.number()
    .min(100, 'ต้องเป็นตัวเลขระหว่าง 100 ถึง 299')
    .max(299, 'ต้องเป็นตัวเลขระหว่าง 100 ถึง 299')
    .required('กรุณากรอกส่วนสูง'),
});

const FormHeight = ({nextStep, onUpdateState, state}) => {
  return (
    <ScrollView>
      <Formik
        initialValues={{
          height: state.height,
        }}
        validationSchema={EditHeightSchema}
        onSubmit={nextStep}>
        {({
          values,
          errors,
          isValid,
          touched,
          handleChange,
          setFieldTouched,
          handleSubmit,
        }) => (
          <View>
            <View style={styles.container}>
              <Image
                style={{width: 300, height: 300}}
                source={require('./personalheight.png')}
              />

              <SafeAreaView>
                <TextInput
                  style={styles.input}
                  values={state.height}
                  onChangeText={val => {
                    handleChange('height')(val);
                    onUpdateState({height: Number(val)});
                  }}
                  onBlur={() => setFieldTouched('height')}
                  placeholder="ส่วนสูง                                                                    เซนติเมตร"
                  keyboardType="numeric"
                  defaultValue={String(state.height)}
                />
                {touched.height && errors.height && (
                  <Text style={styles.errorTxt}>{errors.height}</Text>
                )}
              </SafeAreaView>
            </View>

            <View style={{paddingTop: 110}}>
              <View
                style={{
                  paddingLeft: 18,
                  paddingBottom: 16,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <View style={{paddingRight: 10}}>
                  <View
                    style={{
                      backgroundColor: '#D9D9D9',
                      borderRadius: 10,
                      width: 12,
                      height: 12,
                    }}>
                    <Text></Text>
                  </View>
                </View>
                <View style={{paddingRight: 10}}>
                  <View
                    style={{
                      backgroundColor: '#D9D9D9',
                      borderRadius: 10,
                      width: 12,
                      height: 12,
                    }}>
                    <Text></Text>
                  </View>
                </View>
                <View style={{paddingRight: 10}}>
                  <View
                    style={{
                      backgroundColor: '#D9D9D9',
                      borderRadius: 10,
                      width: 12,
                      height: 12,
                    }}>
                    <Text></Text>
                    <Text></Text>
                  </View>
                </View>
                <View style={{paddingRight: 10}}>
                  <View
                    style={{
                      backgroundColor: '#FD9A86',
                      borderRadius: 10,
                      width: 12,
                      height: 12,
                    }}>
                    <Text></Text>
                    <Text></Text>
                  </View>
                </View>
                <View style={{paddingRight: 10}}>
                  <View
                    style={{
                      backgroundColor: '#D9D9D9',
                      borderRadius: 10,
                      width: 12,
                      height: 12,
                    }}>
                    <Text></Text>
                    <Text></Text>
                  </View>
                </View>
                <View style={{paddingRight: 10}}>
                  <View
                    style={{
                      backgroundColor: '#D9D9D9',
                      borderRadius: 10,
                      width: 12,
                      height: 12,
                    }}>
                    <Text></Text>
                    <Text></Text>
                  </View>
                </View>
              </View>
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
                  ถัดไป
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

export default FormHeight;
