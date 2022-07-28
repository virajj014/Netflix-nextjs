
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBITHH-y08P3x0P3Y8LH_l-SAkoM_5AFGQ",
    authDomain: "netflix-1-bcd18.firebaseapp.com",
    projectId: "netflix-1-bcd18",
    storageBucket: "netflix-1-bcd18.appspot.com",
    messagingSenderId: "151879059592",
    appId: "1:151879059592:web:ce92d94168fc8f06e8773d"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();


export default app
export { db, auth } 