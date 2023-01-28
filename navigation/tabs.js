import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
// import { Icon } from '@rneui/themed';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screens/HomeScreen';
import FoodScreen from '../screens/FoodScreen';
import ExerciseScreen from '../screens/ExerciseScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#FD9A86",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",

};

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#FD9A86",
        inactiveTintColor: '#1A212F',
      }} >
      <Tab.Screen
        name="หน้าหลัก"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-home" color={'#FD9A86'} size={26} />
          ),
        }} />
      <Tab.Screen
        name="อาหาร"
        component={FoodScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-fast-food" color={'#FD9A86'} size={26} />
          ),
        }} />
      <Tab.Screen
        name="ออกกำลังกาย"
        component={ExerciseScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ tintColor }) => (
            <Icon name="md-barbell" color={'#FD9A86'} size={26} />
          ),
        }} />
      <Tab.Screen
        name="โปรไฟล์"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ tintColor }) => (
            <Icon name="md-person-sharp" color={'#FD9A86'} size={26} />
          ),
        }} />
    </Tab.Navigator>
  );
}

export default Tabs;
