import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyA3PK51x0QAqT_DJHasx0bn3Cww2Q5j0_A",
  authDomain: "mep-maintenance-system.firebaseapp.com",
  projectId: "mep-maintenance-system",
  storageBucket: "mep-maintenance-system.appspot.com",
  messagingSenderId: "449309293495",
  appId: "1:449309293495:web:061124ae9f1c990e388632"
};

// Initialize Firebase Core Application Layer
const app = initializeApp(firebaseConfig);

// Initialize and Export Modular Service Engines
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); // 📸 Handles Before/After photo uploads
