/*const firebaseConfig = {
    apiKey: "AIzaSyAIB5UZzRqJm_nk6x_g3mhaR87X_OYBxaM",
    authDomain: "to-do-react-d8ae5.firebaseapp.com",
    databaseURL: "https://to-do-react-d8ae5.firebaseio.com",
    projectId: "to-do-react-d8ae5",
    storageBucket: "to-do-react-d8ae5.appspot.com",
    messagingSenderId: "266640134412",
    appId: "1:266640134412:web:684fe42ebf7ddbc6d07929",
    measurementId: "G-65ZKTGBKQV"
};
*/

import firebase from "firebase" ;
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAIB5UZzRqJm_nk6x_g3mhaR87X_OYBxaM",
     authDomain: "to-do-react-d8ae5.firebaseapp.com",
     databaseURL: "https://to-do-react-d8ae5.firebaseio.com",
     projectId: "to-do-react-d8ae5",
     storageBucket: "to-do-react-d8ae5.appspot.com",
     messagingSenderId: "266640134412",
     appId: "1:266640134412:web:684fe42ebf7ddbc6d07929",
     measurementId: "G-65ZKTGBKQV"
});

const db = firebaseApp.firestore();
export default db;