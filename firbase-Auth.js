// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDssnjR9HNcpMAvwnomf9aGQUloqnf0bmc",
  authDomain: "first-project-ac1c4.firebaseapp.com",
  projectId: "first-project-ac1c4",
  storageBucket: "first-project-ac1c4.firebasestorage.app",
  messagingSenderId: "495562473705",
  appId: "1:495562473705:web:740a4e938c7cab967f3078",
  measurementId: "G-K2VD9WG4V1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export {
  firebaseConfig,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
};
