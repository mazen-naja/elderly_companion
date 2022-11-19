import React, { useState } from "react";
import { Text, View ,TouchableOpacity, TextInput ,Image } from 'react-native';
import styles from "../../../styles";
import Schedule_card from "../../../Components/Cards/Elder_schedule_card";
import { StatusBar } from "expo-status-bar";

<StatusBar style="auto" />
const ElderScheduleScreen=()=>{
    return (
   
    <View style={styles.container}>
      <Image style={styles.tinyLogo} source={require('../../../assets/scheduleicon.png')} />
      <Text style={styles.text_title}>Schedule</Text> 
       
      <View style={styles.flex_row_subtitle} >
        <Text style={styles.chat_subtitle}>Today's Schedule</Text> 
      <TouchableOpacity style={styles.subtitle_button}><Text >ADD</Text></TouchableOpacity>
      </View>


      <Schedule_card text={'Walk'} time={'12:09pm'} img_src={require('../../../assets/walk.png')} />
    </View>

    
  );

};

export default ElderScheduleScreen;