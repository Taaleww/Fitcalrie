import React, {useContext, useState, useEffect} from 'react';
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {Text, Button, List, Avatar} from 'react-native-paper';
import {AuthContext} from '../../context/AuthContext';
import {useQuery} from '@apollo/client';
import {FINDUSER} from '../../graphql/query';

const ProfileScreen = ({navigation}) => {
  const context = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [date, setDate] = useState('');

  const username = context.username;
  const userinfo = context.user;

  const {data} = useQuery(FINDUSER, {
    variables: {username: username}
  });
  const onUpdateUser = payload => {
    context?.setUser({
      ...context?.user,
      ...payload,
    });
  };

  useEffect(() => {
    // Handle user data when data was fetch
    if (data) {
      // - Set User
      const newUser = JSON.parse(JSON.stringify(data.findUser));
      context?.setUser(newUser);
    }
  }, [data]);

  useEffect(() => {
    // - Set date
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const newDate = new Date(context?.user?.dateOfbirth);
    const date = new Date(newDate).getDate(); //Current Date
    const month = months[new Date(newDate).getMonth()]; //Current Month
    const year = new Date(newDate).getFullYear(); //Current Year
    setDate(date + ' ' + month + ' ' + year);
  }, [context.user?.dateOfbirth]);

  return (
    <ScrollView>
      <View style={styles.box}>
        <Text style={styles.text_header}>โปรไฟล์ของฉัน</Text>
        {context.user?.gender === 'male' ? (
          <Avatar.Image
            style={{alignSelf: 'center'}}
            size={90}
            source={require('../../assets/images/male.png')}
          />
        ) : (
          <Avatar.Image
            style={{alignSelf: 'center'}}
            size={90}
            source={require('../../assets/images/female.png')}
          />
        )}
        <Text
          style={{
            fontSize: 14,
            paddingTop: 10,
            fontFamily: 'NotoSansThai-SemiBold',
            textAlign: 'center',
          }}>
          {context?.user?.username}
        </Text>
        <Text style={styles.text_Regular}>ข้อมูลส่วนตัว</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() =>
            navigation.navigate({
              name: 'EditFormGender',
              params: {username, gender: context?.user.gender, onUpdateUser},
              merge: true,
            })
          }>
          <View style={{paddingTop: 10}}>
            <List.Item
              style={{backgroundColor: 'white', borderRadius: 10}}
              title="เพศ"
              titleStyle={{
                fontSize: 14,
                fontFamily: 'NotoSansThai-Regular',
              }}
              right={props => (
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'NotoSansThai-Regular',
                  }}>
                  {{male: 'ชาย', female: 'หญิง'}[context?.user?.gender]}
                </Text>
              )}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() =>
            navigation.navigate({
              name: 'EditFormBirth',
              params: {
                username,
                dateOfbirth: context?.user?.dateOfbirth,
                onUpdateUser,
              },
              merge: true,
            })
          }>
          <View style={{paddingTop: 10}}>
            <List.Item
              style={{backgroundColor: 'white', borderRadius: 10}}
              title="วันเกิด"
              titleStyle={{
                fontSize: 14,
                fontFamily: 'NotoSansThai-Regular',
              }}
              right={props => (
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'NotoSansThai-Regular',
                  }}>
                  {date}
                </Text>
              )}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() =>
            navigation.navigate({
              name: 'EditFormWeight',
              params: {username, weight: context?.user.weight, onUpdateUser},
              merge: true,
            })
          }>
          <View style={{paddingTop: 10}}>
            <List.Item
              style={{backgroundColor: 'white', borderRadius: 10}}
              title="น้ำหนัก"
              titleStyle={{
                fontSize: 14,
                fontFamily: 'NotoSansThai-Regular',
              }}
              right={props => (
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'NotoSansThai-Regular',
                  }}>
                  {context?.user?.weight}
                </Text>
              )}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() =>
            navigation.navigate({
              name: 'EditFormHeight',
              params: {username, height: context?.user.height, onUpdateUser},
              merge: true,
            })
          }>
          <View style={{paddingTop: 10}}>
            <List.Item
              style={{backgroundColor: 'white', borderRadius: 10}}
              title="ส่วนสูง"
              titleStyle={{
                fontSize: 14,
                fontFamily: 'NotoSansThai-Regular',
              }}
              right={props => (
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'NotoSansThai-Regular',
                  }}>
                  {context?.user?.height}
                </Text>
              )}
            />
          </View>
        </TouchableOpacity>

        <Text style={styles.text_Regular}>แผนควบคุมน้ำหนัก</Text>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() =>
            navigation.navigate({
              name: 'EditFormGoal',
              params: {username, goal: context?.user.goal, onUpdateUser},
              merge: true,
            })
          }>
          <View style={{paddingTop: 10}}>
            <List.Item
              style={{backgroundColor: 'white', borderRadius: 10}}
              title="เป้าหมายน้ำหนัก"
              titleStyle={{
                fontSize: 14,
                fontFamily: 'NotoSansThai-Regular',
              }}
              right={props => (
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'NotoSansThai-Regular',
                  }}>
                  {context?.user?.goal}
                </Text>
              )}
            />
          </View>
        </TouchableOpacity>

        <View style={{paddingTop: 24}}>
          <View style={styles.button}>
            <Button
              style={{backgroundColor: '#FD9A86', borderRadius: 10}}
              labelStyle={{
                fontFamily: 'NotoSansThai-Regular',
              }}
              textColor="white"
              mode="contained"
              onPress={() => {
                context.logout();
              }}>
              ออกจากระบบ
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  box: {
    paddingLeft: 18,
    paddingRight: 18,
  },
  text_header: {
    fontFamily: 'NotoSansThai-SemiBold',
    fontSize: 20,
    paddingHorizontal: 116,
    textAlign: 'center',
    paddingTop: 50,
    paddingBottom: 10,
  },
  text_Regular: {
    fontSize: 14,
    paddingTop: 24,
    fontFamily: 'NotoSansThai-SemiBold',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 10,
  },
});
