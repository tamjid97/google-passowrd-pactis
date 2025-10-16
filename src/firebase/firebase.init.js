// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAA-a6aLoDIZkY7-PI0eT3iiFAr-0poxxk",
  authDomain: "mama-65ae9.firebaseapp.com",
  projectId: "mama-65ae9",
  storageBucket: "mama-65ae9.firebasestorage.app",
  messagingSenderId: "797978246353",
  appId: "1:797978246353:web:157d7efab5fe9c569699f0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);