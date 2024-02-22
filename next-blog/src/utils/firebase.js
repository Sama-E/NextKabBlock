// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "nextkabblock-415015.firebaseapp.com",
  projectId: "nextkabblock-415015",
  storageBucket: "nextkabblock-415015.appspot.com",
  messagingSenderId: "973048348922",
  appId: "1:973048348922:web:525cfa73f41bec330d0943"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);