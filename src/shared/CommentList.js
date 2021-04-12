import React, { useContext } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Context as CommentContext } from "../providers/CommentContext";
import Comment from "./Comment";

const CommentList = ({ navigation, comments }) => {
  const { state, setCurrentNote } = useContext(CommentContext);

  const handleSelectNote = (comment) => {
    setCurrentNote(comment);
    navigation.navigate("ModifyComment");
  };

  const emptyFlatList = (
    <View style={styles.emptycomments}>
      <Text>You don't have any note yet...</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={comments}
        emptyFlatList={emptyFlatList}
        numColumns={1}
        renderItem={({ item }) => (
          <>
            <TouchableOpacity
              onPress={() => {
                handleSelectNote(item);
              }}
            >
              <Comment
                key={item.id}
                Equipo1={item.Equipo1}
                Equipo2={item.Equipo2}
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
  emptycomments: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
  },
});

export default CommentList;
