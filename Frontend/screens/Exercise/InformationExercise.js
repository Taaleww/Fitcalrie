import * as React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {
  Avatar,
  Card,
  Text,
  Provider,
  IconButton,
} from 'react-native-paper';

const DeleteFoodScreen = ({navigation, route}) => {
  return (
    <Provider>
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
            {route.params?.name}
          </Text>
          <Text
            style={{
              width: 32,
            }}></Text>
        </View>
        <Text
          style={{
            textAlign: 'center',
            paddingTop: 50,
            fontWeight: 'bold',
            fontSize: 60,
            color: '#FD9A86',
            fontFamily: 'NotoSansThai-Regular',
          }}>
          {(route.params?.total_calories_burned).toFixed(0)}
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontFamily: 'NotoSansThai-Regular',
            size: 14,
          }}>
          kcal
        </Text>
        <View style={styles.container}>
          <Card.Title
            style={{backgroundColor: 'white', borderRadius: 10}}
            titleStyle={{fontFamily: 'NotoSansThai-Regular'}}
            title="ระยะเวลา (นาที)"
            left={props => (
              <Avatar.Icon
                {...props}
                icon="history"
                color="#1A212F"
                backgroundColor="#E9EFF2"
              />
            )}
            right={props => (
              <Text style={styles.text_details}>
                {(route.params?.time).toFixed(0)}
              </Text>
            )}
          />
        </View>
      </ScrollView>
    </Provider>
  );
};

export default DeleteFoodScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 36,
    paddingLeft: 18,
    paddingRight: 18,
  },
  text_details: {
    paddingRight: 10,
    fontSize: 14,
    fontFamily: 'NotoSansThai-Regular',
  },
  text_Regular: {
    color: '#1A212F',
    fontSize: 14,
    paddingLeft: 18,
    paddingTop: 24,
    fontFamily: 'NotoSansThai-Regular',
  }
});
