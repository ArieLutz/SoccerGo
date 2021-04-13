import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView, } from "react-native";
import { Caption, IconButton, TextInput, Colors } from "react-native-paper";
import { format } from "date-fns";
import { Context as CommentContext } from "../providers/CommentContext";
import { Context as AuthContext } from "../providers/AuthContext";
import Alert from "../shared/Alert";



const CreateComment = ({ navigation }) => {
  const { createComment } = useContext(CommentContext);
  const { state, clearErrorMessage } = useContext(AuthContext);
  const [timestamp, setTimestamp] = useState(Date.now());
  const [content, setContent] = useState("");
  const [contentError, setContentError] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (state.errorMessage) clearErrorMessage();
  }, []);

  useEffect(() => {
    if (state.errorMessage) setError(state.errorMessage);
  }, [state.errorMessage]);

  // Verifica que se ingrese un contenido al comentario
  const handleVerify = (input) => {
    if (input === "content") {
      if (!content) setContentError(true);
      else setContentError(false);
    }
    navigation.navigate("TabBarNavigation");
  };


  const handleSaveComment = () => {
    if (content) {
      createComment('prueba1', 'prueba2', timestamp, content, state.user.id);
      navigation.navigate("TabBarNavigation");
    } else{
      setContentError(true);
    } ;
  };

  return (
    
    <View style={styles.container}>
      
      <View style={styles.team}>
        <Text style={styles.labelTeam}>Equipo1</Text>
        <Text style={styles.labelTeam}> vs </Text>
        <Text style={styles.labelTeam}>Equipo2</Text>
      </View>

      <Caption>{`${format(timestamp, "eee H:m")}, | ${
        content.length
      } characters`}</Caption>
      {error ? <Alert title={error} type="error" /> : null}
      <TextInput
        multiline
        style={styles.contentInput}
        textAlignVertical="top"
        value={content}
        onChangeText={setContent}
        onBlur={() => {
          handleVerify('content');
        }}
        errorMessage={
          contentError
            ? "Por favor ingrese un comentario"
            : null
        }
      />
      <View style={styles.iconBar}>
          <IconButton
            icon="close-circle-outline"
            color={Colors.red500}
            onPress={() => {
              navigation.goBack();
            }}
          />
          <IconButton
            icon="check-circle-outline"
            color={Colors.green500}
            onPress={handleSaveComment}
          />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#656873",
  },
  team: {
    flexDirection: "row",
    backgroundColor: "#182126",
    justifyContent: 'center',
    width:'100%',
    height:'12%',
    paddingTop: 10,
    
  },
  labelTeam:{
    fontSize: 22,
    fontWeight: "bold",
    color:'#fff',
    paddingTop:'5%'
  },
  contentInput: {
    flex: 1,
    borderBottomWidth: 0,
    backgroundColor: "#656873",
    height:200,
  },
  iconBar: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

export default CreateComment;
