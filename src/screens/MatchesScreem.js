import React from "react";
import { View, StyleSheet} from 'react-native';


import MatchesResults from "../shared/MatchesResults";


//Pantalla de los juegos del dia.
const MatchesScreem = () => {
    return (
        <View style={styles.container}>
            
            <MatchesResults/>
            <MatchesResults/>
            <MatchesResults/>
   
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#373A40",
    }
});

export default MatchesScreem;
