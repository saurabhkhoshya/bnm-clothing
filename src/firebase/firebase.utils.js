import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA4INuSTJ1sn3qvwVd0PiLDbfwZNzCnjXo",
    authDomain: "bnm-clothing-db.firebaseapp.com",
    databaseURL: "https://bnm-clothing-db.firebaseio.com",
    projectId: "bnm-clothing-db",
    storageBucket: "bnm-clothing-db.appspot.com",
    messagingSenderId: "137814901285",
    appId: "1:137814901285:web:f7507d480e109756db35cc",
    measurementId: "G-RNL9CWK7D6"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;