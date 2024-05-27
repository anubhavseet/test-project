// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnpqFTMwGTLy6Y5qJwknsHHhKMakpCFe4",
  authDomain: "shoestore-8d5fb.firebaseapp.com",
  projectId: "shoestore-8d5fb",
  storageBucket: "shoestore-8d5fb.appspot.com",
  messagingSenderId: "749819808449",
  appId: "1:749819808449:web:508c0ab06ff69952552240",
  measurementId: "G-Y3MBYFMQ94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider =  new GoogleAuthProvider();
export const db =  getFirestore(app);