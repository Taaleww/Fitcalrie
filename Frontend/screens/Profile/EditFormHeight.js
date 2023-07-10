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

const EditHeightSchema = Yup.object().shape({
  height: Yup.number()
    .min(1, 'ต้องเป็นตัวเลขระหว่าง 1 ถึง 299')
    .max(299, 'ต้องเป็นตัวเลขระหว่าง 1 ถึง 299')
    .required('กรุณากรอกส่วนสูง'),
});

const EditFormHeight = ({navigation, route}) => {
  const [editHeight] = useMutation(UPDATE_USER, {
    onCompleted(data) {
      route.params?.onUpdateUser({
        height: data.updateUser.height,
        BMI: data.updateUser.BMI,
      });
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
          height: String(route.params?.height),
        }}
        validationSchema={EditHeightSchema}
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
                ส่วนสูง
              </Text>
              <Text
                style={{
                  width: 32,
                }}></Text>
            </View>
            <View style={styles.container}>
              <Image
                style={{width: 300, height: 300}}
                source={require('../../assets/images/personalheight.png')}
              />
            </View>

            <View style={{padding: 18}}>
              <SafeAreaView>
                <TextInput
                  style={styles.input}
                  value={values.height}
                  onChangeText={handleChange('height')}
                  onBlur={() => setFieldTouched('height')}
                  placeholder="ส่วนสูง                                                    เซนติเมตร"
                  keyboardType="numeric"
                />
                {touched.height && errors.height && (
                  <Text style={styles.errorTxt}>{errors.height}</Text>
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
                    editHeight({
                      variables: {
                        updateUserInput: {
                          height: Number(values.height),
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

export default EditFormHeight;
