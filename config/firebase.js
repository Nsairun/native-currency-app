// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNxuHI5VKepRiPZ4XFV2rno1s3AiSs4Ro",
  authDomain: "currency-converter-88186.firebaseapp.com",
  projectId: "currency-converter-88186",
  storageBucket: "currency-converter-88186.appspot.com",
  messagingSenderId: "613714649795",
  appId: "1:613714649795:web:4d1723cb09b693fbb8f876",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
