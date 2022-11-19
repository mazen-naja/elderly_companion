import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ElderLogin from "./src/screens/ElderLogin/ElderLogin";
import RoleScreen from "./src/screens/RoleScreen/RoleScreen";
import CaretakerLogin from "./src/screens/CaretakerLogin/CaretakerLogin";
import CaretakerSignUp from "./src/screens/CaretakerSignUp/CaretakerSignUp";
import ElderSignUp from "./src/screens/ElderSignUp/ElderSignUp";
import ChatList from "./src/screens/ChatList/ChatList";
import CaretakerHomepage from "./src/screens/CaretakerHomepage/CaretakerHomepage";
import CaretakerScheduleScreen from "./src/screens/CaretakerScheduleScreen/CaretakerScheduleScreen";
import Caretakers_Elders from "./src/screens/Caretakers_Elders/Caretakers_Elders";
import ElderHomepage from "./src/screens/ElderHomepage/ElderHomepage";
import ElderScheduleScreen from "./src/screens/ElderScheduleScreen/ElderScheduleScreen";
import EldersCaretakers from "./src/screens/EldersCaretakers/EldersCaretakers"; 
import ElderChatlist from "./src/screens/ElderChatlist/ElderChatlist";


const Stack = createStackNavigator();

export default function App() {
  return (

      <NavigationContainer>

        <Stack.Navigator>

          <Stack.Screen name="RoleScreen" component={RoleScreen} options={{headerShown: false}}/>

          <Stack.Screen name="ElderLogin" component={ElderLogin} options={{headerTransparent: true,headerTitle: ""}}/>
          <Stack.Screen name="ElderSignUp" component={ElderSignUp}options={{headerTransparent: true,headerTitle: ""}}/>
          <Stack.Screen name="ElderHomepage" component={ElderHomepage}options={{headerTransparent: true,headerTitle: ""}}/>
          <Stack.Screen name="ElderScheduleScreen" component={ElderScheduleScreen}options={{headerTransparent: true,headerTitle: ""}}/>
          <Stack.Screen name="EldersCaretakers" component={EldersCaretakers}options={{headerTransparent: true,headerTitle: ""}}/>
          <Stack.Screen name="ElderChatlist" component={ElderChatlist} options={{headerTransparent: true,headerTitle: ""}}/>


          <Stack.Screen name="CaretakerLogin" component={CaretakerLogin} options={{headerTransparent: true,headerTitle: ""}}/>
          <Stack.Screen name="CaretakerSignUp" component={CaretakerSignUp} options={{headerTransparent: true,headerTitle: ""}}/>
          <Stack.Screen name="CaretakerHomepage" component={CaretakerHomepage} options={{headerTransparent: true,headerTitle: ""}}/>
          <Stack.Screen name="CaretakerScheduleScreen" component={CaretakerScheduleScreen} options={{headerTransparent: true,headerTitle: ""}}/>
          <Stack.Screen name="Caretakers_Elders" component={Caretakers_Elders} options={{headerTransparent: true,headerTitle: ""}}/>
          <Stack.Screen name="ChatList" component={ChatList} options={{headerTransparent: true,headerTitle: ""}}/>


        </Stack.Navigator>
        
      </NavigationContainer>
  );
};