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


//usar el contexto para verificar que esta trayendo el contenido del comentario
const CommentList = ({ navigation, comments }) => {
  const { state, setCurrentComment } = useContext(CommentContext);

  const handleSelectComment = (comment) => {
    setCurrentComment(comment);
    navigation.navigate("ModifyComment");
  };


  const emptyFlatList = (
    <View style={styles.emptycomments}>
      <Text>You don't have any note yet...</Text>
    </View>
  );

    //se manda a traer los datos a de la data 
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
                handleSelectComment(item);
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
