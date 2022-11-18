import React, { useState } from "react";
import { Text, View ,TouchableOpacity, TextInput ,Image } from 'react-native';
import styles from "../../../styles";
import Schedule_card from "../../../Components/Cards/Elder_schedule_card";
import { StatusBar } from "expo-status-bar";
import Caretaker_Schedule_card from "../../../Components/Cards/Caretaker_Elders_Schedule";


<StatusBar style="auto" />
const CaretakerScheduleScreen=({navigation})=>{
    return (
   
    <View style={styles.container}>
      
      <Image style={styles.tinyLogo} source={require('../../../assets/scheduleicon.png')} />
      <Text style={styles.text_title}>Schedule</Text>

         
      <Caretaker_Schedule_card elder_title={"Elder1"} text={'Walk'} time={'12:09pm'} img_src={require('../../../assets/walk.png')} />
    </View>

    
  );

};

export default CaretakerScheduleScreen;