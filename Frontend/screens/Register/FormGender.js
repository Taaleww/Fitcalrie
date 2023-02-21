import React from 'react';
import {View, StyleSheet, ScrollView, Image} from 'react-native';
import {Button, RadioButton, Text} from 'react-native-paper';

const FormGender = ({nextStep, onUpdateState, state}) => {
  return (
    <ScrollView>
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

        <View style={{paddingTop: 50}}>
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
