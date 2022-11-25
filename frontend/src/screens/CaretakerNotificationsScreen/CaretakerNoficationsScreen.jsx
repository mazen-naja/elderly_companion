import React, { useState,useEffect } from "react";
import { Text, View ,TouchableOpacity, TextInput ,Image, ActivityIndicator } from 'react-native';
import styles from "../../../styles";
import Schedule_card from "../../../Components/Cards/Elder_schedule_card";
import { StatusBar } from "expo-status-bar";
import { useUserStore } from "../../store/UserStore";
import axios from "axios";
import { LoadingIcon } from "../../../Components/Cards/LoadingIcon";
import registerNNPushToken from 'native-notify';
import Notifications_card from "../../../Components/Cards/Notifications_card";

<StatusBar style="auto" />


const baseUrl = 'http://192.168.1.6:8000/';

const CaretakerNotificationsScreen=({navigation})=>{


    const setEldernotifications=useUserStore((state) => state.setEldernotifications);
    const notificationslist = useUserStore((state) => state.notificationslist);
  
    const user_token = useUserStore((state) => state.token);
    const user_id = useUserStore((state) => state.user_id);
    const [isLoading, setIsLoading] = useState(true);
    const [notifications, setNotifications] = useState("");




    const caretaker_notifications= async data=>{ 
       
        try{      
            const response= await axios({
                method: 'post',
                url: baseUrl+'api/v0.1/caretaker-notifications',
                headers:{'Content-Type': 'application/json','Authorization': 'Bearer ' + user_token},
                data,
                }).then(function (response) {
                  if (response.data.status === "success") {
                    response.data
                    setNotifications(response.data.data)
                    setIsLoading(false);
                  }
                },200) 
        } 
        catch(error){
            return error.response.data;
        };  
    };




    const data = {
        caretaker_id: user_id
      };
  
    useEffect(() => {
        caretaker_notifications(data)
    }, []);



    if (isLoading) {
        return <LoadingIcon/>
      }
    
    
    
      else{
        
    
        return (


            <View style={styles.container}>
            <Image style={styles.tinyLogo} source={require('../../../assets/notificationsicon.png')} />
            <Text style={styles.text_title}>Notifications</Text> 
             
            <View style={styles.flex_row_subtitle} >
              <Text style={styles.notfication_subtitle}>Notifcations' History</Text> 
            </View>
            {notifications.map ( post=>                   
                 <Notifications_card text={post.name} start={post.time_created.toString().substring(10,16)} time={post.time_created.toString().substring(0,10)} img_src={require('../../../assets/medicines.jpeg')} />         
            )}
            
          </View>
      
          
        );
            }
      };
      
      export default CaretakerNotificationsScreen;





