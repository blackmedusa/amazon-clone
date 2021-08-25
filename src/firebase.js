import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBi2bN_2Xf58-c8ZO3YVLzVsauRpX_sXhE",
  authDomain: "clone-791d5.firebaseapp.com",
  projectId: "clone-791d5",
  storageBucket: "clone-791d5.appspot.com",
  messagingSenderId: "84778227771",
  appId: "1:84778227771:web:14cce18c378413e167641e",
  measurementId: "G-Y3S9F237HZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};