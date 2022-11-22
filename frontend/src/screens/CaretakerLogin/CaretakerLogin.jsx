import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect } from "react";
import { Text, View ,TouchableOpacity,Pressable, TextInput ,Image } from 'react-native';
import styles from "../../../styles";
import { caretakerlogin } from './caretakerslogin';
import { useUserStore } from '../../store/UserStore';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../../config/firebase";
import axios from "axios";




const baseUrl = 'http://192.168.1.6:8000/';


<StatusBar style="auto" />

const CaretakerLogin=({navigation})=>{


  

  const saveUserId = useUserStore((state) => state.setUser);
  const saveToken = useUserStore((state) => state.setToken);
  const saveType = useUserStore((state) => state.setUsertype);
  const user_id = useUserStore((state) => state.user_id);



  const [userinfo, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");




  const caretakerlogin= async data=>{
  
    try{      
        const response= await axios({
            method: 'post',
            url: baseUrl+'api/login',
            headers:{'Content-Type': 'application/json'},
            data,
            }).then(function (response) {
                
                //  setUser(response.data)
                 if (response.data.status === "success") {
                    saveUserId(response.data.user.id)
                    saveToken(response.data.authorisation.token);
                    signInWithEmailAndPassword(auth, email, password)
                    // saveProfile(response.data.user.image);
                    saveType(response.data.user.user_type);
                    navigation.navigate("CaretakerHomepage")
                }
                 
            }) 
    } 
    catch(error){
        return error.response.data;
    };  
};




  
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
    
     
       caretakerlogin(data) 

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
      <TextInput key={'passwordinput'} style={styles.input} value={password} secureTextEntry   onChangeText={setPassword}/>
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