// Import Firebase SDKs (CDN version)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASPK51x0QaqT_DJHasx0bn3Cww2Q5j0_A",
  authDomain: "mep-maintenance-system.firebaseapp.com",
  projectId: "mep-maintenance-system",
  storageBucket: "mep-maintenance-system.firebasestorage.app",
  messagingSenderId: "449309293495",
  appId: "1:449309293495:web:15c7cfcf0293308b388632"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);
