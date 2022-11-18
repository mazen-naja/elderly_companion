import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { Text, View ,TouchableOpacity, TextInput ,Image } from 'react-native';
import styles from "../../../styles";
import DropDownPicker from "react-native-dropdown-picker";






const CaretakerSignUp=({navigation})=>{

   return (

    <>
    <StatusBar style="auto" />  
   <View style={styles.container}>
       <Image style={styles.tinyLogo} source={require('../../../assets/logo.jpeg')} />
       <Text style={styles.text_title}>Elderly Companion</Text>
       <Text style={styles.text_subtitle}>Caretaker Sign up</Text>
       <Text style={styles.text_label}>Full name</Text>
       <TextInput style={styles.input} />
       <Text style={styles.text_label}>Email</Text>
       <TextInput style={styles.input} />
       <Text style={styles.text_label}>Password</Text>
       <TextInput style={styles.input} />
       <View style={styles.flex_row}>
           <Text style={styles.text_label2}>Gender</Text>
          <Text style={styles.text_label2}>Age</Text>
       </View>
      <View style={styles.flex_row2}>
             <TextInput style={styles.input2} keyboardType='ascii-capable' /> 
             <TextInput style={styles.input2} keyboardType='numeric' />
      </View>
      <TouchableOpacity style={styles.sign_button}>
                   <Text style={styles.sign_text}>Sign up</Text>
       </TouchableOpacity>



    
  </View>
  </> 

    
  );
};
export default CaretakerSignUp;