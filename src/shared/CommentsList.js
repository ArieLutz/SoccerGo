import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Comment from "./Comment";

const CommentsList = ({ comments }) => {

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
              <Comment
                key={item.id}
                Equipo1={item.Equipo1}
                Equipo2={item.Equipo2}
                content={item.contenido}
                timestamp={item.timestamp}
              />
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

export default CommentsList;
