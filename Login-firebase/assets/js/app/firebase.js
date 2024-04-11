// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArqWGszewbhpiyHDyylsaRqRyrWENjf5M",
  authDomain: "login-api-1c8f3.firebaseapp.com",
  projectId: "login-api-1c8f3",
  storageBucket: "login-api-1c8f3.appspot.com",
  messagingSenderId: "683804471559",
  appId: "1:683804471559:web:45397f631a01b5348c15a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);