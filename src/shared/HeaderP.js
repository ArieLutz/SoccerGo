import React from "react";
import {Dimensions, StyleSheet, View} from "react-native";
import {Header} from "react-native-elements";

const { width, height } = Dimensions.get("screen");


const HeaderP = () => {
    return (
        <View >
         <Header 
            placement="left"
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'SoccerGo', style: { color: '#fff',
                                                         fontSize: 25} }}
            rightComponent={{ icon: 'search', color: '#fff'}}
            containerStyle={{
              paddingTop: 30,
              backgroundColor: '#182126',
              justifyContent: 'space-around',
              
            }}
        />
        </View>

    );
};

const styles = StyleSheet.create({


  });


export default HeaderP;