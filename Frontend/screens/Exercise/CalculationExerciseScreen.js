import React, {useContext} from 'react';
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
import {ADD_RUNNING} from '../../graphql/mutation';

const CalculatorSchema = Yup.object().shape({
  period: Yup.number()
    .min(5, 'กรุณากรอกระยะเวลามากกว่า 5 นาที')
    .required('กรุณากรอกระยะเวลา'),
  distance: Yup.number().required('กรุณากรอกระยะทาง'),
});

const CalculationExercise = ({navigation}) => {
  const [speed, setSpeed] = React.useState(0);
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  const context = useContext(AuthContext);
  const ID = context.user._id;

  const [AddRunning] = useMutation(ADD_RUNNING, {
    onCompleted(data) {
      showDialog();
      console.log('Add Running success');
    },
    onError(error) {
      console.error(error);
    },
  });

  const calculator = values => {
    setSpeed(values.distance / (values.period / 60));
    let METs;

    if (speed <= 4) {
      METs = 2.4;
    } else if (speed > 4 && speed <= 6) {
      METs = 4.1;
    } else if (speed > 6 && speed <= 7) {
      METs = 6.2;
    } else if (speed > 7 && speed <= 10) {
      METs = 9.6;
    } else if (speed > 10 && speed <= 13) {
      METs = 12.4;
    } else if (speed > 13 && speed <= 30) {
      METs = 14;
    }

    let result = METs * 0.0175 * 45 * values.period;
    return Number.isNaN(result) ? '-' : result.toFixed(2);
  };

  return (
    <Provider>
      <ScrollView style={{backgroundColor: '#F9FBFC'}}>
        <Formik
          initialValues={{
            period: '',
            distance: '',
          }}
          validationSchema={CalculatorSchema}
          onSubmit={showDialog}>
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
                  คำนวณการเผาผลาญ
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
                {calculator(values)}
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontFamily: 'NotoSansThai-Regular',
                  size: 14,
                }}>
                kcal
              </Text>
              {!isValid ||
                (speed > 30 && (
                  <Text style={styles.errorTxtDisabled}>
                    ความเร็วของคุณสูงเกินไป
                  </Text>
                ))}
              {!isValid ||
                (speed > 30 && (
                  <Text
                    style={{
                      color: '#FD9A86',
                      textAlign: 'center',
                      fontFamily: 'NotoSansThai-Regular',
                      fontSize:12
                    }}>
                    (จำกัดความเร็วไม่เกิน 30 km/h)
                  </Text>
                ))}

              <View style={{paddingTop: 40,paddingHorizontal:18}}>
                <SafeAreaView>
                  <TextInput
                    style={styles.input}
                    onChangeText={handleChange('distance')}
                    onBlur={() => setFieldTouched('distance')}
                    values={values.distance}
                    placeholder="  ระยะทาง                                                      กิโลเมตร"
                    keyboardType="numeric"
                  />
                  {touched.distance && errors.distance && (
                    <Text style={styles.errorTxt}>{errors.distance}</Text>
                  )}
                </SafeAreaView>

                <SafeAreaView>
                  <TextInput
                    style={styles.input}
                    onChangeText={handleChange('period')}
                    onBlur={() => setFieldTouched('period')}
                    values={values.period}
                    placeholder="  ระยะเวลา                                                           นาที"
                    keyboardType="numeric"
                  />
                  {touched.period && errors.period && (
                    <Text style={styles.errorTxt}>{errors.period}</Text>
                  )}
                </SafeAreaView>
              </View>

              <View style={{paddingTop: 180}}>
                <View style={styles.button}>
                  <Button
                    style={{
                      borderRadius: 10,
                      backgroundColor:
                        isValid && values.period ? '#FD9A86' : '#F2B5AA',
                    }}
                    labelStyle={{
                      fontFamily: 'NotoSansThai-Regular',
                      fontSize:12
                    }}
                    textColor="white"
                    mode="contained"
                    disabled={!isValid || speed > 30 || !values.period}
                    onPress={() => {
                      AddRunning({
                        variables: {
                          createRunningUser: {
                            userId: ID,
                            total_calories_burned: Number(calculator(values)),
                            exerciseId: '6406282869c12b5a7b6f5ed9',
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
                      fontSize: 16,
                      textAlign: 'center',
                      fontFamily: 'NotoSansThai-SemiBold',
                    }}>
                    เพิ่มรายการใหม่สำเร็จ
                  </Dialog.Title>
                  <Dialog.Actions>
                    <Button
                      labelStyle={{
                        fontFamily: 'NotoSansThai-Regular',
                        textAlign: 'center',
                        width: '100%',
                      }}
                      textColor="white"
                      buttonColor="#FD9A86"
                      onPress={() => navigation.navigate('Exercise')}>
                      ยืนยัน
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
export default CalculationExercise;

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
