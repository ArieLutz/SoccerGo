import React, { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Caption, IconButton, TextInput, Colors } from "react-native-paper";
import { format } from "date-fns";
import { Context as NoteContext } from "../providers/CommentContext";
import { Context as AuthContext } from "../providers/AuthContext";


const CreateNote = ({ navigation }) => {
  const { createNote } = useContext(NoteContext);
  const { state } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [timestamp, setTimestamp] = useState(Date.now());
  const [content, setContent] = useState("");

  const handleSaveNote = () => {
    if (!title) {
      setTitle("New note");
      createNote("New note", content, timestamp, state.user.id);
    } else createNote(title, content, timestamp, state.user.id);

    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
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
    backgroundColor: "#fff",
  },
  titleInput: {
    fontSize: 22,
    fontWeight: "bold",
    backgroundColor: "#656873",
  },
  contentInput: {
    flex: 1,
    borderBottomWidth: 0,
    backgroundColor: "#656873",
  },
  iconBar: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

export default CreateNote;
