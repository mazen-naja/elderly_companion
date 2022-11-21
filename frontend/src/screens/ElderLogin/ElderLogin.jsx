import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { Text, View ,Pressable,TouchableOpacity, TextInput ,Image } from 'react-native';
import styles from "../../../styles";
import { useUserStore } from '../../store/UserStore';
import axios from "axios";
import ElderHomepage from '../ElderHomepage/ElderHomepage';
import { auth } from "../../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";


const baseUrl = 'http://192.168.1.6:8000/';
<StatusBar style="auto" />


const ElderLogin=({navigation})=>{



  const saveUserId = useUserStore((state) => state.setUser);
  const saveToken = useUserStore((state) => state.setToken);
  const saveType = useUserStore((state) => state.setUsertype);
  const setlogin_status = useUserStore((state) => state.setLoginStatus);
  const login_status = useUserStore((state) => state.login_status);
  


  const [userinfo, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const elderlogin= async data=>{
  try{      
    const response= await axios({
        method: 'post',
        url: baseUrl+'api/login',
        headers:{'Content-Type': 'application/json'},
        data,
        }).then(function (response) {
            
             if (response.data.status === "success") {
                saveUserId(response.data.user.id)
                saveToken(response.data.authorisation.token);
                setlogin_status("success");
                // saveProfile(response.data.user.image);
                saveType(response.data.user.user_type);
                navigation.navigate("ElderHomepage")
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


    elderlogin(data) 

    if (login_status=="sucess") {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => console.log("Login success"))
    }

    // clear the text field
    setEmail('');
    setPassword('');
  };



  return (
    <View style={styles.container}>
      <Image style={styles.tinyLogo} source={require('../../../assets/logo.jpeg')} />
      <Text style={styles.text_title}>Elderly Companion</Text>
      <Text style={styles.text_subtitle}>Elder log in</Text>
      <Text style={styles.text_label}>Email</Text>
      <TextInput style={styles.input} value={email} onChangeText={onemailchange} />
      <Text style={styles.text_label}>Password</Text>
      <TextInput style={styles.input} value={password} secureTextEntry   onChangeText={setPassword}/>
      <TouchableOpacity style={styles.sign_button} onPress={signinHandler}>
                  <Text style={styles.sign_text}>Sign in</Text>
      </TouchableOpacity>
      <Pressable  onPress={() => {navigation.navigate("ElderSignUp")}}>
      <Text style={styles.text_body}>Don't have an account ? <Text style={styles.text_hyper}>Sign up</Text></Text>
      </Pressable>
      
    </View>
  );
};
export default ElderLogin;
