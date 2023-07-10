import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Image} from 'react-native';
import {Button, Text} from 'react-native-paper';
import DateField from 'react-native-datefield';

const FormBirth = ({nextStep, onUpdateState, state}) => {
  return (
    <ScrollView style={{backgroundColor: '#F9FBFC'}}>
      <View >
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
            defaultValue={state.dateOfbirth}
            maximumDate={new Date(2004, 1, 1)}
            minimumDate={new Date(1933, 1, 1)}
            onSubmit={value => {
              onUpdateState({dateOfbirth: value});
            }}
            handleErrors={() => console.error()}
          />
        </View>

        <View style={{paddingTop: 114}}>
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
              style={{backgroundColor: '#FD9A86', borderRadius: 10}}
              labelStyle={{
                fontFamily: 'NotoSansThai-Regular',
                fontSize:12
              }}
              textColor="white"
              mode="contained"
              disabled={state.dateOfbirth === ""}
              onPress={nextStep}>
              ถัดไป
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

export default FormBirth;
