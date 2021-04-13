import createDataContext from "./createDataContext";
import { firebase } from "../firebase";

// Acciones disponibles para el reducer
const commentsReducer = (state, action) => {
  switch (action.type) {
    case "errorMessage":
      return { ...state, errorMessage: action.payload };
    case "getComments":
      return { ...state, comments: action.payload };
    case "setCurrentComment":
      return { ...state, currentcomment: action.payload };
    default:
      return state;
  }
};

// Referencia al nombre de la colección de comentarios
const commentsRef = firebase.firestore().collection("Comentarios");

// Obtener los comentarios del usuario
const getComments = (dispatch) => () => {
  commentsRef
    .orderBy("timestamp", "desc")
    .onSnapshot(
      (querySnapshot) => {
        const comments = [];
        querySnapshot.forEach((doc) => {
          const comment = doc.data();
          comment.id = doc.id;
          comments.push(comment);
        });

        dispatch({ type: "getComments", payload: comments });
      },
      (error) => {
        dispatch({ type: "errorMessage", payload: error.message });
      }
    );
};

// Limpiar el mensaje del contexto
const clearMessage = (dispatch) => () => {
  dispatch({ type: "errorMessage", payload: "" });
};

// Establece la comentario actual seleccionada
const setCurrentComment = (dispatch) => (comment) => {
  dispatch({ type: "setCurrentComment", payload: comment });
};

// Exportar las funcionalidades requeridas al contexto
export const { Provider, Context } = createDataContext(
  commentsReducer,
  {
    getComments,
    setCurrentComment,
    clearMessage,
  },
  {
    comments: [],
    errorMessage: "",
    currentcomment: { id: "", Equipo1: "", Equipo2: "", contenido: "" },
  }
);
