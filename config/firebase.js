// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfckLIocOrdmUoMdSx-qjb0YZGAyVNnkg",
  authDomain: "expence-4cfe7.firebaseapp.com",
  projectId: "expence-4cfe7",
  storageBucket: "expence-4cfe7.appspot.com",
  messagingSenderId: "224032126164",
  appId: "1:224032126164:web:9f4a953978728dfc217741"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)

export const tripsRef = collection(db, 'trips')
export const expensesRef = collection(db, 'expenses')


export default app;