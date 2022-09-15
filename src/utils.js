import { getAuth , signOut } from "firebase/auth";



// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyAlFDXJoVHdZzLaReX41Kuxwm9vlaue3sg",

  authDomain: "login-4161c.firebaseapp.com",

  projectId: "login-4161c",

  storageBucket: "login-4161c.appspot.com",

  messagingSenderId: "64775675296",

  appId: "1:64775675296:web:860a3b132f1a1710da98c5",

  measurementId: "G-Y87DS7C8DP"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth ();
