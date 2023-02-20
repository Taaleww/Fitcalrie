import * as React from 'react';
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {Avatar, Card, IconButton, Text, Button} from 'react-native-paper';

const NutrtionNightScreen = ({navigation}) => (
  <ScrollView>
    <View style={styles.box}>
      {/* <View style={styles.iconbutton}>
        <IconButton
          icon="chevron-left"
          iconColor="#1A212F"
          size={36}
          onPress={() => console.log('Pressed')}
        />
      </View>

      <Text style={styles.text_header}>อาหารกลางวัน</Text>
      <Text style={styles.text_detail}>120 Kcal</Text> */}
      <Text style={styles.text_Regular}>เมนูอาหาร</Text>

      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate('DeleteFood')}>
        <View style={styles.container}>
          <Card.Title
            style={{backgroundColor: 'white', borderRadius: 10}}
            titleStyle={{fontFamily: 'NotoSansThai-Regular'}}
            title="ข้าวกระเพราไก่"
            subtitleStyle={{fontFamily: 'NotoSansThai-Regular'}}
            subtitle="120 kcal"
            left={props => (
              <Avatar.Icon
                {...props}
                icon="food"
                color="#1A212F"
                backgroundColor="#E9EFF2"
              />
            )}
            right={props => (
              <IconButton
                {...props}
                icon="chevron-right"
                iconColor="#1A212F"
                onPress={() => {}}
              />
            )}
          />
        </View>
      </TouchableOpacity>

      <View style={{paddingTop: 410}}>
        <View style={styles.button}>
          <Button
            style={{backgroundColor: '#FD9A86', borderRadius: 10}}
            labelStyle={{
              fontFamily: 'NotoSansThai-Regular',
            }}
            textColor="white"
            mode="contained"
            onPress={() => navigation.navigate('SearchFood')}>
            เพิ่มมื้ออาหาร
          </Button>
        </View>
      </View>
    </View>
  </ScrollView>
);

export default NutrtionNightScreen;

const styles = StyleSheet.create({
  box: {
    paddingBottom: 13,
  },
  container: {
    paddingTop: 10,
    paddingLeft: 18,
    paddingRight: 18,
  },
  text_header: {
    color: '#1A212F',
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 116,
    textAlign: 'center',
    fontFamily: 'NotoSansThai-Regular',
  },
  text_detail: {
    color: '#FD9A86',
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 116,
    textAlign: 'center',
    fontFamily: 'NotoSansThai-Regular',
  },
  text_Regular: {
    color: '#1A212F',
    fontSize: 20,
    paddingLeft: 18,
    paddingTop: 24,
    fontFamily: 'NotoSansThai-SemiBold',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 18,
    paddingRight: 18,
    paddingBottom: 10,
  },
  iconbutton: {
    paddingLeft: 3,
    top: 50,
  },
});
