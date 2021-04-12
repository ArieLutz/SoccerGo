import createDataContext from "./createDataContext";
import { firebase } from "../firebase";

// Acciones disponibles para el reducer
const commentReducer = (state, action) => {
  switch (action.type) {
    case "errorMessage":
      return { ...state, errorMessage: action.payload };
    case "createComment":
      return { ...state, comments: [...comments, action.payload] };
    case "getComments":
      return { ...state, comments: action.payload };
    case "setCurrentComment":
      return { ...state, currentcomment: action.payload };
    case "updateComment":
      return {
        ...state,
        comments: state.comments.map((comment) => {
          if (comment.id === action.payload.comment.id) {
            return {
              ...comment,
              Equipo1: action.payload.comment.Equipo1,
              contenido: action.payload.comment.contenido,
              timestamp: action.payload.comment.timestamp,
            };
          }

          return comment;
        }),
      };
    default:
      return state;
  }
};

// Referencia al nombre de la colección de comentarios
const commentsRef = firebase.firestore().collection("Comentarios");

// Almacena una nueva comentario para el usuario actual
const createComment = (dispatch) => (Equipo1, Equipo2, timestamp, contenido, author) => {
  const data = {
    Equipo1,
    Equipo2,
    contenido,
    timestamp,
    id: author,
  };

  commentsRef
    .add(data)
    .then((_doc) => {
      dispatch({ type: "errorMessage", payload: "comment added!" });
    })
    .catch((error) => {
      dispatch({ type: "errorMessage", payload: error.message });
    });
};

// Obtener las comentarios del usuario
const getComments = (dispatch) => (userId) => {
  commentsRef
    .where("id", "==", userId)
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
        dispatch({ type: "errorMessage", payload: "Your comment is save!" });
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

// Actualizar una comentario existente
const updateComment = (dispatch) => (id, title, content, timestamp) => {
  commentsRef
    .doc(id)
    .update({ title, content, timestamp })
    .then(() => {
      dispatch({
        type: "updateComment",
        payload: { comment: { id, title, content, timestamp } },
      });
      dispatch({ type: "errorMessage", payload: "comment updated!" });
    })
    .catch((error) => {
      dispatch({ type: "errorMessage", payload: error.message });
    });
};

// Exportar las funcionalidades requeridas al contexto
export const { Provider, Context } = createDataContext(
  commentReducer,
  {
    createComment,
    getComments,
    setCurrentComment,
    updateComment,
    clearMessage,
  },
  {
    comments: [],
    errorMessage: "",
    currentcomment: { id: "", Equipo1: "", Equipo2: "", contenido: "" },
  }
);
