import React, { useState } from "react";
import { Text, View ,TouchableOpacity, TextInput ,Image } from 'react-native';
import styles from "../../styles";

const Schedule_card=(props)=>{
    return (
            <View style={styles.container2}>
                <Image style={styles.tinyLogo}  source={props.img_src} />
                <Text style={styles.card_text}>{props.text}</Text>
                <Text style={styles.card_text}>{props.text}</Text>
            </View>
    );
};

export default Schedule_card;
