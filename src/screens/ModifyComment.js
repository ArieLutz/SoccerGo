import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Caption, IconButton, TextInput, Colors } from "react-native-paper";
import { format } from "date-fns";
import { Context as CommentContext } from "../providers/CommentContext";
import { Context as AuthContext } from "../providers/AuthContext";

const ModifyNote = ({ navigation }) => {
  const { state: commentsState, updateComment } = useContext(CommentContext);
  const { state } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [timestamp, setTimestamp] = useState(Date.now());
  const [content, setContent] = useState("");

  useEffect(() => {
    if (commentsState.currentcomment.id) {
      setTitle(commentsState.currentcomment.Equipo1);
      setContent(commentsState.currentcomment.contenido);
    }
  }, [commentsState.currentcomment]);

  const handleSaveComment = () => {
    updateComment(
      commentsState.currentcomment.id,
      title ? title : "New note",
      content,
      timestamp
    );
  };

  return (
    <View style={styles.container}>
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
      </View>
      <TextInput
        mode="flat"
        placeholder="Title"
        style={styles.titleInput}
        value={title}
        onChangeText={setTitle}
      />
      <Caption>{`${format(timestamp, "eee H:m")}, | ${
        content.length
      } characters`}</Caption>
      <TextInput
        multiline
        style={styles.contentInput}
        textAlignVertical="top"
        value={content}
        onChangeText={setContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  titleInput: {
    fontSize: 22,
    fontWeight: "bold",
  },
  contentInput: {
    flex: 1,
    borderBottomWidth: 0,
  },
  iconBar: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

export default ModifyNote;
