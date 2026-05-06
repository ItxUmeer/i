import { auth, db } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";

export async function login(email, password) {
  try {
    // 1. Firebase Auth login
    const userCred = await signInWithEmailAndPassword(auth, email, password);
    const uid = userCred.user.uid;

    // 2. Fetch user role from Firestore
    const userRef = doc(db, "users", uid);
    const snap = await getDoc(userRef);

    if (!snap.exists()) {
      throw new Error("User profile not found in Firestore");
    }

    const userData = snap.data();

    if (!userData.role) {
      throw new Error("User role not defined");
    }

    return {
      uid,
      role: userData.role,
      email: userCred.user.email
    };

  } catch (error) {
    console.error("Login error:", error.message);
    throw error;
  }
}
