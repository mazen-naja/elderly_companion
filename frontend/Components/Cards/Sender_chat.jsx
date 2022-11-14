import React, { useState } from "react";
import { Text, View ,Image } from 'react-native';
import styles from "../../styles";




const Sender_card=(props)=>{
    return (

<View style={styles.flex_column}>
<Text style={styles.card_text}>{props.sender}</Text>
<Text style={styles.card_text}>{props.text}</Text>

</View>

);
};

export default Sender_card;