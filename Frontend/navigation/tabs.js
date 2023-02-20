import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from '@react-navigation/native';

import HomeScreen from '../screens/Home/HomeScreen';
import FoodScreen from '../screens/Food/FoodScreen';
import ExerciseScreen from '../screens/Exercise/ExerciseScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import SuggestionMorningScreen from '../screens/Home/SuggestionMorning';
import SuggestionLunchScreen from '../screens/Home/SuggestionLunch';
import SuggestionNightScreen from '../screens/Home/SuggestionNight';
import NutritionScreen from '../screens/Food/NutritionScreen';
import NutritionLunchScreen from '../screens/Food/NutritionLunchScreen';
import NutritionNightScreen from '../screens/Food/NutrtionNightScreen';
import DeleteFoodScreen from '../screens/Food/DeleteFoodScreen';
import SearchFoodScreen from '../screens/Food/SearchFoodScreen';
import EditFormNameScreen from '../screens/Profile/EditFormName';
import EditFormGenderScreen from '../screens/Profile/EditFormGender';
import EditFormHeightScreen from '../screens/Profile/EditFormHeight';
import EditFormWeightScreen from '../screens/Profile/EditFormWeight';
import EditFormGoalScreen from '../screens/Profile/EditFormGoal';
import EditFormBirthScreen from '../screens/Profile/EditFormBirth';
import SearchExerciseScreen from '../screens/Exercise/SearchExerciseScreen';
import DeleteExerciseScreen from '../screens/Exercise/DeleteExerciseScreen';
import CalculationExerciseScreen from '../screens/Exercise/CalculationExerciseScreen';
import EditCurrentWeightScreen from '../screens/Home/EditCurrentWeight';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SuggestionMorning"
        component={SuggestionMorningScreen}
        options={{title: 'แซนวิช'}}
      />
      <Stack.Screen
        name="SuggestionLunch"
        component={SuggestionLunchScreen}
        options={{title: 'แซนวิช'}}
      />
      <Stack.Screen
        name="SuggestionNight"
        component={SuggestionNightScreen}
        options={{title: 'แซนวิช'}}
      />
      <Stack.Screen
        name="EditCurrentWeight"
        component={EditCurrentWeightScreen}
        options={{title: 'น้ำหนักปัจจุบัน'}}
      />
    </Stack.Navigator>
  );
};

const FoodStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen
        name="Food"
        component={FoodScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Nutrition"
        component={NutritionScreen}
        options={{title: 'มื้อเช้า'}}
      />
      <Stack.Screen
        name="NutritionLunch"
        component={NutritionLunchScreen}
        options={{title: 'มื้อกลางวัน'}}
      />
      <Stack.Screen
        name="NutritionNight"
        component={NutritionNightScreen}
        options={{title: 'มื้อเย็น'}}
      />
      <Stack.Screen
        name="DeleteFood"
        component={DeleteFoodScreen}
        options={{title: 'ข้าวกระเพราไก่'}}
      />
      <Stack.Screen
        name="SearchFood"
        component={SearchFoodScreen}
        options={{title: 'อาหาร'}}
      />
    </Stack.Navigator>
  );
};
const ExerciseStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen
        name="Exercise"
        component={ExerciseScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SearchExercise"
        component={SearchExerciseScreen}
        options={{title: 'ออกกำลังกาย'}}
      />
      <Stack.Screen
        name="DeleteExercise"
        component={DeleteExerciseScreen}
        options={{title: 'วิ่ง'}}
      />
      <Stack.Screen
        name="CalculationExercise"
        component={CalculationExerciseScreen}
        options={{title: 'วิ่ง'}}
      />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditFormName"
        component={EditFormNameScreen}
        options={{title: 'ชื่อ'}}
      />
      <Stack.Screen
        name="EditFormGender"
        component={EditFormGenderScreen}
        options={{title: 'เพศ'}}
      />
      <Stack.Screen
        name="EditFormBirth"
        component={EditFormBirthScreen}
        options={{title: 'วันเกิด'}}
      />
      <Stack.Screen
        name="EditFormHeight"
        component={EditFormHeightScreen}
        options={{title: 'ส่วนสูง'}}
      />
      <Stack.Screen
        name="EditFormWeight"
        component={EditFormWeightScreen}
        options={{title: 'น้ำหนัก'}}
      />
      <Stack.Screen
        name="EditFormGoal"
        component={EditFormGoalScreen}
        options={{title: 'เป้าหมายการลดน้ำหนัก'}}
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
      }}
      tabBarOptions={{
        labelStyle: {textTransform: 'none', fontFamily: 'NotoSansThai-Regular'}
      }}>
      <Tab.Screen
        name="หน้าหลัก"
        component={HomeStack}
        options={({route}) => ({
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon name="ios-home" color={color} size={22} />
          ),
          tabBarStyle: (route => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? '';
            console.log(routeName);
            if (routeName === 'SuggestionMorning') {
              return {display: 'none'};
            }
            if (routeName === 'SuggestionLunch') {
              return {display: 'none'};
            }
            if (routeName === 'SuggestionNight') {
              return {display: 'none'};
            }
            if (routeName === 'EditCurrentWeight') {
              return {display: 'none'};
            }
            return;
          })(route),
        })}
      />
      <Tab.Screen
        name="อาหาร"
        component={FoodStack}
        options={({route}) => ({
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon name="ios-fast-food" color={color} size={22} />
          ),
          tabBarStyle: (route => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? '';
            console.log(routeName);
            if (routeName === 'Nutrition') {
              return {display: 'none'};
            }
            if (routeName === 'NutritionLunch') {
              return {display: 'none'};
            }
            if (routeName === 'NutritionNight') {
              return {display: 'none'};
            }
            if (routeName === 'DeleteFood') {
              return {display: 'none'};
            }
            if (routeName === 'SearchFood') {
              return {display: 'none'};
            }
            return;
          })(route),
        })}
      />
      <Tab.Screen
        name="ออกกำลังกาย"
        component={ExerciseStack}
        options={({route}) => ({
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon name="md-barbell" color={color} size={22} />
          ),
          tabBarStyle: (route => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? '';
            console.log(routeName);
            if (routeName === 'SearchExercise') {
              return {display: 'none'};
            }
            if (routeName === 'DeleteExercise') {
              return {display: 'none'};
            }
            if (routeName === 'CalculationExercise') {
              return {display: 'none'};
            }
            return;
          })(route),
        })}
      />
      <Tab.Screen
        name="โปรไฟล์"
        component={ProfileStack}
        options={({route}) => ({
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon name="md-person-sharp" color={color} size={22} />
          ),
          tabBarStyle: (route => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? '';
            console.log(routeName);
            if (routeName === 'EditFormName') {
              return {display: 'none'};
            }
            if (routeName === 'EditFormGender') {
              return {display: 'none'};
            }
            if (routeName === 'EditFormBirth') {
              return {display: 'none'};
            }
            if (routeName === 'EditFormHeight') {
              return {display: 'none'};
            }
            if (routeName === 'EditFormWeight') {
              return {display: 'none'};
            }
            if (routeName === 'EditFormGoal') {
              return {display: 'none'};
            }
            return;
          })(route),
        })}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
