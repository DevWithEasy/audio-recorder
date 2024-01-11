import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDteRZ3R2sy02k3gFnTXUsmQ8sOahms1M0",
    authDomain: "hedayat-bangla.firebaseapp.com",
    databaseURL: "https://hedayat-bangla-default-rtdb.firebaseio.com",
    projectId: "hedayat-bangla",
    storageBucket: "hedayat-bangla.appspot.com",
    messagingSenderId: "93517133717",
    appId: "1:93517133717:web:d3e19706c4ca5136f1689c",
    measurementId: "G-FXLBJ8LT23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export { db }