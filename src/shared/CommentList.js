import React, { useContext } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Context as CommentContext } from "../providers/CommentContext";
import Note from "./Note";

const CommentList = ({ navigation, notes }) => {
  const { state, setCurrentNote } = useContext(CommentContext);

  const handleSelectNote = (note) => {
    setCurrentNote(note);
    navigation.navigate("ModifyNote");
  };

  const emptyFlatList = (
    <View style={styles.emptyNotes}>
      <Text>You don't have any note yet...</Text>
    </View>
  );
  console.log("CommentList");

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        emptyFlatList={emptyFlatList}
        numColumns={2}
        renderItem={({ item }) => (
          <>
            <TouchableOpacity
              onPress={() => {
                handleSelectNote(item);
              }}
            >
              <Note
                key={"hola"}
                content={item.contenido}
                timestamp={item.timestamp}
              />
            </TouchableOpacity>
          </>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyNotes: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
  },
});

export default CommentList;
