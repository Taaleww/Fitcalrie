import React from 'react';
import {View, StyleSheet, ScrollView, Text, Image} from 'react-native';
import {Button, RadioButton, IconButton} from 'react-native-paper';

const FormGender = ({navigation}) => {
  const [number, onChangeNumber] = React.useState('');
  const [value, setValue] = React.useState('male');
  console.log(value);
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
          onValueChange={value => setValue(value)}
          value={value}>
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
              mode="contained">
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
