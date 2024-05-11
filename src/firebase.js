// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnwTFD8l8cRePpVR9Hm0BlxAkApTRxnEA",
  authDomain: "home-sell-rent.firebaseapp.com",
  projectId: "home-sell-rent",
  storageBucket: "home-sell-rent.appspot.com",
  messagingSenderId: "338104489934",
  appId: "1:338104489934:web:8c52aa5b10a345e5d83d9f"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
 export const db=getFirestore()