import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { Text, View ,TouchableOpacity,Pressable, TextInput ,Image } from 'react-native';
import styles from "../../../styles";
import { caretakerlogin } from './caretakerslogin';

<StatusBar style="auto" />



const CaretakerLogin=({navigation})=>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signin, setSignin] = useState('');
  
    // Whenever the textinput value changes
    const onemailchange = (enteredemail) => {
      setEmail(enteredemail);
    };
  
    const onpasswordchange = (enteredpassword) => {
      setPassword(enteredpassword);
    };
  
  
  const signinHandler = () => {
    const data = {
      email: email,
      password: password,
    };
      
      caretakerlogin(data);
      // clear the text field
      setEmail('');
      setPassword('');
    };
  
  return (

      

    <View style={styles.container}>
      <Image style={styles.tinyLogo} source={require('../../../assets/logo.jpeg')} />
      <Text style={styles.text_title}>Elderly Companion</Text>
      <Text style={styles.text_subtitle}>Caretaker log in</Text>
      <Text style={styles.text_label}>Email</Text>
      <TextInput key={'emailinput'} style={styles.input} value={email} onChangeText={onemailchange}/>
      <Text style={styles.text_label} >Password</Text>
      <TextInput key={'passwordinput'} style={styles.input} value={password} onChangeText={setPassword}/>
      <TouchableOpacity style={styles.sign_button} onPress={signinHandler}>
                  <Text style={styles.sign_text}>Sign in</Text>
      </TouchableOpacity>
      <Pressable  onPress={() => {navigation.navigate("CaretakerSignUp")}}>
        <Text style={styles.text_body}>Don't have an account ? 
        <Text style={styles.text_hyper}>Sign up</Text></Text>
      </Pressable>
      
    </View>
  );
};

export default CaretakerLogin;