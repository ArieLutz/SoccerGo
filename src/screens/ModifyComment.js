import React, { useContext, useEffect, useState } from "react";
<<<<<<< HEAD
import { StyleSheet, View } from "react-native";
=======
import { StyleSheet, View, Text } from "react-native";
>>>>>>> saudyDev
import { Caption, IconButton, TextInput, Colors } from "react-native-paper";
import { format } from "date-fns";
import { Context as CommentContext } from "../providers/CommentContext";
import { Context as AuthContext } from "../providers/AuthContext";
import Alert from "../shared/Alert";

<<<<<<< HEAD
const ModifyNote = ({ navigation }) => {
  const { state: commentsState, updateComment } = useContext(CommentContext);
  const { state } = useContext(AuthContext);
  const [title, setTitle] = useState("");
=======


const ModifyComment = ({ navigation }) => {
  const { state: commentsState, updateComment } = useContext(CommentContext);
  const { state, clearErrorMessage } = useContext(AuthContext);
>>>>>>> saudyDev
  const [timestamp, setTimestamp] = useState(Date.now());
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [contentError, setContentError] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (commentsState.currentcomment.id) {
      setTitle(commentsState.currentcomment.Equipo1);
      setContent(commentsState.currentcomment.contenido);
    }

  }, [commentsState.currentcomment]);

  useEffect(() => {
    if (state.errorMessage) clearErrorMessage();
  }, []);

  useEffect(() => {
<<<<<<< HEAD
    if (commentsState.currentcomment.id) {
      setTitle(commentsState.currentcomment.Equipo1);
      setContent(commentsState.currentcomment.contenido);
    }
  }, [commentsState.currentcomment]);
=======
    if (state.errorMessage) setError(state.errorMessage);
  }, [state.errorMessage]);

  

  // Verifica que se ingrese un contenido al comentario
  const handleVerify = (input) => {
    if (input === "content") {
      if (!content) setContentError(true);
      else setContentError(false);
    }
    navigation.navigate("TodayScreem");
  };

>>>>>>> saudyDev

  const handleSaveComment = () => {
    updateComment(
      commentsState.currentcomment.id,
<<<<<<< HEAD
      title ? title : "New note",
=======
>>>>>>> saudyDev
      content,
      timestamp
    );
  };

  return (
    
    <View style={styles.container}>
<<<<<<< HEAD
      <View style={styles.iconBar}>
        <IconButton
          icon="close-circle-outline"
          color= {Colors.red500}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <IconButton
          icon="check-circle-outline"
          color={Colors.green500}
          onPress={handleSaveComment}
        />
=======
      
      <View style={styles.team}>
        <Text style={styles.labelTeam}>Equipo1</Text>
        <Text style={styles.labelTeam}> vs </Text>
        <Text style={styles.labelTeam}>Equipo2</Text>
>>>>>>> saudyDev
      </View>
      <View style={styles.icondelete}>
            <IconButton 
              icon = "delete-outline"
              color={Colors.red500}
            />
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
      <View >
        <View style={styles.iconBar}>
            <IconButton
              icon="close-circle-outline"
              color={Colors.blue500}
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
    height:'10%',
    
  },
  labelTeam:{
    fontSize: 22,
    fontWeight: "bold",
    color:'#fff',
    paddingTop: 10,
  },
  contentInput: {
    flex: 1,
    borderBottomWidth: 0,
    backgroundColor: "#656873",
    height:'90%',
  },
  iconBar: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  icondelete: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
  },

});

export default ModifyComment;
