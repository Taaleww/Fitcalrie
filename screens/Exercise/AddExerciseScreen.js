import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TextInput,
  Alert,
} from 'react-native';
import {
  Text,
  Button,
  Dialog,
  Portal,
  Provider,
  IconButton,
} from 'react-native-paper';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {AuthContext} from '../../context/AuthContext';
import {useMutation} from '@apollo/client';
import {ADD_EXERCISE} from '../../graphql/mutation';
import {FIND_TOTALCAL} from '../../graphql/mutation';

const CalculatorSchema = Yup.object().shape({
  period: Yup.number()
    .min(5, 'กรุณากรอกระยะเวลามากกว่า 5 นาที')
    .required('กรุณากรอกระยะเวลา'),
});

const AddExercise = ({navigation,route}) => {
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  const context = useContext(AuthContext);
  const ID = context.user._id;
  const [totalCal, settotalcal] = React.useState("-");

  const [AddExercise] = useMutation(ADD_EXERCISE, {
    onCompleted(data) {
      showDialog();
      console.log('Add Exercise success');
    },
    onError(error) {
      console.error(error);
    },
  });

  const [FindTotalCal] = useMutation(FIND_TOTALCAL, {
    onCompleted(data) {
      const newTotalCal = data?.createTotalCal?.total_calories_burned || 0;
      settotalcal(newTotalCal.toFixed(2));
    },
    onError(error) {
      console.error(error);
    },
  });


  return (
    <Provider>
      <ScrollView style={{backgroundColor: '#F9FBFC'}}>
        <Formik
          initialValues={{
            period: '',
          }}
          validationSchema={CalculatorSchema}
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
            <View>
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
                    fontSize: 16,
                    fontFamily: 'NotoSansThai-SemiBold',
                  }}>
                  {route.params?.name}
                </Text>
                <Text
                  style={{
                    width: 32,
                  }}></Text>
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  paddingTop: 50,
                  fontWeight: 'bold',
                  fontSize: 60,
                  color: '#FD9A86',
                  fontFamily: 'NotoSansThai-Regular',
                }}
                values={values.result}>
                {totalCal}
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontFamily: 'NotoSansThai-Regular',
                  size: 14,
                }}>
                kcal
              </Text>

              <View style={{paddingTop: 80, paddingHorizontal:18}}>
                <SafeAreaView>
                  <TextInput
                    style={styles.input}
                    onChangeText={handleChange('period')}
                    onBlur={() => setFieldTouched('period')}
                    values={values.period}
                    placeholder="ระยะเวลา                                                              นาที"
                    keyboardType="numeric"
                  />
                  {touched.period && errors.period && (
                    <Text style={styles.errorTxt}>{errors.period}</Text>
                  )}
                </SafeAreaView>
              </View>

              <View style={{paddingTop: 140}}>
                <View style={styles.button}>
                  <Button
                    style={{backgroundColor: 'white', borderRadius: 10}}
                    labelStyle={{
                      fontFamily: 'NotoSansThai-Regular',
                      fontSize:12
                      
                    }}
                    textColor="#FD9A86"
                    mode="contained"
                    onPress={() => {
                      FindTotalCal({
                        variables: {
                          createTotalCal: {
                            userId: ID,
                            exerciseId: route.params?.id,
                            time: Number(values.period),
                          },
                        },
                      });
                    }}>
                    คำนวณการเผาผลาญ
                  </Button>
                  <View style={{paddingTop: 10}}></View>
                  <Button
                    style={{
                      borderRadius: 10,
                      backgroundColor: isValid && values.period ? '#FD9A86' : '#F2B5AA',
                    }}
                    labelStyle={{
                      fontFamily: 'NotoSansThai-Regular',
                      fontSize:12
                    }}
                    textColor="white"
                    mode="contained"
                    disabled={!isValid || !values.period}
                    onPress={() => {
                      AddExercise({
                        variables: {
                          createExerciseOfUserInput: {
                            userId: ID,
                            exerciseId: route.params?.id,
                            time: Number(values.period),
                            date: new Date(),
                          },
                        },
                      });
                    }}>
                    บันทึก
                  </Button>
                </View>
              </View>
              <Portal>
                <Dialog
                  visible={visible}
                  onDismiss={hideDialog}
                  style={{backgroundColor: 'white', borderRadius: 10}}>
                  <Dialog.Icon color="#42DCAE" icon="check-circle" size={30} />
                  <Dialog.Title
                    style={{
                      fontSize: 14,
                      textAlign: 'center',
                      fontFamily: 'NotoSansThai-SemiBold',
                    }}>
                    เพิ่มรายการใหม่สำเร็จ
                  </Dialog.Title>
                  <Dialog.Actions>
                    <Button
                      labelStyle={{
                      fontSize:12,
                      fontFamily: 'NotoSansThai-Regular',
                      }}
                      textColor="white"
                      buttonColor="#FD9A86"
                      onPress={() => navigation.navigate('Exercise')}>
                       {'                           '}ยืนยัน
                    {'                                   '}
                    </Button>
                  </Dialog.Actions>
                </Dialog>
              </Portal>
            </View>
          )}
        </Formik>
      </ScrollView>
    </Provider>
  );
};
export default AddExercise;

const styles = StyleSheet.create({
  box: {
    paddingBottom: 13,
  },
  container: {
    paddingTop: 10,
    paddingLeft: 18,
    paddingRight: 18,
  },
  text_details: {
    paddingRight: 10,
    fontSize: 14,
  },
  text_Regular: {
    color: '#1A212F',
    fontSize: 18,
    paddingLeft: 18,
    paddingTop: 24,
    fontFamily: 'NotoSansThai-SemiBold',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 18,
    paddingRight: 18,
    paddingBottom: 10,
  },
  input: {
    height: 40,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
    fontFamily: 'NotoSansThai-Regular',
    fontSize:12
  },
  errorTxt: {
    color: '#FD9A86',
    paddingLeft: 16,
    fontFamily: 'NotoSansThai-Regular',
    fontSize:12
  },
  errorTxtDisabled: {
    color: '#FD9A86',
    paddingTop: 10,
    textAlign: 'center',
    fontFamily: 'NotoSansThai-Regular',
    fontSize:12
  },
});
