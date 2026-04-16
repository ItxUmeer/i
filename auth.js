import { db, auth } from "./firebase.js";
import { signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js";

import { doc, getDoc } 
from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";

signInWithEmailAndPassword(auth, email, password)
.then(async (userCred) => {

  const uid = userCred.user.uid;

  const userSnap = await getDoc(doc(db, "users", uid));

  if (!userSnap.exists()) {
    alert("User role not found");
    return;
  }

  const role = userSnap.data().role;

  // ROLE ROUTING
  if (role === "admin") {
    window.location.href = "dashboard.html";
  }

  else if (role === "assets_officer") {
    window.location.href = "assets.html";
  }

  else if (role === "facilities_supervisor") {
    window.location.href = "supervisor.html";
  }

  else {
    alert("Access denied: Invalid role");
  }

});
