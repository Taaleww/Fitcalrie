import React from 'react';
import {View, StyleSheet, ScrollView, Image} from 'react-native';
import {Button} from 'react-native-paper';

const MainScreen = ({navigation}) => {
  return (
    <ScrollView style={{backgroundColor: '#F9FBFC'}}>
      <View style={styles.box}>
        <View style={styles.container}>
          <Image
            style={{width: 160, height: 160}}
            source={require('../../assets/images/Logo_FITCLRIE.png')}
          />
        </View>
        <View style={{paddingTop: 220}}>
          <Button
            style={{backgroundColor: '#FD9A86', borderRadius: 10}}
            labelStyle={{
              fontFamily: 'NotoSansThai-Regular',
            }}
            textColor="white"
            mode="contained"
            onPress={() => navigation.navigate('Login')}>
            เริ่มต้นใช้งาน
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  box: {
    paddingBottom: 13,
    padding: 18,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 200,
  },
});

export default MainScreen;
