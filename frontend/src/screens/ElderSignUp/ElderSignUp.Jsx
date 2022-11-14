import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { Text, View ,TouchableOpacity, TextInput ,Image } from 'react-native';
import styles from "../../../styles";



const ElderSignUp=({ navigation })=>{
  return (
       
   <View style={styles.container}>
       <Image style={styles.tinyLogo} source={require('./assets/logo.jpeg')} />
       <Text style={styles.text_title}>Elderly Companion</Text>
       <Text style={styles.text_subtitle}>Elder Sign up</Text>

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
             <TextInput style={styles.input2} /> 
             <TextInput style={styles.input2} />
          </View>
       <TouchableOpacity style={styles.sign_button}>
                   <Text style={styles.sign_text}>Sign up</Text>
       </TouchableOpacity>

       <StatusBar style="auto" />
  </View>
    
  );
}

export default ElderSignUp;