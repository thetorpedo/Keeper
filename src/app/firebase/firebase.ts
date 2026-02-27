// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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
const db = getFirestore(app);
const auth = getAuth(app);

export { app, auth, db };
