import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { Caption, Card, Paragraph, Colors } from "react-native-paper";
import { format } from "date-fns";

const { width, height } = Dimensions.get("screen");

const Comment = ({Equipo1, Equipo2, content, timestamp }) => {
var Titulo = (Equipo1+' vs '+Equipo2);
  return (
    <Card style={styles.container}>
<<<<<<< HEAD
      <Card.Title title={Titulo}/>
=======
      <Card.Title  title={Titulo} />
>>>>>>> saudyDev
      <Card.Content style={styles.content}>
        <Paragraph>{content}</Paragraph>
      </Card.Content>
      <Card.Actions style={styles.actions}>
<<<<<<< HEAD
        <Caption>{`${format(
=======
        <Caption >{`${format(
>>>>>>> saudyDev
          timestamp,
          "eee H:m"
        )}`}</Caption>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width * 0.9,
    height: height * 0.2,
    margin: 5,
  },
  content: {
    flex: 1,
  },
  actions: {
    justifyContent: "flex-end",
  },
});

export default Comment;
