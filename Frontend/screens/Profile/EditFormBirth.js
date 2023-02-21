import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  SafeAreaView,
} from 'react-native';
import {Button, IconButton} from 'react-native-paper';
import DateField from 'react-native-datefield';

const EditFormBirth = ({navigation}) => {
  const [date, setDate] = useState(new Date());
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
            }}
            disabled
            labelDate="วัน"
            labelMonth="เดือน"
            labelYear="ปี"
            defaultValue={new Date()}
            onSubmit={value => console.log(value)}
          />
        </View>

        <View style={{paddingTop: 145}}>
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
  box: {
    paddingBottom: 13,
  },
  container: {
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_header: {
    color: '#1A212F',
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 161,
    textAlign: 'center',
  },
  iconbutton: {
    top: 50,
  },
  input: {
    width: 380,
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

export default EditFormBirth;
