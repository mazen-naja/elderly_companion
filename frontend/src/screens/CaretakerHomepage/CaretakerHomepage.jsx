import React, { useState } from "react";
import { Text, View ,TouchableOpacity, TextInput ,Image } from 'react-native';
import styles from "../../../styles";
import { StatusBar } from "expo-status-bar";
import Homepage_card from "../../../Components/Cards/HomepageCard";



<StatusBar style="auto" />

const CaretakerHomepage=({navigation})=>{

  return (


    <View style={styles.home_container}>
      
    <Image style={styles.tinyLogo} source={require('../../../assets/caretaker.png')} />
    <Text style={styles.text_title}>Welcome Caretaker !</Text>
    
        <View style={styles.flex_homerow2}>
            {/* <Homepage_card card_text={'Schedule'} img_src={require('../../../assets/scheduleicon.png')}   /> */}
        
          <TouchableOpacity  style={styles.homecard} onPress={() =>  navigation.navigate("CaretakerScheduleScreen")}>
                <View >
                    <Image style={styles.cardicon} source={require('../../../assets/scheduleicon.png')} />
                </View>
                <Text style={styles.card_hometext}>Schedule</Text>
         </TouchableOpacity>


            {/* <Homepage_card card_text={'Caretakers'} img_src={require('../../../assets/caretakers.png')}  /> */}
            <TouchableOpacity  style={styles.homecard} onPress={() =>  navigation.navigate("Caretakers_Elders")}>
                <View >
                    <Image style={styles.cardicon} source={require('../../../assets/caretakers.png')} />
                </View>
                <Text style={styles.card_hometext}>Caretakers</Text>
            </TouchableOpacity>
        </View >

        <View style={styles.flex_homerow2}>
          {/* <Homepage_card card_text={'Chat'} img_src={require('../../../assets/chat.png')} /> */}

          <TouchableOpacity  style={styles.homecard} onPress={() =>  navigation.navigate("ChatList")}>
                <View >
                    <Image style={styles.cardicon} source={require('../../../assets/chat.png')} />
                </View>
                <Text style={styles.card_hometext}>Chat</Text>
            </TouchableOpacity>

          {/* <Homepage_card card_text={'Edit profile'} img_src={require('../../../assets/editprofile.jpg')} /> */}
          <TouchableOpacity  style={styles.homecard} onPress={() =>  navigation.navigate("Caretakers_Elders")}>
                <View >
                    <Image style={styles.cardicon} source={require('../../../assets/editprofile.jpg')} />
                </View>
                <Text style={styles.card_hometext}>Edit profile</Text>
            </TouchableOpacity>
        </View>


        <View style={styles.flex_homerow2}>
          {/* <Homepage_card card_text={'Notifications'} img_src={require('../../../assets/notificationsicon.png')}/> */}
          <TouchableOpacity  style={styles.homecard} onPress={() =>  navigation.navigate("CaretakerNotificationsScreen")}>
                <View >
                    <Image style={styles.cardicon} source={require('../../../assets/notificationsicon.png')} />
                </View>
                <Text style={styles.card_hometext}>Notifications</Text>
            </TouchableOpacity>
        </View>



          
          
       
  </View>
  );

};

export default CaretakerHomepage;