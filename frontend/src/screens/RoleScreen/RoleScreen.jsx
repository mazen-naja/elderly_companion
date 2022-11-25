import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { Text, View ,Button ,TouchableOpacity,ImageBackground ,Image } from 'react-native';
import styles from "../../../styles";

<StatusBar style="auto" />
const RoleScreen=({navigation})=>{

  
  return (
    <View style={styles.begincontainer}>
      
      <Image style={styles.role_logo} source={require('../../../assets/logo.jpeg')} />
      <Text style={styles.text_title}>Elderly Companion</Text>
      <Text style={styles.role_text_subtitle}>Who are you?</Text>
      <TouchableOpacity onPress={() => navigation.navigate("ElderLogin")} style={styles.role_button}>
                  <ImageBackground style={styles.background_image} source={require('../../../assets/oldmanicon.jpeg')}>
                        
                  </ImageBackground>
                  <View style={styles.role_text_box}>
                            <Text style={styles.role_text}>Elder</Text>
                  </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.role_button} onPress={() =>  navigation.navigate("CaretakerLogin")}>
      
                  <ImageBackground style={styles.background_image} source={require('../../../assets/caretakerlogo.png')}>
                        
                  </ImageBackground>
                        <View style={styles.role_text_box}>
                                  <Text style={styles.role_text}>Caretaker</Text>
                        </View>
      </TouchableOpacity>
      
    </View>
  );
};

export default RoleScreen;