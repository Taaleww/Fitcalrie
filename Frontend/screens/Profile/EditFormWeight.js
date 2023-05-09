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

const EditWeightSchema = Yup.object().shape({
  weight: Yup.number()
    .min(20, 'ต้องเป็นตัวเลขระหว่าง 20 ถึง 299')
    .max(299, 'ต้องเป็นตัวเลขระหว่าง 20 ถึง 299')
    .required('กรุณากรอกน้ำหนัก'),
});

const EditFormWeight = ({navigation, route}) => {
  const [editWeight] = useMutation(UPDATE_USER, {
    onCompleted(data) {
      route.params?.onUpdateUser({weight: data.updateUser.weight, BMI: data.updateUser.BMI});
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
          weight: String(route.params?.weight),
        }}
        validationSchema={EditWeightSchema}
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
                น้ำหนัก
              </Text>
              <Text
                style={{
                  width: 32,
                }}></Text>
            </View>
            <View style={styles.container}>
              <Image
                style={{width: 300, height: 300}}
                source={require('../../assets/images/personalweight.png')}
              />
              <SafeAreaView>
                <TextInput
                  style={styles.input}
                  value={values.weight}
                  onChangeText={handleChange('weight')}
                  onBlur={() => setFieldTouched('weight')}
                  placeholder="น้ำหนัก"
                  keyboardType="numeric"
                />
                {touched.weight && errors.weight && (
                  <Text style={styles.errorTxt}>{errors.weight}</Text>
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
                  onPress={() => {
                    editWeight({
                      variables: {
                        updateUserInput: {
                          weight: Number(values.weight),
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
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
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
