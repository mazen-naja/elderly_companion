import React, { useState } from "react";
import { Text, View ,Image } from 'react-native';
import styles from "../../styles";



const Caretaker_Schedule_card=(props)=>{
    return (
        <View>
            <Text style={styles.card_title_sched}>{props.Elder_title}</Text> 
            <View style={styles.flex_column}>
                <View style={styles.flex_row3}>
                <Text style={styles.card_text}>{props.text}</Text>
                <Text style={styles.card_text_upper}>Edit</Text>
                </View>
                <View style={styles.flex_row4}>

                    <View style={styles.card_frame}>
                        <Image style={styles.cardlogo}  source={props.img_src} />
                    </View>
                    <Text style={styles.card_text_reg}>Will Start in {props.start}</Text>
                    <Text style={styles.card_label}>{props.time}</Text>
                </View>
            </View>
        </View> 
    );
};

export default Caretaker_Schedule_card;
