import React, {useContext, useEffect} from 'react';
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
import DeleteFoodScreen from '../screens/Food/DeleteFoodScreen';
import SearchFoodScreen from '../screens/Food/SearchFoodScreen';
import EditFormGenderScreen from '../screens/Profile/EditFormGender';
import EditFormHeightScreen from '../screens/Profile/EditFormHeight';
import EditFormWeightScreen from '../screens/Profile/EditFormWeight';
import EditFormGoalScreen from '../screens/Profile/EditFormGoal';
import EditFormBirthScreen from '../screens/Profile/EditFormBirth';
import SearchExerciseScreen from '../screens/Exercise/SearchExerciseScreen';
import DeleteExerciseScreen from '../screens/Exercise/DeleteExerciseScreen';
import CalculationExerciseScreen from '../screens/Exercise/CalculationExerciseScreen';
import EditCurrentWeightScreen from '../screens/Home/EditCurrentWeight';
import HistoryFoodScreen from '../screens/Food/HistoryFoodScreen';
import HistoryExerciseScreen from '../screens/Exercise/HistoryExercise';
import RoutinePlannerScreen from '../screens/Home/RoutinePlanner';
import {AuthContext} from '../context/AuthContext';
import {useQuery} from '@apollo/client';
import {FINDUSER} from '../graphql/query';
import InformationFoodScreen from '../screens/Food/InformationFood';
import InformationScreen from '../screens/Food/Information';
import InformationBMIScreen from '../screens/Home/InformationBMI';
import AddFoodScreen from '../screens/Food/AddFoodScreen';
import AddExerciseScreen from '../screens/Exercise/AddExerciseScreen';
import InformationExerciseScreen from '../screens/Exercise/InformationExercise';
import AddFoodRecomScreen from '../screens/Food/AddFoodRecomScreen';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  const context = useContext(AuthContext);
  const {data} = useQuery(FINDUSER, {
    variables: {username: context?.username},
  });

  useEffect(() => {
    // Handle user data when data was fetch
    if (data) {
      // - Set User
      const newUser = JSON.parse(JSON.stringify(data.findUser));
      context?.setUser(newUser);
    }
  }, [data]);
  return (
    <Stack.Navigator
      screenOptions={{headerTitleAlign: 'center', headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="EditCurrentWeight"
        component={EditCurrentWeightScreen}
      />
      <Stack.Screen name="RoutinePlanner" component={RoutinePlannerScreen} />
      <Stack.Screen
        name="InformationBMI"
        component={InformationBMIScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddFoodRecom"
        component={AddFoodRecomScreen}
        options={{headerShown: false}}
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
        name="DeleteFood"
        component={DeleteFoodScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SearchFood"
        component={SearchFoodScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HistoryFood"
        component={HistoryFoodScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="InformationFood"
        component={InformationFoodScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddFood"
        component={AddFoodScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Information"
        component={InformationScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const ExerciseStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerTitleAlign: 'center', headerShown: false}}>
      <Stack.Screen name="Exercise" component={ExerciseScreen} />
      <Stack.Screen name="SearchExercise" component={SearchExerciseScreen} />
      <Stack.Screen name="DeleteExercise" component={DeleteExerciseScreen} />
      <Stack.Screen
        name="CalculationExercise"
        component={CalculationExerciseScreen}
      />
      <Stack.Screen name="HistoryExercise" component={HistoryExerciseScreen} />
      <Stack.Screen name="AddExercise" component={AddExerciseScreen} />
      <Stack.Screen name="InformationExercise" component={InformationExerciseScreen} />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerTitleAlign: 'center', headerShown: false}}>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="EditFormGender" component={EditFormGenderScreen} />
      <Stack.Screen name="EditFormBirth" component={EditFormBirthScreen} />
      <Stack.Screen name="EditFormHeight" component={EditFormHeightScreen} />
      <Stack.Screen name="EditFormWeight" component={EditFormWeightScreen} />
      <Stack.Screen name="EditFormGoal" component={EditFormGoalScreen} />
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
        labelStyle: {textTransform: 'none', fontFamily: 'NotoSansThai-Regular'},
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
            if (routeName === 'EditCurrentWeight') {
              return {display: 'none'};
            }
            if (routeName === 'RoutinePlanner') {
              return {display: 'none'};
            }
            if (routeName === 'InformationBMI') {
              return {display: 'none'};
            }
            if (routeName === 'AddFood') {
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
            if (routeName === 'DeleteFood') {
              return {display: 'none'};
            }
            if (routeName === 'SearchFood') {
              return {display: 'none'};
            }
            if (routeName === 'HistoryFood') {
              return {display: 'none'};
            }
            if (routeName === 'InformationFood') {
              return {display: 'none'};
            }
            if (routeName === 'Information') {
              return {display: 'none'};
            }
            if (routeName === 'AddFoodRecom') {
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
            if (routeName === 'HistoryExercise') {
              return {display: 'none'};
            }
            if (routeName === 'AddExercise') {
              return {display: 'none'};
            }
            if (routeName === 'InformationExercise') {
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
