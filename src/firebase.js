// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDypl9DIIFiMff_pAxvELzdvt5ZGAl27UA",
  authDomain: "abdulqadir-46f78.firebaseapp.com",
  projectId: "abdulqadir-46f78",
  storageBucket: "abdulqadir-46f78.appspot.com",
  messagingSenderId: "651679295854",
  appId: "1:651679295854:web:665a1638f0704bda7eb97f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)