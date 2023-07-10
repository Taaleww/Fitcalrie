import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ScrollView, Image, Text} from 'react-native';
import {Button, IconButton} from 'react-native-paper';
import DateField from 'react-native-datefield';
import {useMutation} from '@apollo/client';
import {UPDATE_USER} from '../../graphql/mutation';

const EditFormBirth = ({navigation, route}) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setDate(route.params?.dateOfbirth);
  }, [route.params?.dateOfbirth]);

  const [editDateOfBirth] = useMutation(UPDATE_USER, {
    onCompleted(data) {
      route.params?.onUpdateUser({dateOfbirth: data.updateUser.dateOfbirth});
      navigation.navigate('Profile');
    },
    onError(error) {
      console.error(error);
    },
  });

  return (
    <ScrollView style={{backgroundColor: '#F9FBFC'}}>
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
          วันเกิด
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
          <DateField
            styleInput={{
              fontSize: 15,
              width: '27%',
              borderRadius: 10,
              borderColor: '#cacaca',
              backgroundColor: 'white',
              marginHorizontal: 10,
              fontFamily: 'NotoSansThai-Regular',
              fontSize:12
            }}
            disabled
            labelDate="วัน"
            labelMonth="เดือน"
            labelYear="ปี"
            defaultValue={new Date(route.params.dateOfbirth)}
            maximumDate={new Date(2004, 1, 1)}
            minimumDate={new Date(1933, 1, 1)}
            onSubmit={value => setDate(value)}
          />
        </View>

        <View style={{paddingTop: 140}}>
          <View style={styles.button}>
            <Button
              style={{backgroundColor: '#FD9A86', borderRadius: 10}}
              labelStyle={{
                fontFamily: 'NotoSansThai-Regular',
                fontSize:12
              }}
              textColor="white"
              mode="contained"
              onPress={() => {
                editDateOfBirth({
                  variables: {
                    updateUserInput: {
                      dateOfbirth: date.toISOString(),
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
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 18,
    paddingRight: 18,
    paddingBottom: 10,
  },
});

export default EditFormBirth;
