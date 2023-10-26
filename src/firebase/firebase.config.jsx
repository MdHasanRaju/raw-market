// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// api key 
const firebaseConfig = {
  apiKey: "AIzaSyBATLKhKRGOpSK1ONMoS6Jd15YNxywaylg",
  authDomain: "raw-bazar.firebaseapp.com",
  projectId: "raw-bazar",
  storageBucket: "raw-bazar.appspot.com",
  messagingSenderId: "310914850460",
  appId: "1:310914850460:web:09e69ec0db348fc1565759",
  measurementId: "G-NQKE1CJ4Y3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
