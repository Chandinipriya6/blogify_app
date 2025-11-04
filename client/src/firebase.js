import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBnTUn-ik4DVyZlBWwl32uhZHKkO-Z0YrU",
  authDomain: "blogify-mern-app.firebaseapp.com",
  projectId: "blogify-mern-app",
  storageBucket: "blogify-mern-app.appspot.com",
  messagingSenderId: "593028154611",
  appId: "1:593028154611:web:0793f1769f9f5103f8e386",
  measurementId: "G-TD2H4C8NQT"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
