import React, { useState } from "react";
import { Text, View ,Image } from 'react-native';
import styles from "../../styles";



const Schedule_card=(props)=>{
    return (
                
            <View style={styles.flex_column}>
               
                <View style={styles.flex_row3}>
                <Text style={styles.card_text}>{props.text}</Text>
                <Text style={styles.card_text_upper}>Edit</Text>
                </View>
                <View style={styles.flex_row4}>
                    <Image style={[styles.cardlogo,{marginLeft:10}]}  source={props.img_src} />
                    <Text style={[styles.card_text_reg,{marginLeft:5}]}>Will Start in {props.start}</Text>
                    <Text style={styles.card_label}>{props.time}</Text>
                </View>
                
            </View>
    );
};

export default Schedule_card;
