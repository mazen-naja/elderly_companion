import ElderScheduleScreen from "./src/screens/ElderScheduleScreen/ElderScheduleScreen";
import React, { useState } from "react";
import { Text, View ,TouchableOpacity, TextInput ,Image } from 'react-native';
import styles from "./styles";
import ElderHomepage from "./src/screens/ElderHomepage/ElderHomepage";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ElderLogin from "./src/screens/ElderLogin/ElderLogin";
import RoleScreen from "./src/screens/RoleScreen/RoleScreen";
import CaretakerLogin from "./src/screens/CaretakerLogin/CaretakerLogin";
import CaretakerSignUp from "./src/screens/CaretakerSignUp/CaretakerSignUp";
import ElderSignUp from "./src/screens/ElderSignUp/ElderSignUp";


const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="RoleScreen" component={RoleScreen} options={{headerShown: false}}/>
          <Stack.Screen name="ElderLogin" component={ElderLogin} options={{headerTransparent: true,headerTitle: ""}}/>
          <Stack.Screen name="ElderSignUp" component={ElderSignUp}options={{headerTransparent: true,headerTitle: ""}}/>
          <Stack.Screen name="CaretakerLogin" component={CaretakerLogin} options={{headerTransparent: true,headerTitle: ""}}/>
          <Stack.Screen name="CaretakerSignUp" component={CaretakerSignUp} options={{headerTransparent: true,headerTitle: ""}}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
};