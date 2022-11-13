import React, { useState } from "react";
import { Text, View ,TouchableOpacity, TextInput ,Image } from 'react-native';
import styles from "./styles";

const ElderHomepage=()=>{

  return (

    <View style={styles.container}>
     
      <Image style={styles.tinyLogo} source={require('./assets/oldmanicon.jpeg')} />
      <Text style={styles.text_title}>Welcome Elder !</Text>
      <View style={styles.container2}>
          <TouchableOpacity flex style={styles.homecard}>
                            <Image style={styles.cardicon} source={require('./assets/scheduleicon.png')} />
                            <Text style={styles.card_text}>Schedule</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.homecard}>
          <Image style={styles.cardicon} source={require('./assets/medicines.jpeg')} />
                            <Text style={styles.card_text}>Medicines</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.homecard}>
          <Image style={styles.cardicon} source={require('./assets/caretakers.png')} />
                            <Text style={styles.card_text}>Caretakers</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.homecard}>
          <Image style={styles.cardicon} source={require('./assets/chat.png')} />
                            <Text style={styles.card_text}>Chat</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.homecard}>
          <Image style={styles.cardicon} source={require('./assets/editprofile.jpg')} />
                            <Text style={styles.card_text}>Edit profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.homecard}>
          <Image style={styles.cardicon} source={require('./assets/notificationsicon.png')} />
                            <Text style={styles.card_text}>Notifications</Text>
          </TouchableOpacity>
      
      </View>
    </View>
  );

};

export default ElderHomepage;