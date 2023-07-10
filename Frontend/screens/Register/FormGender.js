import React from 'react';
import {View, StyleSheet, ScrollView, Image} from 'react-native';
import {Button, RadioButton, Text} from 'react-native-paper';

const FormGender = ({nextStep, onUpdateState, state}) => {
  return (
    <ScrollView style={{backgroundColor: '#F9FBFC'}}>
      <View>
        <View style={styles.container}>
          <Image
            style={{width: 300, height: 300}}
            source={require('../../assets/images/personalname.png')}
          />
        </View>

        <RadioButton.Group
          onValueChange={value => onUpdateState({gender: value})}
          value={state.gender}>
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
              fontSize:12
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
              fontSize:12
            }}
            label="หญิง"
            value="female"
          />
        </RadioButton.Group>

        <View style={{paddingTop: 40}}>
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
                  backgroundColor: '#FD9A86',
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
  box: {
    paddingBottom: 13,
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
