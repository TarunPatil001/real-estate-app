// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-app-f0983.firebaseapp.com",
  projectId: "real-estate-app-f0983",
  storageBucket: "real-estate-app-f0983.firebasestorage.app",
  messagingSenderId: "7949461183",
  appId: "1:7949461183:web:14b3e020c395f53353080a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);