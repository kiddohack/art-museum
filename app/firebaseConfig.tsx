// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJHZYrB_uxEOv5kliAfzSihw44ctPRZO4",
  authDomain: "art-museum-f13de.firebaseapp.com",
  projectId: "art-museum-f13de",
  storageBucket: "art-museum-f13de.appspot.com",
  messagingSenderId: "352959709989",
  appId: "1:352959709989:web:fa5fd8c52f62a4f14410cc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
