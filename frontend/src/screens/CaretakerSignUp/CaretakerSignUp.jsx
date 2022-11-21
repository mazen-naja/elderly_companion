// import { StatusBar } from 'expo-status-bar';
// import React, { useState } from "react";
// import { Text, View ,TouchableOpacity, TextInput ,Image } from 'react-native';
// import styles from "../../../styles";
// import DropDownPicker from "react-native-dropdown-picker";
// import { useUserStore } from '../../store/UserStore';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth } from "../../../config/firebase";
import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { Text, View ,TouchableOpacity, TextInput ,Image } from 'react-native';
import styles from "../../../styles";
import { useUserStore } from '../../store/UserStore';
import axios from "axios";
import ElderHomepage from '../ElderHomepage/ElderHomepage';
import { auth } from "../../../config/firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';

const baseUrl = 'http://192.168.1.6:8000/';
<StatusBar style="auto" />

const CaretakerSignUp=({navigation})=>{


  const saveUserId = useUserStore((state) => state.setUser);
  const saveToken = useUserStore((state) => state.setToken);
  const saveType = useUserStore((state) => state.setUsertype);
  const uptype = useUserStore((state) => state.usertype);
  const setlogin_status = useUserStore((state) => state.setLoginStatus);
  const login_state = useUserStore((state) => state.login_state);
  


  const [userinfo, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [name, setName] = useState("");


  const caretakersignup= async data=>{
     try{      
       const response= await axios({
           method: 'post',
           url: baseUrl+'api/register',
           headers:{'Content-Type': 'application/json'},
           data,
           }).then(function (response) {
              //  console.log(response.data)
                if (response.data.status === "success") {
                   saveUserId(response.data.user.id)
                   saveToken(response.data.authorisation.token);
                   setlogin_status("success")
                   console.log(login_state)
                   // saveProfile(response.data.user.image);
                   saveType(response.data.user.user_type)
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


        const onagechange = (enteredage) => {
         setAge(enteredage);
       };
     
       const ongenderchange = (enteredgender) => {
         setGender(enteredgender);
       };
      
       const onnamechange = (enteredname) => {
         setName(enteredname);
       };


      //  saveType(2)
      const signupHandler = () => {
        const data = {
          email: email,
          password: password,
          gender:gender,
          age:age,
          user_type:1,
          name:name
        };
    
    
        caretakersignup(data) 
    
      //   if (login_state=="sucess") {
      //     signUpWithEmailAndPassword(auth, email, password)
      //       .then(() => console.log("Sign up sucess"))
      //   }
      createUserWithEmailAndPassword(auth, email,password)

    
        // clear the text field
        setName('');
        setEmail('');
        setPassword('');
        setAge('');
        setGender('');
      };
















   return (

    <>
    <StatusBar style="auto" />  
   <View style={styles.container}>
       <Image style={styles.tinyLogo} source={require('../../../assets/logo.jpeg')} />
       <Text style={styles.text_title}>Elderly Companion</Text>
       <Text style={styles.text_subtitle}>Caretaker Sign up</Text>
       <Text style={styles.text_label}>Full name</Text>
       <TextInput style={styles.input} onChangeText={onnamechange} />
       <Text style={styles.text_label}>Email</Text>
       <TextInput style={styles.input} onChangeText={onemailchange}/>
       <Text style={styles.text_label}>Password</Text>
       <TextInput style={styles.input} onChangeText={onpasswordchange} />
       <View style={styles.flex_row}>
           <Text style={styles.text_label2}>Gender</Text>
          <Text style={styles.text_label2}>Age</Text>
       </View>
      <View style={styles.flex_row2}>
             <TextInput style={styles.input2} onChangeText={ongenderchange} keyboardType='ascii-capable' /> 
             <TextInput style={styles.input2}  onChangeText={onagechange} keyboardType='numeric' />
      </View>
      <TouchableOpacity style={styles.sign_button} onPress={signupHandler}>
                   <Text style={styles.sign_text}>Sign up</Text>
       </TouchableOpacity>



    
  </View>
  </> 

    
  );
};
export default CaretakerSignUp;