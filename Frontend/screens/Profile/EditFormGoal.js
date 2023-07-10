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
import {useMutation} from '@apollo/client';
import {UPDATE_USER} from '../../graphql/mutation';

const EditGoalSchema = Yup.object().shape({
  goal: Yup.number()
    .min(20, 'ต้องเป็นตัวเลขระหว่าง 20 ถึง 299')
    .max(299, 'ต้องเป็นตัวเลขระหว่าง 20 ถึง 299')
    .required('กรุณากรอกน้ำหนัก'),
});

const EditFormGoal = ({navigation, route}) => {
  const [editGoal] = useMutation(UPDATE_USER, {
    onCompleted(data) {
      route.params?.onUpdateUser({goal: data.updateUser.goal});
      navigation.navigate('Profile');
    },
    onError(error) {
      console.error(error);
    },
  });

  return (
    <ScrollView style={{backgroundColor: '#F9FBFC'}}>
      <Formik
        initialValues={{
          goal: String(route.params?.goal),
        }}
        validationSchema={EditGoalSchema}
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
                  fontSize: 14,
                  fontFamily: 'NotoSansThai-SemiBold',
                }}>
                เป้าหมายน้ำหนัก
              </Text>
              <Text
                style={{
                  width: 32,
                }}></Text>
            </View>
            <View style={styles.container}>
              <Image
                style={{width: 300, height: 300}}
                source={require('../../assets/images/personalgoal.png')}
              />
            </View>

            <View style={{padding: 18}}>
              <SafeAreaView>
                <TextInput
                  style={styles.input}
                  value={values.goal}
                  onChangeText={handleChange('goal')}
                  onBlur={() => setFieldTouched('goal')}
                  placeholder="เป้าหมายน้ำหนัก                                            กิโลกรัม"
                  keyboardType="numeric"
                />
                {touched.goal && errors.goal && (
                  <Text style={styles.errorTxt}>{errors.goal}</Text>
                )}
              </SafeAreaView>
            </View>

            <View style={{paddingTop: 110}}>
              <View style={styles.button}>
                <Button
                  style={{
                    borderRadius: 10,
                    backgroundColor: isValid ? '#FD9A86' : '#F2B5AA',
                  }}
                  labelStyle={{
                    fontFamily: 'NotoSansThai-Regular',
                    fontSize: 12,
                  }}
                  textColor="white"
                  mode="contained"
                  disabled={!isValid}
                  onPress={() => {
                    editGoal({
                      variables: {
                        updateUserInput: {
                          goal: Number(values.goal),
                          username: route.params.username,
                        },
                      },
                    });
                  }}>
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
  box: {
    paddingBottom: 13,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    fontFamily: 'NotoSansThai-Regular',
    fontSize: 12,
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
    fontSize: 12,
  },
});

export default EditFormGoal;
