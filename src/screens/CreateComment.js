import React, { useContext, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Caption, IconButton, TextInput, Colors } from "react-native-paper";
import { format } from "date-fns";
import { Context as CommentContext } from "../providers/CommentContext";
import { Context as AuthContext } from "../providers/AuthContext";


const CreateComment = ({ navigation }) => {
  const { createComment } = useContext(CommentContext);
  const { state } = useContext(AuthContext);
  const [timestamp, setTimestamp] = useState(Date.now());
  const [content, setContent] = useState("");

  const handleSaveNote = () => {
    if (!title) {
      setTitle("New note");
      createComment("New note", timestamp, content, state.user.id);
    } else createComment('prueba1', 'prueba2', timestamp, content, state.user.id);

    navigation.navigate("Home");
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
      <TextInput
        multiline
        style={styles.contentInput}
        textAlignVertical="top"
        value={content}
        onChangeText={setContent}
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
    height:'100%',
  },
  iconBar: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

export default CreateComment;
