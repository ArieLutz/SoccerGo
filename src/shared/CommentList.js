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
                key={item.id}
                title={item.title}
                content={item.contenido}
                timestamp={item.timestamp}
                Equipo1={item.Equipo1}
                Equipo1={item.Equipo2}

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
