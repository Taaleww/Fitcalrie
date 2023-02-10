import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';
import Tabs from './tabs';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './Auth';
import { AuthContext } from '../context/AuthContext';

const AppNav = () => {

    const { isloading, userToken } = useContext(AuthContext);
    if (isloading) {
        return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size={'large'} />
        </View>
        );

    }

    return (

        <NavigationContainer>
            {userToken !== null ? <Tabs /> : <AuthStack />}
        </NavigationContainer>


    );
}
export default AppNav;
