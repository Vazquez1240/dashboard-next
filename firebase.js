// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLoqPSU8E-zApYYirjE2DdqwJsHISJaGc",
  authDomain: "dashboard-nextjs-5c99d.firebaseapp.com",
  projectId: "dashboard-nextjs-5c99d",
  storageBucket: "dashboard-nextjs-5c99d.appspot.com",
  messagingSenderId: "179313385027",
  appId: "1:179313385027:web:17af836e42db18d78b3ef6",
  measurementId: "G-RFLX9BCZX6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
