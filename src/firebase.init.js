// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCixPZ1igRhYmEEmrCsujX2ykpQFEfR23g",
  authDomain: "assurement-12.firebaseapp.com",
  projectId: "assurement-12",
  storageBucket: "assurement-12.appspot.com",
  messagingSenderId: "599295399655",
  appId: "1:599295399655:web:b296b8517133d615687442"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;