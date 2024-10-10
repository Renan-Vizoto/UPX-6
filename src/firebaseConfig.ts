import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6kB57rwhvARai8QmcOm5F_Sp50YtmxDM",
  authDomain: "upx-6-mushroom.firebaseapp.com",
  projectId: "upx-6-mushroom",
  storageBucket: "upx-6-mushroom.appspot.com",
  messagingSenderId: "1035930082961",
  appId: "1:1035930082961:web:d3d8633aaa888a30caa930",
  measurementId: "G-1JHHZN54CP"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };