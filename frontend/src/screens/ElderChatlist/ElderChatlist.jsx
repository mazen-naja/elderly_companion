import { StatusBar } from 'expo-status-bar';
// import React, { useState,useEffect } from "react";
// import { Text, View ,TouchableOpacity,Image } from 'react-native';
// import styles from "../../../styles";
// import Chat_card from '../../../Components/Cards/Chat_card';

// import { firebase } from '../../../firebaseconfig';
// import { getDatabase, ref, set } from "firebase/database";
// import { database } from '../../../firebaseconfig';
import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useCallback
} from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import {
  collection,
  addDoc,
  orderBy,
  query,
  onSnapshot
} from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { auth, database } from '../../../config/firebase';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';


<StatusBar style="auto" />

const ElderChatlist=({navigation}) =>{
 



  const [messages, setMessages] = useState([]);

  useLayoutEffect(() => {

      const collectionRef = collection(database, 'chats');
      const q = query(collectionRef, orderBy('createdAt', 'desc'));

  const unsubscribe = onSnapshot(q, querySnapshot => {
      console.log('querySnapshot unsusbscribe');
        setMessages(
          querySnapshot.docs.map(doc => ({
            _id: doc.data()._id,
            createdAt: doc.data().createdAt.toDate(),
            text: doc.data().text,
            user: doc.data().user
          }))
        );
      });
  return unsubscribe;
    }, []);

  const onSend = useCallback(async (messages = []) => {
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, messages)
      );
      // setMessages([...messages, ...messages]);
      const { _id, createdAt, text, user } = messages[0];  

     await addDoc(collection(database, 'chats'), {
        _id,
        createdAt,
        text,
        user
      });
    }, []);

    return (
      <GiftedChat
        messages={messages}
        renderAvatar={() => null}
        showAvatarForEveryMessage={true}
        showUserAvatar={false}
        onSend={messages => onSend(messages)}
        messagesContainerStyle={{
          backgroundColor: '#fff'
        }}
        textInputStyle={{
          backgroundColor: '#fff',
          borderRadius: 20,
        }}
        user={{
          _id: auth?.currentUser?.email,
          avatar: 'https://i.pravatar.cc/300'
        }}
      />
    );

























  //   const   writeUserData=(userId, name, email, imageUrl)=> {
  //       const db = database;
  //       set(ref(db, 'users/' + userId), {
  //         username: name,
  //         email: email,
  //         profile_picture : imageUrl
  //       });
  //   };


  //   useEffect(() => {
  //     writeUserData(1,"test1","test1@gmail.com","lol");
  // }, []);

     
      
    

    // return (

       
    // <View style={styles.container}>
    //   <Image style={styles.tinyLogo} source={require('../../../assets/chat.png')} />
    //   <Text style={styles.text_title}>Chat</Text>

    //   <View style={styles.flex_row_subtitle} >
    //     <Text style={styles.chat_subtitle}>Chats' list</Text> 
    //   <TouchableOpacity style={styles.subtitle_button}><Text >Compose</Text></TouchableOpacity>
    //   </View>
    //   <Chat_card name={'Caretaker'} time={'12:00am'} message={'This is a test message'}img_src={require('../../../assets/caretaker.png')}/>
    //   <Chat_card name={'Caretaker'} time={'12:00am'} message={'This is a test message'}img_src={require('../../../assets/caretaker.png')}/>
    //   <Chat_card name={'Caretaker'} time={'12:00am'} message={'This is a test message'}img_src={require('../../../assets/caretaker.png')}/>
    //   <Chat_card name={'Caretaker'} time={'12:00am'} message={'This is a test message'}img_src={require('../../../assets/caretaker.png')}/>
    //   <Chat_card name={'Caretaker'} time={'12:00am'} message={'This is a test message'}img_src={require('../../../assets/caretaker.png')}/>
    // </View> 
   
    // );

};

export default ElderChatlist;