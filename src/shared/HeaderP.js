import React, { useContext} from "react";
import {StyleSheet, View} from "react-native";
import {Header} from "react-native-elements";
import { IconButton, Colors} from "react-native-paper";
import { Context as AuthContext } from "../providers/AuthContext";


const HeaderP = () => {
  const { signout } = useContext(AuthContext);
    return (
        <View >
         <Header 
            placement="left"
            leftComponent={<IconButton
                              icon="logout"
                              color={Colors.white}
                              onPress={() => {
                                signout();
                              }}
                            />}
            centerComponent={{ text: 'SoccerGo', style: { color: '#fff',
                                                         fontSize: 25, marginTop:5,fontWeight: "bold"} }}
            containerStyle={{
              backgroundColor: '#182126',
              justifyContent:'center'
              
            }}
        />
        </View>

    );
};

const styles = StyleSheet.create({


  });


export default HeaderP;