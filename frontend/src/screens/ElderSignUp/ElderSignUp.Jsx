import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { Text, View ,TouchableOpacity, TextInput ,Image,Pressable } from 'react-native';
import styles from "../../../styles";
import { useUserStore } from '../../store/UserStore';
import axios from "axios";
import ElderHomepage from '../ElderHomepage/ElderHomepage';
import { auth } from "../../../config/firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import moment from 'moment';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { LoadingIcon } from '../../../Components/Cards/LoadingIcon';
import SelectDropdown from 'react-native-select-dropdown'





const baseUrl = 'http://192.168.1.6:8000/';
<StatusBar style="auto" />



const ElderSignUp=({navigation})=>{
  
  
   const saveUserId = useUserStore((state) => state.setUser);
   const saveToken = useUserStore((state) => state.setToken);
   const saveType = useUserStore((state) => state.setUsertype);
   const uptype = useUserStore((state) => state.usertype);
   const setlogin_status = useUserStore((state) => state.setLoginStatus);
   const login_state = useUserStore((state) => state.login_state);
   const [selected, setSelected] =useState("");
   const [userinfo, setUser] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [gender, setGender] = useState("");
   const [age, setAge] = useState("");
   const [name, setName] = useState("");


   

    const gendertype = ["Male", "Female"]
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const user_id = useUserStore((state) => state.user_id);
    const setDroplist = useUserStore((state) => state.setDroplist);
    const droplist = useUserStore((state) => state.droplist);
  
    const [time, setTime] = useState("");
    const [type, setType] = useState(0);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
      
  const [chosenDate, setChosenDate] = useState("");
  //   const [date, setDate] = useState(new Date())
  
    const [isLoading, setIsLoading] = useState(true);


    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = (datetime) => {
      useEffect(() => {
      setDatePickerVisibility(false);
      setChosenDate(moment(datetime).format('YYYY-MM-DD HH:mm:ss'))
      
    }, []);
      console.log(chosenDate);
      
    };
  
  
  
    const handleConfirm = (date) => {
      console.warn("A date has been picked: ", date);
      setTime(moment(date).format('HH:mm DD-MM-YYYY'));
      setsendTime(moment(date).format('YYYY-MM-DD HH:mm'))
      console.log(date);
      // const todays= new Date();
      // age=todays.getFullYear()-Date(date).getFullYear()
      
      hideDatePicker();
    };

    
  const eldersignup= async data=>{
   
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
                    // console.log(login_state)
                    // saveProfile(response.data.user.image);
                    saveType(response.data.user.user_type)
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


        const onagechange = (enteredage) => {
         setAge(enteredage);
       };
     
       const ongenderchange = (enteredgender) => {
         setGender(enteredgender);
       };
      
       const onnamechange = (enteredname) => {
         setName(enteredname);
       };
  
       const ontimechange = (enteredtime) => {
        setChosenDate(enteredtime);
    //   console.log(date)
    };



      //  saveType(2)
      const signupHandler = () => {
        
        const data = {
          email: email,
          password: password,
          gender:gender,
          age:age,
          user_type:2,
          name:name
        };
    
   
        eldersignup(data) 
    
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
       
   <View style={styles.centercontainer}>
    {/* <Image style={styles.signuplogo} source={require("../../../assets/signicon.jpeg")} /> */}
       <Text style={styles.role_text_subtitle}>Sign up</Text>

       <Text style={styles.loglabel}>Full name</Text>
       <TextInput style={styles.input} placeholder={'Full name'} onChangeText={onnamechange} />
       <Text style={styles.loglabel}>Email</Text>
       <TextInput style={styles.input} placeholder={'Email'}  onChangeText={onemailchange} />
       <Text style={styles.loglabel}>Password</Text>
       <TextInput style={styles.input} placeholder={'Password'} onChangeText={onpasswordchange} />

       <View style={styles.flex_row}>
           <Text style={styles.text_label2}>Gender</Text>
          <Text style={styles.text_label3}>Age</Text>
       </View>

          <View style={styles.flex_row2}>
          <SelectDropdown
            //   key={keys}
              data={gendertype}
              buttonStyle={{backgroundColor:'white',borderRadius:10,borderWidth:1,borderColor:'#1A75BC',width:'40%',marginLeft:'10%',height:45}}
              buttonTextStyle={{fontSize:16}}
              onSelect={(selectedItem, index) => {
                  selectedItem, index
                
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                  
                  return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                 
                  setType(item)
                  return item
              }}
          />


<Pressable style={styles.input_addschedule} onPress={showDatePicker}>
        <View pointerEvents="none">
         <TextInput key={'timescheduled'}  value={time} placeholder="Date" style={styles.input_font}  onChangeText={ontimechange}/>
       </View>


        </Pressable>


      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={'datetime'}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        is24Hour={false}
      />



            {/* ? <TextInput style={styles.input2}onChangeText={ongenderchange} />  */}
             {/* <TextInput style={styles.input2} onChangeText={onagechange}/> */}
          </View>
       <TouchableOpacity style={styles.sign_button} onPress={signupHandler}>
                   <Text style={styles.sign_text}>Sign up</Text>
       </TouchableOpacity>

    
  </View>
    
  );
};

export default ElderSignUp;