import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
    return(
        <Tab.Navigator >
            <Tab.Screen name="หน้าหลัก" component={HomeScreen} options={{headerShown: false}}  />
            <Tab.Screen name="อาหาร" component={FoodScreen} options={{headerShown: false}} />
            <Tab.Screen name="ออกกำลังกาย" component={ExerciseScreen} options={{headerShown: false}}/>
            <Tab.Screen name="โปรไฟล์" component={ProfileScreen} options={{headerShown: false}}/>
        </Tab.Navigator>
    );
}


export default Tabs;
