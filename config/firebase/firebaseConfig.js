
import { initializeApp } from "firebase/app";

import firebase from "firebase/app";
import 'firebase/firebase-firestore'
import 'firebase/firebase-auth'
const firebaseConfig = {

    apiKey: "AIzaSyDLWoa0zUJxYZNUqPcWdPGV3ir1s_W4Ym8",
  
    authDomain: "myduo-1a88c.firebaseapp.com",
  
    projectId: "myduo-1a88c",
  
    storageBucket: "myduo-1a88c.appspot.com",
  
    messagingSenderId: "902268329274",
  
    appId: "1:902268329274:web:e0ce02df4d96c236e54403"
}

const Firebase =firebase.initializeApp(firebaseConfig)

  export default Firebase