/**
 * DCAS CMMS Authentication Helper Engine
 */
import { auth, db } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js";
import { doc, getDoc, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";

export async function login(email, password) {
  try {
    const cleanedEmail = email.toLowerCase().trim();

    // 1. Firebase Core Authentication Check
    const userCred = await signInWithEmailAndPassword(auth, cleanedEmail, password);
    const uid = userCred.user.uid;

    let userData = null;

    // 2. PRIMARY LOOKUP: Attempt to extract document anchored exactly onto Auth UID
    const userRef = doc(db, "users", uid);
    const snap = await getDoc(userRef);

    if (snap.exists()) {
      userData = snap.data();
    } else {
      console.warn(`Profile document not found for UID: ${uid}. Triggering fallback email index lookup...`);
      
      // 3. FALLBACK LOOKUP: Query profile collection using email string index match (Handles placeholder seeds)
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("email", "==", cleanedEmail), where("active", "==", "true"));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        querySnapshot.forEach((docSnap) => {
          userData = docSnap.data();
        });
      }
    }

    // Validation guard checks
    if (!userData) {
      throw new Error("No active user profile document mapped to this account inside Firestore registry.");
    }

    if (!userData.role) {
      throw new Error("Security Halt: Account is missing an assigned access role string property.");
    }

    return {
      uid: uid,
      role: userData.role.toLowerCase().trim(),
      email: userCred.user.email
    };

  } catch (error) {
    console.error("Central Login Engine Failure:", error.message);
    throw error;
  }
}
