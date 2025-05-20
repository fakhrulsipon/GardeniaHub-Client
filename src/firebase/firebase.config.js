// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqJqnGtBik1iKLiKP6ZouZcdb6_eGnGVM",
  authDomain: "gardeniahub-auth.firebaseapp.com",
  projectId: "gardeniahub-auth",
  storageBucket: "gardeniahub-auth.firebasestorage.app",
  messagingSenderId: "279323210248",
  appId: "1:279323210248:web:a0e67011a9e16dd0d717bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);