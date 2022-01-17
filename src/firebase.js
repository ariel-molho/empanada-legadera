import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNK7sU7NHx9Y8gld38AWZSaJX1KSDP9Cw",
  authDomain: "empanada-legadera.firebaseapp.com",
  projectId: "empanada-legadera",
  storageBucket: "empanada-legadera.appspot.com",
  messagingSenderId: "842808661702",
  appId: "1:842808661702:web:f26948fc4fd9206b8b69c7"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();