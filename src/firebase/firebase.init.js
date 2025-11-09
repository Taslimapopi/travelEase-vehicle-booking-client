// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcWg6mRSAupeuceghoWzlaMDZ4EoTjW-E",
  authDomain: "traveleasy-projects.firebaseapp.com",
  projectId: "traveleasy-projects",
  storageBucket: "traveleasy-projects.firebasestorage.app",
  messagingSenderId: "1011090333858",
  appId: "1:1011090333858:web:682d178810f56e280277fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);