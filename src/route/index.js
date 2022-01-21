import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ChooseMount, KelolaTim, SignUp, Splash} from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName='KelolaTim'>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChooseMount"
        component={ChooseMount}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="KelolaTim"
        component={KelolaTim}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
