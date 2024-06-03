

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDPtlYWUH4osoJQuRFsv56nh52k_MOF-hs",
  authDomain: "exotic-cars-845ef.firebaseapp.com",
  projectId: "exotic-cars-845ef",
  storageBucket: "exotic-cars-845ef.appspot.com",
  messagingSenderId: "1066576689060",
  appId: "1:1066576689060:web:5283fef7956c3274d6b331"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)

export { db, auth, storage };