// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1DuJtdJG2MwVGCAR55U3ihsLGFWeZhYw",
  authDomain: "lawyer-david-brewster.firebaseapp.com",
  projectId: "lawyer-david-brewster",
  storageBucket: "lawyer-david-brewster.appspot.com",
  messagingSenderId: "417705215664",
  appId: "1:417705215664:web:587114163268a5711e1d75",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
