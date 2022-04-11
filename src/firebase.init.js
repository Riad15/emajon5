// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDr4wB88ed3hPqHD88SVrRaIo1Btyh7cyA",
    authDomain: "ema-john-be315.firebaseapp.com",
    projectId: "ema-john-be315",
    storageBucket: "ema-john-be315.appspot.com",
    messagingSenderId: "1040698142485",
    appId: "1:1040698142485:web:c588c3629af527219cc31c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;