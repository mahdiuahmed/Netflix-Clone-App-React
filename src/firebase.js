import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAuKJj4-ibzCLMaVrVTeP3znXqbqDWD8cM",
    authDomain: "netflix-clone-app-28f64.firebaseapp.com",
    projectId: "netflix-clone-app-28f64",
    storageBucket: "netflix-clone-app-28f64.appspot.com",
    messagingSenderId: "891510472612",
    appId: "1:891510472612:web:b14fbe9eac373f348c0b31",
    measurementId: "G-Q1ZS8S29SD"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;