import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { Text, View ,Pressable,TouchableOpacity, TextInput ,Image } from 'react-native';
import styles from "../../../styles";


<StatusBar style="auto" />
const ElderLogin=({navigation})=>{

  return (
    <View style={styles.container}>
      <Image style={styles.tinyLogo} source={require('../../../assets/logo.jpeg')} />
      <Text style={styles.text_title}>Elderly Companion</Text>
      <Text style={styles.text_subtitle}>Elder log in</Text>
      <Text style={styles.text_label}>Email</Text>
      <TextInput style={styles.input} />
      <Text style={styles.text_label}>Password</Text>
      <TextInput style={styles.input} />
      <TouchableOpacity style={styles.sign_button}>
                  <Text style={styles.sign_text}>Sign in</Text>
      </TouchableOpacity>
      <Pressable  onPress={() => {navigation.navigate("ElderSignUp")}}>
      <Text style={styles.text_body}>Don't have an account ? <Text style={styles.text_hyper}>Sign up</Text></Text>
      </Pressable>
      
    </View>
  );
};
export default ElderLogin;
