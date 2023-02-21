import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {Avatar, Card, Text} from 'react-native-paper';
import ProgressCircle from 'react-native-progress-circle';

export default function ListSummaryNutrition({kcal, protein, carbo, fat, sugar}) {
  return (
    <View>
      <View style={{paddingHorizontal: 18}}>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 12,
            paddingTop: 10,
            paddingBottom: 10,
            backgroundColor: 'white',
            borderRadius: 10,
          }}>
          <View style={{paddingHorizontal: 6}}>
            <ProgressCircle
              percent={30}
              radius={30}
              borderWidth={5}
              color="#FD9A86"
              shadowColor="#E9EFF2"
              bgColor="#fff">
              <Text
                style={{
                  fontSize: 12,
                  paddingHorizontal: 10,
                  textAlign: 'center',
                  paddingHorizontal: 10,
                  fontFamily: 'NotoSansThai-SemiBold',
                }}>
                {kcal+ ' kcal'}
              </Text>
            </ProgressCircle>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'NotoSansThai-Regular',
                fontSize: 12,
                paddingTop: 2,
              }}>
              แคลอรี่
            </Text>
          </View>
          <View style={{paddingHorizontal: 6}}>
            <ProgressCircle
              percent={30}
              radius={30}
              borderWidth={5}
              color="#FD9A86"
              shadowColor="#E9EFF2"
              bgColor="#fff">
              <Text
                style={{
                  fontSize: 12,
                  textAlign: 'center',
                  paddingHorizontal: 10,
                  fontFamily: 'NotoSansThai-SemiBold',
                }}>
                {protein+ '   g'}
              </Text>
            </ProgressCircle>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'NotoSansThai-Regular',
                fontSize: 12,
                paddingTop: 2,
              }}>
              โปรตีน
            </Text>
          </View>
          <View style={{paddingHorizontal: 6}}>
            <ProgressCircle
              percent={30}
              radius={30}
              borderWidth={5}
              color="#FD9A86"
              shadowColor="#E9EFF2"
              bgColor="#fff">
              <Text
                style={{
                  fontSize: 12,
                  textAlign: 'center',
                  paddingHorizontal: 10,
                  fontFamily: 'NotoSansThai-SemiBold',
                }}>
                {carbo+ '   g'}
              </Text>
            </ProgressCircle>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'NotoSansThai-Regular',
                fontSize: 12,
                paddingTop: 2,
              }}>
              คาร์โบ
            </Text>
          </View>
          <View style={{paddingHorizontal: 6}}>
            <ProgressCircle
              percent={30}
              radius={30}
              borderWidth={5}
              color="#FD9A86"
              shadowColor="#E9EFF2"
              bgColor="#fff">
              <Text
                style={{
                  fontSize: 12,
                  textAlign: 'center',
                  paddingHorizontal: 10,
                  fontFamily: 'NotoSansThai-SemiBold',
                }}>
                {fat+ '   g'}
              </Text>
            </ProgressCircle>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'NotoSansThai-Regular',
                fontSize: 12,
                paddingTop: 2,
              }}>
              ไขมัน
            </Text>
          </View>
          <View style={{paddingHorizontal: 6}}>
            <ProgressCircle
              percent={30}
              radius={30}
              borderWidth={5}
              color="#FD9A86"
              shadowColor="#E9EFF2"
              bgColor="#fff">
              <Text
                style={{
                  fontSize: 12,
                  textAlign: 'center',
                  paddingHorizontal: 10,
                  fontFamily: 'NotoSansThai-SemiBold',
                }}>
                {sugar+ '   g'}
              </Text>
            </ProgressCircle>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'NotoSansThai-Regular',
                fontSize: 12,
                paddingTop: 2,
              }}>
              น้ำตาล
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingLeft: 18,
    paddingRight: 18,
  },
  text_details: {
    paddingRight: 10,
    fontSize: 14,
    fontFamily: 'NotoSansThai-Regular',
  },
});
