import React, { useState } from "react";
import { Text, View ,TouchableOpacity, TextInput ,Image } from 'react-native';
import styles from "../../styles";

const Homepage_card=(props)=>{
    return (

        <TouchableOpacity  style={styles.homecard}>
                <View >
                    <Image style={styles.cardicon} source={props.img_src} />
                </View>
                <Text style={styles.card_hometext}>{props.card_text}</Text>
        </TouchableOpacity>

    );
};

export default Homepage_card;

