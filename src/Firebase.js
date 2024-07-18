// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAly5MGucK1G3FjSKZkt5R4GRQKkQwFpQo",
  authDomain: "contacts-1d057.firebaseapp.com",
  projectId: "contacts-1d057",
  storageBucket: "contacts-1d057.appspot.com",
  messagingSenderId: "950475863108",
  appId: "1:950475863108:web:9a085c35071ba46920b811"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);