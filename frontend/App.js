import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { Text, View ,TouchableOpacity, TextInput ,Image } from 'react-native';
import RoleScreen from './src/screens/RoleScreen/RoleScreen';
import styles from './styles';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
   return (
     <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen 
           name="RoleScreen"
           component={RoleScreen}
          
         />
         <Stack.Screen 
           name="ElderSignin"
           component={ElderSignin}
         />

       </Stack.Navigator>
     </NavigationContainer>
   );
 }