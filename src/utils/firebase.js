// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvxqSY9Bnet4ZGOzpDacJyi_-2-tQDquU",
  authDomain: "netflix-gpt-aef45.firebaseapp.com",
  projectId: "netflix-gpt-aef45",
  storageBucket: "netflix-gpt-aef45.appspot.com",
  messagingSenderId: "881638745921",
  appId: "1:881638745921:web:308f1b4254c029f83d63c0",
  measurementId: "G-JZX4XETPYT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
