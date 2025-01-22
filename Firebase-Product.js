import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import {
  getFirestore,               
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

// Firebase configuration
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
const db = getFirestore(app);

// Export required objects and functions
export {
  firebaseConfig, // If needed elsewhere
  db,
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
};
