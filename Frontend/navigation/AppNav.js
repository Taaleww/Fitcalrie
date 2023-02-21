import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';
import Tabs from './tabs';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './Auth';
import { AuthContext } from '../context/AuthContext';

const AppNav = () => {

    const { isloading, userToken, checkExpired } = useContext(AuthContext);
    if (isloading) {
        return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size={'large'} />
        </View>
        );

    }

    return (
        <NavigationContainer>
            {userToken !== null && !checkExpired() ? <Tabs /> : <AuthStack />}
        </NavigationContainer>
    );
}
export default AppNav;
