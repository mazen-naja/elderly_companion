import React, { useState,useEffect } from "react";
import { Text, View ,TouchableOpacity, TextInput ,Image, ActivityIndicator } from 'react-native';
import styles from "../../../styles";
import Schedule_card from "../../../Components/Cards/Elder_schedule_card";
import { StatusBar } from "expo-status-bar";
import { useUserStore } from "../../store/UserStore";
import axios from "axios";

<StatusBar style="auto" />


const baseUrl = 'http://192.168.1.6:8000/';

const ElderScheduleScreen=()=>{
  
  const setElderSchedule=useUserStore((state) => state.setElderSchedule);
  const elder_schedule_list = useUserStore((state) => state.elder_schedule_list);

  const user_token = useUserStore((state) => state.token);
  const user_id = useUserStore((state) => state.user_id);
  const [isLoading, setIsLoading] = useState(true);


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
                   console.log(response.data)
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
  



  const data = {
      elder_id: user_id
    };

  useEffect(() => {
    elderschedule(data)
  }, []);

  if (isLoading) {
    return <ActivityIndicator size="large" color="#009FFF" />;
}
else

    return (
   
    <View style={styles.container}>
      <Image style={styles.tinyLogo} source={require('../../../assets/scheduleicon.png')} />
      <Text style={styles.text_title}>Schedule</Text> 
       
      <View style={styles.flex_row_subtitle} >
        <Text style={styles.chat_subtitle}>Today's Schedule</Text> 
      <TouchableOpacity style={styles.subtitle_button}><Text >ADD</Text></TouchableOpacity>
      </View>
      {elder_schedule_list.map ( post=>
                    (<Schedule_card text={post.name} time={post.time_created} img_src={require('../../../assets/medicines.jpeg')}/>
                    ))}

    </View>

    
  );

};

export default ElderScheduleScreen;