import React, { useState } from "react";
import { Text, View ,Image,TouchableOpacity } from 'react-native';
import styles from "../../styles";



const Chat_card=(props)=>{
    return (
            <TouchableOpacity style={styles.flex_column_chat}>     
                <View style={styles.flex_row3}>
                <Text style={styles.card_text}>{props.name}</Text>
                <Text style={styles.card_text_upper}>{props.time}</Text>
                </View>
                <View style={styles.flex_row4}>
                    <View style={styles.card_frame}>
                        <Image style={styles.chathead}  source={props.img_src} />
                    </View>
                    <Text style={styles.card_text_reg}>{props.message}</Text>
                </View>
            </TouchableOpacity>
    );
};

export default Chat_card;