// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdqqoMwUPjs1VOiqLiXYP_CiWWK6fIAn8",
  authDomain: "techno-barber.firebaseapp.com",
  databaseURL: "https://techno-barber-default-rtdb.firebaseio.com",
  projectId: "techno-barber",
  storageBucket: "techno-barber.appspot.com",
  messagingSenderId: "928006049576",
  appId: "1:928006049576:web:300beb43972fb5181d8a1d",
  measurementId: "G-3ENFRK5YVE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;
