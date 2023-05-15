// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDHWd_lmhCqQhHjqSLkvpmSHA2f3ZmidrM",
    authDomain: "boguraads.firebaseapp.com",
    projectId: "boguraads",
    storageBucket: "boguraads.appspot.com",
    messagingSenderId: "695565230023",
    appId: "1:695565230023:web:8654333dfc7edef32e83e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;