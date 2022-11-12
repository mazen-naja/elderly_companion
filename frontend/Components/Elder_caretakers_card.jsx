import { Text, View ,Image } from 'react-native';
import styles from "../../styles";


const Elder_caretakers_card=(props)=>{
    return (


<TouchableOpacity flex style={styles.homecard}>
          <Image style={styles.cardicon} source={props.img_src} />
          <Text style={styles.card_text}>{props.caretaker_name}</Text>
</TouchableOpacity>


);
};

export default Schedule_card;