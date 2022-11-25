import React, { useState,useEffect } from "react";
import { Text, View ,TouchableOpacity, TextInput ,Image, ActivityIndicator,FlatList } from 'react-native';
import styles from "../../../styles";
import { StatusBar } from "expo-status-bar";
import { useUserStore } from "../../store/UserStore";
import axios from "axios";
import { LoadingIcon } from "../../../Components/Cards/LoadingIcon";
import Medicines_card from "../../../Components/Medicines_card";


<StatusBar style="auto" />

const baseUrl = 'http://192.168.1.6:8000/';

const MedicinesScreen=({navigation})=>{

    const setElderSchedule=useUserStore((state) => state.setElderSchedule);
    const elder_schedule_list = useUserStore((state) => state.elder_schedule_list);
  
    const user_token = useUserStore((state) => state.token);
    const user_id = useUserStore((state) => state.user_id);
    const [isLoading, setIsLoading] = useState(true);
    const [medicines, setMedicines] = useState("");

    const medicineschedule= async data=>{ 
       
        try{      
            const response= await axios({
                method: 'post',
                url: baseUrl+'api/v0.1/medicines',
                headers:{'Content-Type': 'application/json','Authorization': 'Bearer ' + user_token},
                data,
                }).then(function (response) {
                  if (response.data.status === "success") {
                  // response.data
                    response.data
                    setMedicines(response.data.data)
                    // console.log(elder_schedule_list)
                    setIsLoading(false);
                  }
                },200) 
        } 
        catch(error){
            return error.response.data;
        };  
    };





const data = {
    elder_id: user_id
  };

useEffect(() => {
  medicineschedule(data)
}, []);



if (isLoading) {
    return <LoadingIcon/>
  }


  else{


    return (
   
        <View style={styles.container}>
          <Image style={styles.tinyLogo} source={require('../../../assets/medicines.jpeg')} />
          <Text style={styles.text_title}>Medicines</Text> 
           
          <View style={styles.flex_row_subtitle} >
            <Text style={styles.chat_subtitle}>Medicines' list</Text> 
          <TouchableOpacity style={styles.subtitle_button} onPress={() =>  navigation.navigate("AddmedicineScreen")}><Text style={styles.buttontext} >Add</Text></TouchableOpacity>
          </View >

          
          <FlatList style={styles.flex_row_scroll}  data={medicines}  numColumns={1}   renderItem={({ item}) => ( <Medicines_card text={item.name} times_needed={item.times_needed}  />)} />
          {/* <View style={styles.scheduleview} > */}
       
         {/* </View> */}
        </View>
    
        
      );
        }
    };
    
    export default MedicinesScreen;