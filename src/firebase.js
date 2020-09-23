// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA_knUD9ZmJ7svlZN8koE2BG6o_WLur830",
  authDomain: "clone-a5469.firebaseapp.com",
  databaseURL: "https://clone-a5469.firebaseio.com",
  projectId: "clone-a5469",
  storageBucket: "clone-a5469.appspot.com",
  messagingSenderId: "1022877155444",
  appId: "1:1022877155444:web:c50458b82297325f115121",
  measurementId: "G-7ZLKH7L7KS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
