import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import FoodScreen from '../screens/FoodScreen';
import ExerciseScreen from '../screens/ExerciseScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SuggestionMorningScreen from '../screens/SuggestionMorning';
import SuggestionLunchScreen from '../screens/SuggestionLunch';
import SuggestionNightScreen from '../screens/SuggestionNight';
import NutritionScreen from '../screens/NutritionScreen';
import NutritionLunchScreen from '../screens/NutritionLunchScreen';
import NutritionNightScreen from '../screens/NutrtionNightScreen';
import DeleteFoodScreen from '../screens/DeleteFoodScreen';
import SearchFoodScreen from '../screens/SearchFoodScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SuggestionMorning"
        component={SuggestionMorningScreen}
        options={{ title: 'มื้อเช้า', headerTitleAlign:'center' }}
      />
       <Stack.Screen
        name="SuggestionLunch"
        component={SuggestionLunchScreen}
        options={{ title: 'มื้อกลางวัน', headerTitleAlign:'center' }}
      />
      <Stack.Screen
        name="SuggestionNight"
        component={SuggestionNightScreen}
        options={{ title: 'มื้อเย็น', headerTitleAlign:'center' }}
      />
    </Stack.Navigator>
  );
};

const FoodStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Food"
        component={FoodScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Nutrition"
        component={NutritionScreen}
        options={{ title: 'มื้อเช้า', headerTitleAlign:'center' }}
      />
      <Stack.Screen
        name="NutritionLunch"
        component={NutritionLunchScreen}
        options={{ title: 'มื้อกลางวัน', headerTitleAlign:'center' }}
      />
      <Stack.Screen
        name="NutritionNight"
        component={NutritionNightScreen}
        options={{ title: 'มื้อเย็น', headerTitleAlign:'center' }}
      />
      <Stack.Screen
        name="DeleteFood"
        component={DeleteFoodScreen}
        options={{ title: 'ข้าวกระเพราไก่', headerTitleAlign:'center' }}
      />
      <Stack.Screen
        name="SearchFood"
        component={SearchFoodScreen}
        options={{ title: 'อาหาร', headerTitleAlign:'center' }}
      />

    </Stack.Navigator>
  );
};



const Tabs = () => {
  return (
    <Tab.Navigator 
    screenOptions={{
      headerShown: false,
      tabBarInactiveTintColor: '#666666',
      tabBarActiveTintColor: '#FD9A86',
    }} >
      <Tab.Screen
        name="หน้าหลัก"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={22} />
          ),
        }} />
      <Tab.Screen
        name="อาหาร"
        component={FoodStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name="ios-fast-food" color={color} size={22} />
          ),
        }} />
      <Tab.Screen
        name="ออกกำลังกาย"
        component={ExerciseScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name="md-barbell" color={color} size={22} />
          ),
        }} />
      <Tab.Screen
        name="โปรไฟล์"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name="md-person-sharp" color={color} size={22} />
          ),
        }} />
    </Tab.Navigator>
  );
}

export default Tabs;
