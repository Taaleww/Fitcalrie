import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import HomeScreen from '../screens/HomeScreen';
import FoodScreen from '../screens/FoodScreen';
import ExerciseScreen from '../screens/ExerciseScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator
            tabBarOptions={{
                showlabel: false,
                style: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    elevation:0,
                    backgroundColor: 'white',
                    borderRadius: 15,
                    height: 90,

                }
            }}
        >
            {/* <Tab.Screen 
            name="Home" 
            component={HomeScreen} 
            options= {{
                tabBarIcon: ({focused}) => (
                    <View style={{ alignItems : 'center' , justifyContent: 'center', top: 10}}>
                        <image 
                            source={require('../screens/home.png')}
                        />
                        <Text 
                         style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
                        </Text>
                    </View>
                ),
            }}/> */}
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Food" component={FoodScreen} />
            <Tab.Screen name="Exercise" component={ExerciseScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}


export default Tabs;
