import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { Caption, Card, Paragraph } from "react-native-paper";
import { format } from "date-fns";



const { width, height } = Dimensions.get("screen");

const Comment = ({Equipo1, Equipo2, content, timestamp }) => {
var Titulo = (Equipo1+' vs '+Equipo2);
  return (
    <Card style={styles.container}>
      <Card.Title style={styles.titulo} title={Titulo} />
      <Card.Content style={styles.content}>
        <Paragraph>{content}</Paragraph>
      </Card.Content>
      <Card.Actions style={styles.actions}>
        <Caption style={styles.timestamp}>{`${format(
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
  titulo: {
    fontSize: 5,
  },
  actions: {
    justifyContent: "flex-end",
  },
  timestamp: {
    color: '#fff',
  },
});

export default Comment;
