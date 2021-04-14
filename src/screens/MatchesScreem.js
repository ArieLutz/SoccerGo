import React from "react";
import { View, StyleSheet} from 'react-native';


import MatchesResults from "../shared/MatchesResults";


//Pantalla de los juegos del dia.
const MatchesScreem = ({navigation}) => {
    return (
        <View style={styles.container}>
            
            <MatchesResults navigation={navigation}/>
            <MatchesResults navigation={navigation}/>
            <MatchesResults navigation={navigation}/>
   
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
