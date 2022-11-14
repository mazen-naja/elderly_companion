import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { Text, View ,Button ,TouchableOpacity, TextInput ,Image } from 'react-native';
import styles from "../../../styles";


const RoleScreen=()=>{


  return (
    <View style={styles.container}>
      <Image style={styles.tinyLogo} source={require('../../../assets/logo.jpeg')} />
      <Text style={styles.text_title}>Elderly Companion</Text>
      <Text style={styles.text_subtitle}>Choose role</Text>
      <TouchableOpacity onPress={() => navigation.navigate("ElderLogin")} style={styles.button}>
                  <Text style={styles.role_text}>Elder</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ElderLogin")}>
                  <Text style={styles.role_text}>Caretaker</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

export default RoleScreen;