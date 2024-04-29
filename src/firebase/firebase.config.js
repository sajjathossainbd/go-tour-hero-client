/* eslint-disable no-undef */
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChSjzWKKNzJvZZqyS7M0IDO1uDDHwcXgE",
  authDomain: "gotourhero.firebaseapp.com",
  projectId: "gotourhero",
  storageBucket: "gotourhero.appspot.com",
  messagingSenderId: "1092875328798",
  appId: "1:1092875328798:web:3084c5d8b4bd6ac772fd0f",
  measurementId: "G-VD5DTGVNL8",
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,
  // measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
