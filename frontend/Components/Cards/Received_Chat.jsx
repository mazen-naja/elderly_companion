import React, { useState } from "react";
import { Text, View ,Image } from 'react-native';
import styles from "../../styles";




const Received_card=(props)=>{
    return (

<View style={styles.flex_received}>

    <View style={styles.flex_row_sender}>
        <Text style={styles.received}>{props.received}</Text>
        <Text style={styles.received_time}>{props.received_time}</Text>
    </View>


    <Text style={styles.received_text}>{props.received_text}</Text>

</View>

);
};

export default Received_card;