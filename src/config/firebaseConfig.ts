import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAOSJbwY0k-MBQla1lgSscaa1817Ap1p4I",
  authDomain: "upx-6-f2b65.firebaseapp.com",
  databaseURL: "https://upx-6-f2b65-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "upx-6-f2b65",
  storageBucket: "upx-6-f2b65.appspot.com",
  messagingSenderId: "1070370843682",
  appId: "1:1070370843682:web:701079bd44652339e46e7b",
  measurementId: "G-LQVKG9HY37"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };