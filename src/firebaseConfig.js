// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database'; // Import the Realtime Database module

const firebaseConfig = {
    apiKey: "AIzaSyCxtbFlm-77wbXv4YZWwJIDiPO91j8ip4g",
    authDomain: "ephil-iri.firebaseapp.com",
    databaseURL: "https://ephil-iri-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "ephil-iri",
    storageBucket: "ephil-iri.firebasestorage.app",
    messagingSenderId: "803609292813",
    appId: "1:803609292813:web:46ffe468f86027f4826544",
    measurementId: "G-JDJ5ZV4LVJ"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and export the Realtime Database
const database = getDatabase(app);  // Get a reference to the Realtime Database

export { database };  // Export the database reference
