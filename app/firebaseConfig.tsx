// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-dYXepNBbDh3oCvcpCZI3YULPLEVU32c",
  authDomain: "disney-61118.firebaseapp.com",
  projectId: "disney-61118",
  storageBucket: "disney-61118.appspot.com",
  messagingSenderId: "481049077536",
  appId: "1:481049077536:web:2b81b04f6f96ad1d6a1945"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);