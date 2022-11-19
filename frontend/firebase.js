import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAK2dynxpD0jD86BRZcaHzXGq92ukV0TZo",
  authDomain: "elderlycompanionfirebase.firebaseapp.com",
  databaseURL: "https://elderlycompanionfirebase-default-rtdb.firebaseio.com",
  projectId: "elderlycompanionfirebase",
  storageBucket: "elderlycompanionfirebase.appspot.com",
  messagingSenderId: "718003371401",
  appId: "1:718003371401:web:f6cffbd17fdcf8bc557558",
  measurementId: "G-3PX4V2NQQG"
};

// Initialize Firebase
let app;

if(firebase.apps.length==0){
    app=firebase.initializeApp(firebaseConfig)
}
else{
    app=firebase.app()
}

const db=app.firestore();
const auth =firebase.auth();

export{db,auth};