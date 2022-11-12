import React, { useState } from "react";
import { Text, View ,TouchableOpacity, TextInput ,Image } from 'react-native';
import styles from "./styles";
import Schedule_card from "./Components/Cards/Elder_schedule_card";
export default function ElderSchedule() {
  return (


    <View style={styles.container}>
     
      <Image style={styles.tinyLogo} source={require('./assets/scheduleicon.png')} />
      <Text style={styles.text_title}>Schedule</Text>
    
      <Schedule_card text={'Walk'} time={'12:09pm'} img_src={require('./assets/walk.png')} />
      
      
    </View>
  );

}