import React from 'react';
import Tabs from './navigation/tabs';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './navigation/Auth';

const App = () => {
  return (
    <NavigationContainer>
      {/* <Tabs /> */}
      <AuthStack/>
    </NavigationContainer>
  );
}
export default App;
