import React, { useState,useEffect } from "react";
import { Text, View ,TouchableOpacity, TextInput ,Image, ActivityIndicator } from 'react-native';
import styles from "../../../styles";
import Schedule_card from "../../../Components/Cards/Elder_schedule_card";
import { StatusBar } from "expo-status-bar";
import { useUserStore } from "../../store/UserStore";
import axios from "axios";
import { LoadingIcon } from "../../../Components/Cards/LoadingIcon";
import registerNNPushToken from 'native-notify';


<StatusBar style="auto" />


const baseUrl = 'http://192.168.1.6:8000/';

const ElderScheduleScreen=()=>{
  registerNNPushToken(4929, 'oUMoAxXaGp5JtxmEshw8Ud'); 
  const setElderSchedule=useUserStore((state) => state.setElderSchedule);
  const elder_schedule_list = useUserStore((state) => state.elder_schedule_list);

  const user_token = useUserStore((state) => state.token);
  const user_id = useUserStore((state) => state.user_id);
  const [isLoading, setIsLoading] = useState(true);
  const [time2, setTime2] = useState("");
 
    
  const elderschedule= async data=>{ 
       
      try{      
          const response= await axios({
              method: 'post',
              url: baseUrl+'api/v0.1/elder-schedule',
              headers:{'Content-Type': 'application/json','Authorization': 'Bearer ' + user_token},
              data,
              }).then(function (response) {
                if (response.data.status === "success") {
                // response.data
                  response.data
                  setElderSchedule(response.data.data)
                  // console.log(elder_schedule_list)
                  setIsLoading(false);
                }
              },200) 
      } 
      catch(error){
          return error.response.data;
      };  
  };
  
  const getTodaysDate=()=>{
    const today=new Date();
    const yyyy=today.getFullYear();
    const dd=today.getDate();
    const mm=today.getMonth();
    const hh=today.getHours();
    const min=today.getMinutes();
    return String(hh).padStart(2, '0')+String(min).padStart(2, '0')

  }

  const getequaldates=(received)=>{

  if(received==getTodaysDate()){
   console.log("True")
  }
  return received
}

  
  const data = {
      elder_id: user_id
    };

  useEffect(() => {
    elderschedule(data)
  }, []);


  const timenotify=()=>{

    for(let i = 0; i < elder_schedule_list.length; i++) {
      console.log("Schedule: "+elder_schedule_list[i].time_created.toString().substring(11, 16).split(':').join().replace(",",''));
      console.log("This is todays date: "+getTodaysDate())
     if(elder_schedule_list[i].time_created.toString().substring(11, 16).split(':').join().replace(",",'')==getTodaysDate()){
     console.log(elder_schedule_list[i].name)
     

     if(elder_schedule_list[i].item_type_id=="4"){
     
     axios.post(`https://app.nativenotify.com/api/notification`, {
          appId: 4929,
          appToken: "oUMoAxXaGp5JtxmEshw8Ud",
          title: "Elderly Companion:",
          body: "It's time to walk",
         
    })

  }
  
  else if(elder_schedule_list[i].item_type_id=="3"){
   axios.post(`https://app.nativenotify.com/api/notification`, {
    appId: 4929,
    appToken: "oUMoAxXaGp5JtxmEshw8Ud",
    title: "Elderly Companion",
    body: "It's time to take your medicine : "+elder_schedule_list[i].name,

})



  }

  else if(elder_schedule_list[i].item_type_id=="5"){
    axios.post(`https://app.nativenotify.com/api/notification`, {
     appId: 4929,
     appToken: "oUMoAxXaGp5JtxmEshw8Ud",
     title: "Elderly Companion",
     body: "Time to go to bed"
 })
 
   }
// console.log( parseInt( elder_schedule_list[i].time_created.toString().substring(10,16).split(":").join().replace(",",""))-100)
  
  }}
}


  if (isLoading) {
    return <LoadingIcon/>
  }



  else{
    timenotify()

    return (
   
    <View style={styles.container}>
      <Image style={styles.tinyLogo} source={require('../../../assets/scheduleicon.png')} />
      <Text style={styles.text_title}>Schedule</Text> 
       
      <View style={styles.flex_row_subtitle} >
        <Text style={styles.chat_subtitle}>Today's Schedule</Text> 
      <TouchableOpacity style={styles.subtitle_button}><Text >ADD</Text></TouchableOpacity>
      </View>
      {elder_schedule_list.map ( post=>                   
            <>     
           <Schedule_card text={post.name} start={post.time_created.toString().substring(10,16).split(":").join().replace(",","")} time={post.time_created.toString().substring(10,16)} img_src={require('../../../assets/medicines.jpeg')} />
           </>
                    
      )}
      
    </View>

    
  );
      }
};

export default ElderScheduleScreen;