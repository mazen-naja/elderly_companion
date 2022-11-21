import { Text, View ,Image,TouchableOpacity } from 'react-native';
import styles from "../../styles";


const Elder_caretakers_card=(props)=>{
    return (


<TouchableOpacity flex style={styles.homecard}>
          <Image style={styles.cardicon} source={props.img_src} />
          <Text style={styles.card_text_elder}>{props.caretaker_name}</Text>
</TouchableOpacity>


);
};

export default Elder_caretakers_card;