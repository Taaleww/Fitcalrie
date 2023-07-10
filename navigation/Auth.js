import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnboardingScreen from '../screens/Login/OnboardingScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import RegisterScreen from '../screens/Register/RegisterScreen';
import RegisterModule from '../screens/Register/RegisterModule';
import FormGenderScreen from '../screens/Register/FormGender';
import FormBirthScreen from '../screens/Register/FormBirth';
import FormWeighScreen from '../screens/Register/FormWeight';
import FormHeightScreen from '../screens/Register/FormHeight';
import FormFrqExerciseScreen from '../screens/Register/FormFrqExercise';
import FormGoalScreen from '../screens/Register/FormGoal';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterModule}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FormGender"
        component={FormGenderScreen}
        options={{ title: 'เพศ'}}
      />
      <Stack.Screen
        name="FormฺBirth"
        component={FormBirthScreen}
        options={{ title: 'วันเกิด'}}
      />
      <Stack.Screen
        name="FormWeight"
        component={FormWeighScreen}
        options={{ title: 'น้ำหนัก' }}
      />
      <Stack.Screen
        name="FormHeight"
        component={FormHeightScreen}
        options={{ title: 'ส่วนสูง', }}
      />
      <Stack.Screen
        name="FormFrqExercise"
        component={FormFrqExerciseScreen}
        options={{ title: 'คุณออกกำลังกายบ่อยครั้งแค่ไหน' }}
      />
      <Stack.Screen
        name="FormGoal"
        component={FormGoalScreen}
        options={{ title: 'เป้าหมายการลดน้ำหนักของคุณ' }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;