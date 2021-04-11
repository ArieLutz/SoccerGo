import React, { useContext, useEffect, useState } from "react";
<<<<<<< HEAD
import { StyleSheet, View } from "react-native";
=======
import { StyleSheet, View, Text } from "react-native";
>>>>>>> devChristian
import { Caption, IconButton, TextInput, Colors } from "react-native-paper";
import { format } from "date-fns";
import { Context as CommentContext } from "../providers/CommentContext";
import { Context as AuthContext } from "../providers/AuthContext";
import Alert from "../shared/Alert";


<<<<<<< HEAD
const createComment= ({ navigation }) => {
  const { createComment } = useContext(CommentContext);
  const { state } = useContext(AuthContext);
  const [title, setTitle] = useState("");
=======
const CreateComment = ({ navigation }) => {
  const { createComment } = useContext(CommentContext);
  const { state, clearErrorMessage } = useContext(AuthContext);
>>>>>>> devChristian
  const [timestamp, setTimestamp] = useState(Date.now());
  const [content, setContent] = useState("");
  const [contentError, setContentError] = useState(false);
  const [error, setError] = useState("");

<<<<<<< HEAD

  const handleSaveNote = () => {
    if (!title) {
      setTitle("New note");
      createComment("New note", content, timestamp, state.id);
    } else createComment(title, content, timestamp, state.id);
=======
  useEffect(() => {
    if (state.errorMessage) clearErrorMessage();
  }, []);

  useEffect(() => {
    if (state.errorMessage) setError(state.errorMessage);
  }, [state.errorMessage]);
>>>>>>> devChristian

  // Verifica que se ingrese un contenido al comentario
  const handleVerify = (input) => {
    if (input === "content") {
      if (!content) setContentError(true);
      else setContentError(false);
    }
  };


  const handleSaveNote = () => {
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
          onPress={handleSaveNote}
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
    height:'10%',
    
  },
  labelTeam:{
    fontSize: 22,
    fontWeight: "bold",
    color:'#fff',
    paddingTop: '10px',
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
});

<<<<<<< HEAD
export default createComment;
=======
export default CreateComment;
>>>>>>> devChristian
