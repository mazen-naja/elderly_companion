import React from "react";
import { View, ActivityIndicator} from "react-native";
import styles from "../../styles";



export const LoadingIcon = () => {
    return (
        <View style={styles.centerloading}>
            <ActivityIndicator size="large" color="#009FFF" />
        </View>
    );
};
