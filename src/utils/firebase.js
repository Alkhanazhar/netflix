// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD13AmX1Vy9OvWdA0F793hq-W8Wz8Al9PY",
    authDomain: "netflix-final-submission.firebaseapp.com",
    projectId: "netflix-final-submission",
    storageBucket: "netflix-final-submission.appspot.com",
    messagingSenderId: "895623219987",
    appId: "1:895623219987:web:545a21694d1848f32528e6",
    measurementId: "G-EPKTLQLPYM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();