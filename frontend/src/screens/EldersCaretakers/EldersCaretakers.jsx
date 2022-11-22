import React, { useState,useEffect } from "react";
import { Text, View ,TouchableOpacity,FlatList, TextInput ,Image,ScrollView,ActivityIndicator} from 'react-native';
import styles from "../../../styles";
import { StatusBar } from "expo-status-bar";
import Homepage_card from "../../../Components/Cards/HomepageCard";
import Elder_caretakers_card from "../../../Components/Cards/Elder_caretakers_card";
import { useUserStore } from '../../store/UserStore';
import axios from "axios";
import { LoadingIcon } from "../../../Components/Cards/LoadingIcon";

<StatusBar style="auto" />

const baseUrl = 'http://192.168.1.6:8000/';


const EldersCaretakers=({navigation})=>{

    const setelderslist=useUserStore((state) => state.setEldersList);
    const elders_list = useUserStore((state) => state.elders_list);
    const user_token = useUserStore((state) => state.token);
    const user_id = useUserStore((state) => state.user_id);
    const [isLoading, setIsLoading] = useState(true);


    const elderscaretakers= async data=>{
  
        try{      
            const response= await axios({
                method: 'post',
                url: baseUrl+'api/v0.1/elder-caretakers',
                headers:{'Content-Type': 'application/json','Authorization': 'Bearer ' + user_token},
                data,
                }).then(function (response) {
                    response.data.data
                    setelderslist(response.data.data)
                    console.log(elders_list)
                    setIsLoading(false);
                    
                }) 
        } 
        catch(error){
            return error.response.data;
        };  
    };
    



    const data = {
        elder_id:user_id
      };

    useEffect(() => {
        elderscaretakers(data)
    }, []);

    if (isLoading) {
        return <LoadingIcon/>
    }

    else

  return (

    <View style={styles.home_container}>
      
        <Image style={styles.tinyLogo} source={require('../../../assets/caretakers.png')} />
        <Text style={styles.text_title}>Caretakers</Text>

        <View style={styles.flex_row_subtitle} >
            <Text style={styles.chat_subtitle}>Caretakers' list</Text> 
            <TouchableOpacity style={styles.subtitle_button}>
                <Text >ADD</Text>
            </TouchableOpacity>
            
        </View> 

    
        <FlatList style={styles.flex_row_scroll}  data={elders_list}  numColumns={2}   renderItem={({ item}) => (<Elder_caretakers_card caretaker_name={item.name} img_src={require('../../../assets/caretaker.png')}/>)} />


    </View>
        
  );
};

export default EldersCaretakers;



