// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDzbDOQbVBxFmBqVcXOd0e4SXsqfpJrp6o",
    authDomain: "scam-detector-app.firebaseapp.com",
    databaseURL: "https://scam-detector-app-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "scam-detector-app",
    storageBucket: "scam-detector-app.appspot.com",
    messagingSenderId: "68047405998",
    appId: "1:68047405998:web:5451f48af35b27b07d3e3f",
    measurementId: "G-WMMMGBY5R1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)
const analytics = getAnalytics(app);
export {db}