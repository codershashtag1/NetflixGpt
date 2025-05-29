// Import the functions you need from the SDKs you need
import {
  initializeApp
} from "firebase/app";
import {
  getAnalytics
} from "firebase/analytics";
import {
  getAuth
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqlSBWxy9a7n___oeq4dNurVq4v_j3QVc",
  authDomain: "netflixgpt-84862.firebaseapp.com",
  projectId: "netflixgpt-84862",
  storageBucket: "netflixgpt-84862.appspot.com",
  messagingSenderId: "738248023035",
  appId: "1:738248023035:web:6026715f07c4edbca5495e",
  measurementId: "G-7RTS3RM0FR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Only initialize analytics if window is defined (browser environment)
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export const auth = getAuth();