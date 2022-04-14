// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyHyjDCeDEx9ieWxY3X_k0TYJSRIpdDJA",
  authDomain: "genius-car-services-68ff0.firebaseapp.com",
  projectId: "genius-car-services-68ff0",
  storageBucket: "genius-car-services-68ff0.appspot.com",
  messagingSenderId: "1074776667392",
  appId: "1:1074776667392:web:64feca6c5af852c3dcafe5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;