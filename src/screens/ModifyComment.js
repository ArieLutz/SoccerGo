import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Caption, IconButton, TextInput, Colors } from "react-native-paper";
import { format } from "date-fns";
import { Context as CommentContext } from "../providers/CommentContext";
import Alert from "../shared/Alert";


//Modificar el contenido de los comentarios.
const ModifyComment = ({ navigation }) => {
  const { state: commentsState, updateComment, deleteComment } = useContext(CommentContext);
  const [timestamp] = useState(Date.now());
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [contentError, setContentError] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (commentsState.currentcomment.id) {
      setContent(commentsState.currentcomment.contenido);
    }

  }, [commentsState.currentcomment]);

  // Verifica que se ingrese un contenido al comentario
  const handleVerify = (input) => {
    if (input === "content") {
      if (!content) setContentError(true);
      else setContentError(false);
    }
  };

  //Verifica que el comentario sea eliminado 
  const handleDeleteComment = () => {
    deleteComment(commentsState.currentcomment.id);
    navigation.navigate("TabBarNavigation");
  };

  //Verfica que guarde el comentario modificado.
  const handleSaveComment = () => {
    updateComment(
      commentsState.currentcomment.id,
      content,
      timestamp
    );
  };

  return (
    
    <View style={styles.container}>
      
      <View style={styles.team}>
        <Text style={styles.labelTeam}>{commentsState.currentcomment.Equipo1}</Text>
        <Text style={styles.labelVs}> vs </Text>
        <Text style={styles.labelTeam}>{commentsState.currentcomment.Equipo2}</Text>
      </View>
      <View style={styles.icondelete}>
            <IconButton 
              icon = "delete-outline"
              color={Colors.red500}
              onPress={handleDeleteComment}
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
    height:'12%',
    paddingTop: 10,
  },
  labelTeam:{
    fontSize: 22,
    fontWeight: "bold",
    color:'#fff',
    paddingTop:'5%'
  },
  labelVs:{
    fontSize: 22,
    fontWeight: "bold",
    color:'#2089DC',
    paddingTop:'5%'
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
