import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect } from "react";
import { Text, View ,TouchableOpacity,Pressable, TextInput ,Image } from 'react-native';
import styles from "../../../styles";
import { useUserStore } from '../../store/UserStore';
import axios from "axios";




const baseUrl = 'http://192.168.1.6:8000/';


<StatusBar style="auto" />

const AddmedicineScreen=({navigation})=>{
  
  const user_id = useUserStore((state) => state.user_id);
  const [medicine, setName] = useState("");
  const [time, setTime] = useState(0);


  const addmedicine= async data=>{
  
    try{      
        const response= await axios({
            method: 'post',
            url: baseUrl+'api/v0.1/elder-createmedicine',
            headers:{'Content-Type': 'application/json'},
            data,
            }).then(function (response) {
                    response.data
                    console.log("Added")
            }) 
    } 
    catch(error){
        return error.response.data;
    };  
};




  
    // Whenever the textinput value changes
    const onenamechange = (enteredname) => {
      setName(enteredname);
    };
  
    const ontimechange = (enteredtime) => {
      setTime(enteredtime);
    };
  
  
  const addmedicinehandler = () => {
    const data = {
      name: medicine,
      times_needed: time,
      elder_id: user_id,
      item_type_id:3,
    };
    
     addmedicine(data) 

      // clear the text field
      setName('');
      setTime('');
    };

  
  return (

      

    <View style={styles.Medicinecontainer}>
      <Text style={styles.role_text_subtitle}>Add Medicine</Text>


      <View  style={styles.flex_row_items}>
        <Text style={styles.medicinelabel}>Medicine Name</Text>
        <Text style={styles.medicinetimelabel} >Times needed</Text>
        
      </View>
      <View  style={styles.flex_row_items}>
      <TextInput key={'medicinename'} style={styles.input_medicinename} value={medicine} onChangeText={onenamechange}/>
        <TextInput key={'timesneeded'} style={styles.input_times_needed} value={time}   onChangeText={ontimechange}/>
      </View>
      <TouchableOpacity style={styles.sign_button} onPress={addmedicinehandler}>
                  <Text style={styles.sign_text}>Add</Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default AddmedicineScreen;