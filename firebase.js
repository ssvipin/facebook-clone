import React from "react";
import { initialize, getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCXhXuY87W6MrolmvKqXanIl13Uajhec9s",
  authDomain: "facebook-clone-9ad2b.firebaseapp.com",
  projectId: "facebook-clone-9ad2b",
  storageBucket: "facebook-clone-9ad2b.appspot.com",
  messagingSenderId: "161493560114",
  appId: "1:161493560114:web:2adbaeb31cd67345f9852b",
  measurementId: "G-F4Y15VP373"
};
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export default app;
export { db, storage };
