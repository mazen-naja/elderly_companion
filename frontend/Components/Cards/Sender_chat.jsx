import React, { useState } from "react";
import { Text, View ,Image } from 'react-native';
import styles from "../../styles";




const Sender_card=(props)=>{
    return (

<View style={styles.flex_sender}>

    <View style={styles.flex_row_sender}>
        <Text style={styles.sender}>{props.sender}</Text>
        <Text style={styles.sent_time}>{props.sent_time}</Text>
    </View>


    <Text style={styles.sender_text}>{props.text}</Text>

</View>

);
};

export default Sender_card;