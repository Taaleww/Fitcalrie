import React, {useContext, useState, useEffect}from 'react';
import {View, StyleSheet, ScrollView, Text, Image} from 'react-native';
import {Button, RadioButton, IconButton} from 'react-native-paper';
import {useMutation} from '@apollo/client';
import {UPDATE_USER} from '../../graphql/mutation';

const FormGender = ({navigation, route}) => {
  const [gender, setGender] = React.useState('male');

  useEffect(() => {
    setGender(route.params?.gender);
  }, [route.params?.gender]);

  const [editGender] = useMutation(UPDATE_USER, {
    onCompleted(data) {
      route.params?.onUpdateUser({gender: data.updateUser.gender});
      navigation.navigate('Profile');
    },
    onError(error) {
      console.error(error);
    },
  });

  return (
    <ScrollView>
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
          เพศ
        </Text>
        <Text
          style={{
            width: 32,
          }}></Text>
      </View>
      <View style={styles.box}>
        <View style={styles.container}>
          <Image
            style={{width: 300, height: 300}}
            source={require('../../assets/images/personalname.png')}
          />
        </View>

        <RadioButton.Group
          onValueChange={value => setGender(value)}
          value={gender}>
          <RadioButton.Item
            style={{
              backgroundColor: 'white',
              borderRadius: 10,
              marginHorizontal: 18,
              marginVertical: 10,
              Display: 'display',
            }}
            labelStyle={{
              fontFamily: 'NotoSansThai-Regular',
            }}
            label="ชาย"
            value="male"
          />
          <RadioButton.Item
            style={{
              backgroundColor: 'white',
              borderRadius: 10,
              marginHorizontal: 18,
            }}
            labelStyle={{
              fontFamily: 'NotoSansThai-Regular',
            }}
            label="หญิง"
            value="female"
          />
        </RadioButton.Group>

        <View style={{paddingTop: 75}}>
          <View style={styles.button}>
            <Button
              style={{backgroundColor: '#FD9A86', borderRadius: 10}}
              labelStyle={{
                fontFamily: 'NotoSansThai-Regular',
              }}
              textColor="white"
              mode="contained"
              onPress={() => {
                editGender({
                  variables: {
                    updateUserInput: {
                      gender,
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingRight: 100,
    paddingTop: 20,
  },
  container: {
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    paddingBottom: 13,
  },
  Image: {
    height: 80,
    width: 60,
  },
  text_header: {
    color: '#1A212F',
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 110,
    textAlign: 'center',
    paddingBottom: 10,
  },
  iconbutton: {
    top: 50,
  },
  input: {
    width: 360,
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
});

export default FormGender;
