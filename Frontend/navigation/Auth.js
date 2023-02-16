import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import FormGenderScreen from '../screens/FormGender';
import FormWeighScreen from '../screens/FormWeight';
import FormHeightScreen from '../screens/FormHeight';
import FormFrqExerciseScreen from '../screens/FormFrqExercise';
import FormGoalScreen from '../screens/FormGoal';

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
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FormGender"
        component={FormGenderScreen}
        options={{ title: 'เพศ'}}
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
        options={{ title: 'คุณออกกำลังกายบ่อยครั้งแค่ไหน ?' }}
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