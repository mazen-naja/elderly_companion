import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import Constants from 'expo-constants';
// Firebase config
const firebaseConfig = {
//   apiKey: Constants.manifest.extra.apiKey,
//   authDomain: Constants.manifest.extra.authDomain,
//   projectId: Constants.manifest.extra.projectId,
//   storageBucket: Constants.manifest.extra.storageBucket,
//   messagingSenderId: Constants.manifest.extra.messagingSenderId,
//   appId: Constants.manifest.extra.appId,
//   databaseURL: Constants.manifest.extra.databaseURL

apiKey: "AIzaSyALWwNTaANVQl710SWGS_wF_iKlB2B6vak",
authDomain: "elderlycompanionfirebase-55033.firebaseapp.com",
projectId: "elderlycompanionfirebase-55033",
storageBucket: "elderlycompanionfirebase-55033.appspot.com",
messagingSenderId: "332294505393",
appId: "1:332294505393:web:14835eee407c85ede57390",
measurementId: "G-X80G3M5486"





};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();