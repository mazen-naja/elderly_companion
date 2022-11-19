import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { Text, View ,TouchableOpacity,Image } from 'react-native';
import styles from "../../../styles";
import Chat_card from '../../../Components/Cards/Chat_card';



<StatusBar style="auto" />

const ElderChatlist=({navigation})=>{

    return (
    <View style={styles.container}>
      <Image style={styles.tinyLogo} source={require('../../../assets/chat.png')} />
      <Text style={styles.text_title}>Chat</Text>

      <View style={styles.flex_row_subtitle} >
        <Text style={styles.chat_subtitle}>Chats' list</Text> 
      <TouchableOpacity style={styles.subtitle_button}><Text >Compose</Text></TouchableOpacity>
      </View>
      <Chat_card name={'Caretaker'} time={'12:00am'} message={'This is a test message'}img_src={require('../../../assets/caretaker.png')}/>
      <Chat_card name={'Caretaker'} time={'12:00am'} message={'This is a test message'}img_src={require('../../../assets/caretaker.png')}/>
      <Chat_card name={'Caretaker'} time={'12:00am'} message={'This is a test message'}img_src={require('../../../assets/caretaker.png')}/>
      <Chat_card name={'Caretaker'} time={'12:00am'} message={'This is a test message'}img_src={require('../../../assets/caretaker.png')}/>
      <Chat_card name={'Caretaker'} time={'12:00am'} message={'This is a test message'}img_src={require('../../../assets/caretaker.png')}/>
    </View> 
   
    );

};

export default ElderChatlist;