// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2jq5l-M1XhUAXbeZ0e8GSLL-xF3yXMy8",
  authDomain: "agape-57349.firebaseapp.com",
  projectId: "agape-57349",
  storageBucket: "agape-57349.appspot.com",
  messagingSenderId: "685568919685",
  appId: "1:685568919685:web:92bc7302c3d07e95f981ec",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
