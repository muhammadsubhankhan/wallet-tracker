import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/functions";


var firebaseConfig = {
 
    apiKey: "AIzaSyDiZOohoRDr8G7i1ylEP7ektdVI1GdaBC0",
    authDomain: "wallet-tracker-486a2.firebaseapp.com",
    databaseURL: "https://wallet-tracker-486a2.firebaseio.com",
    projectId: "wallet-tracker-486a2",
    storageBucket: "wallet-tracker-486a2.appspot.com",
    messagingSenderId: "873703519188",
    appId: "1:873703519188:web:d6619f982831fd12e89c41"
  };

  firebase.initializeApp(firebaseConfig);

export var auth = firebase.auth();
export var firestore = firebase.firestore(); 
export var googleProvider = new firebase.auth.GoogleAuthProvider();
//export var googleProvider = new firebase.auth.googleProvider();
export var serverTimeStamp = () => firebase.firestore.FieldValue.serverTimestamp();
export default firebase;
