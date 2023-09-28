// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvKCxTiGsvDxZcafVcOKiCAMkQY5JU_xI",
  authDomain: "auth-router-cotext.firebaseapp.com",
  projectId: "auth-router-cotext",
  storageBucket: "auth-router-cotext.appspot.com",
  messagingSenderId: "593387270102",
  appId: "1:593387270102:web:6539f79ab44f462f75fe77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;