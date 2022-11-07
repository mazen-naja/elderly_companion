import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { Text, View ,TouchableOpacity, TextInput ,Image } from 'react-native';
import RoleScreen from './src/screens/RoleScreen/RoleScreen.js';
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from 'react-navigation-stack';
import ElderLogin from './src/screens/ElderLogin/ElderLogin.js';
// import { createStackNavigator } from '@react-navigation/stack';



// const Stack = createNativeStackNavigator();

// export default function App() {
//    return (
//       <NavigationContainer>
//        <Stack.Navigator>
//          <Stack.Screen 
//            name="RoleScreen"
//            component={RoleScreen}
          
//          />
//          <Stack.Screen 
//            name="ElderLogin"
//            component={ElderLogin}
//          />

//        </Stack.Navigator>
//       </NavigationContainer>
//    );
//  }