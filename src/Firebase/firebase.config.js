// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRcYVUed7w_n0Ynxl7PWFhySmPASTcXM4",
  authDomain: "car-doctor-a2bb2.firebaseapp.com",
  projectId: "car-doctor-a2bb2",
  storageBucket: "car-doctor-a2bb2.appspot.com",
  messagingSenderId: "929641789380",
  appId: "1:929641789380:web:268c7efec4e61ef05b5691"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app