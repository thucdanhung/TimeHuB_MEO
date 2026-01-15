// js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  // --- THAY THẾ BẰNG CONFIG CỦA BẠN ---
 apiKey: "AIzaSyD6tuIxWDzM7s6fn4g7J2ffNdzRWFsxY4k",
  authDomain: "timehub-meo.firebaseapp.com",
  projectId: "timehub-meo",
  storageBucket: "timehub-meo.firebasestorage.app",
  messagingSenderId: "952706237918",
  appId: "1:952706237918:web:71110b24c34fa2b29a494f",
  measurementId: "G-FMP5ZLZJ0L"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

// Xuất ra để các file khác dùng
export { auth, db, googleProvider };
