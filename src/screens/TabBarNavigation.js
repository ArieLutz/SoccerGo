import React from "react";
import { View, StyleSheet } from "react-native";



import TabsHomeScreem from "./TabsHomeScreem";
import HeaderP from "../shared/HeaderP";



const TabBarNavigation = ({navigation}) => {

    return (
        <View style={styles.container}>
            <HeaderP />
            <TabsHomeScreem navigation={navigation} />
        </View>
    )
}

export default TabBarNavigation;


const styles = StyleSheet.create({
    container: {
        flex: 1,

    }
});