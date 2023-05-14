// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPLHSbNddIbYFpiqlXaLOx4updXgQYFgE",
  authDomain: "clone-5f629.firebaseapp.com",
  projectId: "clone-5f629",
  storageBucket: "clone-5f629.appspot.com",
  messagingSenderId: "830814205879",
  appId: "1:830814205879:web:b380d666db3a8da9a91a32",
  measurementId: "G-3D9KT6XXET",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig

