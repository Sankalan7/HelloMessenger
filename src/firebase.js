import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBjg74xbAsVzfAZfAk60HHtkz_0FuOt-c8",
    authDomain: "hello-ee565.firebaseapp.com",
    projectId: "hello-ee565",
    storageBucket: "hello-ee565.appspot.com",
    messagingSenderId: "313787163109",
    appId: "1:313787163109:web:b9a4d0144bb343b0b34f0c"
  }).auth();