import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyB6aH6thS5XE_7cTMLFzXkYFUuNk2gzhUo",
    authDomain: "botogram-7b029.firebaseapp.com",
    projectId: "botogram-7b029",
    storageBucket: "botogram-7b029.appspot.com",
    messagingSenderId: "672150419146",
    appId: "1:672150419146:web:5d285148740ccd3678a633",
  })
  .auth();
