// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFGF9DgZw7L7jDxDNBo1F_Y45-l8vRP78",
  authDomain: "netflix-clone-2cc4f.firebaseapp.com",
  projectId: "netflix-clone-2cc4f",
  storageBucket: "netflix-clone-2cc4f.appspot.com",
  messagingSenderId: "331015107875",
  appId: "1:331015107875:web:da1196d8e152aa35674896",
  measurementId: "G-309DJKFC04"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
