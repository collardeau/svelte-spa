import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDLKhv_OZ1m_ILJYYlVf-_lU1mkEPSbMlo",
  authDomain: "svelte-spa-demo.firebaseapp.com",
  databaseURL: "https://svelte-spa-demo.firebaseio.com",
  projectId: "svelte-spa-demo",
  storageBucket: "svelte-spa-demo.appspot.com",
  messagingSenderId: "469664906339",
  appId: "1:469664906339:web:3899242eda91abb5c6cc56",
  measurementId: "G-VV6ZB1LNRB"
};

firebase.initializeApp(config);

export const db = firebase.firestore();
export const firebaseAuth = firebase.auth();

/*
  steps:
  1. create a new firebase project at https://firebase.google.com/
  2. replace config above with your own
  3. create a firestore
  4 customize security rule to allow only reads for now:
  rules_version = '2';
  service cloud.firestore {
    match /databases/{database}/documents {
      match /{document=**} {
        allow read: if true;
      }
    }
  }
  5. allow anonymous login in console
  - to work with the demo:
  create a collection `my-data` of docs with a `message` key
  --- or possibly in cloud function???
  */
