// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDPiwIerAgyujjF8p4MkOpX0TAJVMdck2M",
    authDomain: "nur-otomotiv.firebaseapp.com",
    projectId: "nur-otomotiv",
    storageBucket: "nur-otomotiv.appspot.com",
    messagingSenderId: "575853228283",
    appId: "1:575853228283:web:b2cfe1a01ce32c56c6805e",
    measurementId: "G-8HPBBFF23Z"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
