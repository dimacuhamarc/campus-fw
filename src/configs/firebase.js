import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvkYm0-esVIfa2k9uOBnNvT3CzWDvL7g4",
  authDomain: "campus-fw.firebaseapp.com",
  projectId: "campus-fw",
  storageBucket: "campus-fw.appspot.com",
  messagingSenderId: "563151722905",
  appId: "1:563151722905:web:48b26a87de00b2eb729b08",
  measurementId: "G-9SJ1F0H6PR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app)

