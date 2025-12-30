// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add your own Firebase configuration here
const firebaseConfig = {
  apiKey: "AIzaSyCTZRNL_osvFYKplszzyu028XIDU5d6O88",
  authDomain: "keeper-db-e5d6d.firebaseapp.com",
  projectId: "keeper-db-e5d6d",
  storageBucket: "keeper-db-e5d6d.firebasestorage.app",
  messagingSenderId: "808348413059",
  appId: "1:808348413059:web:51c799c975daf4fca4bfb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
