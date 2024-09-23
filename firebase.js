import { initializeApp, getApp, getApps } from 'firebase/app';
import { getDatabase, ref, set, get } from 'firebase/database';
import { getFirestore, doc, setDoc, updateDoc, arrayUnion, getDoc } from 'firebase/firestore';
import { getMessaging, getToken, onMessage } from 'firebase/messaging'; // Import FCM

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyjGrMYTsHbwJUM6rk4I38yxDYggiR8Wc",
  authDomain: "fir-auth-tutorial-4d656.firebaseapp.com",
  databaseURL: "https://fir-auth-tutorial-4d656-default-rtdb.firebaseio.com",
  projectId: "fir-auth-tutorial-4d656",
  storageBucket: "fir-auth-tutorial-4d656.appspot.com",
  messagingSenderId: "364850862791", // Your Sender ID
  appId: "1:364850862791:web:289951d71554ccd9a2bce2",
  measurementId: "G-P3KQ1ZYR8B"
};

// Initialize Firebase app
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firebase Realtime Database and Firestore
const database = getDatabase(app);
const firestore = getFirestore(app);

// Initialize Firebase Messaging
const messaging = getMessaging(app);

// Request permission to receive notifications
navigator.serviceWorker.register('/firebase-messaging-sw.js')
  .then(registration => {
    messaging.useServiceWorker(registration);
    return getToken(messaging, { vapidKey: 'YOUR_VAPID_KEY' }); // Replace with your VAPID key
  })
  .then(currentToken => {
    if (currentToken) {
      console.log('FCM Token:', currentToken);
      // Send the token to your backend server
    } else {
      // Show permission request UI
    }
  })
  .catch(err => {
    console.error('Error getting FCM token:', err);
  });

// Handle incoming messages
onMessage(messaging, (payload) => {
  console.log('Received message:', payload);
  // Handle the message, e.g., display a notification
});

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
  getDoc,
  messaging, // Export messaging for use in your app
  getToken, // Export getToken for requesting tokens
  onMessage // Export onMessage for handling messages
};
