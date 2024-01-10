// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDufX6KAfa2iPev5_qrHcm1q-0we7kZ-hs",
  authDomain: "clean-and-co.firebaseapp.com",
  projectId: "clean-and-co",
  storageBucket: "clean-and-co.appspot.com",
  messagingSenderId: "795745551095",
  appId: "1:795745551095:web:d557fbf376a5da0c5f49f2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
