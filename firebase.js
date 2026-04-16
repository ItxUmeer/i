import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA3PK51x0QAqT_DJHasx0bn3Cww2Q5j0_A",
  authDomain: "mep-maintenance-system.firebaseapp.com",
  projectId: "mep-maintenance-system",
  storageBucket: "mep-maintenance-system.appspot.com",
  messagingSenderId: "449309293495",
  appId: "1:449309293495:web:061124ae9f1c990e388632"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
