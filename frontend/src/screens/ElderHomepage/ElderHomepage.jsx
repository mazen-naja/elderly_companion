import React, { useState } from "react";
import { Text, View ,TouchableOpacity, TextInput ,Image } from 'react-native';
import styles from "../../../styles";
import { StatusBar } from 'expo-status-bar';
import Homepage_card from "../../../Components/Cards/HomepageCard";

<StatusBar style="auto" />

const ElderHomepage=({navigation})=>{

  return (
    <View style={styles.home_container}>
      
      <Image style={styles.tinyLogo} source={require('../../../assets/oldmanicon.jpeg')} />
      <Text style={styles.text_title}>Welcome Elder !</Text>
      
          <View style={styles.flex_homerow2}>

              {/* <Homepage_card card_text={'Schedule'} img_src={require('../../../assets/scheduleicon.png')}  /> */}
              <TouchableOpacity  style={styles.homecard} onPress={() =>  navigation.navigate("ElderScheduleScreen")}>
                <View >
                    <Image style={styles.cardicon} source={require('../../../assets/scheduleicon.png')}/>
                </View>
                <Text style={styles.card_hometext}>Schedule</Text>
            </TouchableOpacity>


            
              {/* <Homepage_card card_text={'Medicines'} img_src={require('../../../assets/medicines.jpeg')} /> */}
              <TouchableOpacity  style={styles.homecard} onPress={() =>  navigation.navigate("Medicines")}>
                <View >
                    <Image style={styles.cardicon} source={require('../../../assets/medicines.jpeg')}/>
                </View>
                <Text style={styles.card_hometext}>Medicines</Text>
            </TouchableOpacity>


          </View >

          <View style={styles.flex_homerow2}>

            {/* <Homepage_card card_text={'Caretakers'} img_src={require('../../../assets/caretakers.png')} /> */}

            <TouchableOpacity  style={styles.homecard} onPress={() =>  navigation.navigate("EldersCaretakers")}>
                <View >
                    <Image style={styles.cardicon} source={require('../../../assets/caretakers.png')}/>
                </View>
                <Text style={styles.card_hometext}>Caretakers</Text>
            </TouchableOpacity>


            {/* <Homepage_card card_text={'Chat'} img_src={require('../../../assets/chat.png')}/> */}
            <TouchableOpacity  style={styles.homecard} onPress={() =>  navigation.navigate("ElderChatlist")}>
                <View >
                    <Image style={styles.cardicon} source={require('../../../assets/chat.png')}/>
                </View>
                <Text style={styles.card_hometext}>Chat</Text>
            </TouchableOpacity>

          </View>

          <View style={styles.flex_homerow2}>
            <Homepage_card card_text={'Edit profile'} img_src={require('../../../assets/editprofile.jpg')} />
            <Homepage_card card_text={'Notifications'} img_src={require('../../../assets/notificationsicon.png')} />
          </View>
    </View>
  );

};

export default ElderHomepage;