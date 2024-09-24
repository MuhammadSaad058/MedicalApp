// firebaseConfig.js
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getDatabase, ref, set, get } from 'firebase/database';
import { getFirestore, doc, setDoc, updateDoc, arrayUnion, getDoc } from 'firebase/firestore';

// app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyjGrMYTsHbwJUM6rk4I38yxDYggiR8Wc",
  authDomain: "fir-auth-tutorial-4d656.firebaseapp.com",
  databaseURL: "https://fir-auth-tutorial-4d656-default-rtdb.firebaseio.com",
  projectId: "fir-auth-tutorial-4d656",
  storageBucket: "fir-auth-tutorial-4d656.appspot.com",
  messagingSenderId: "364850862791",
  appId: "1:364850862791:web:289951d71554ccd9a2bce2",
  measurementId: "G-P3KQ1ZYR8B"
};

// Initialize Firebase app
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firebase Realtime Database and Firestore
const database = getDatabase(app);
const firestore = getFirestore(app);

export {
  database,
  ref,
  set,
  get,
  firestore,
  doc,
  setDoc,
  updateDoc,
  arrayUnion,
  getDoc
};
