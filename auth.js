import { auth } from "./firebase.js";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js";

window.login = function () {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .catch(e => alert(e.message));
};

window.logout = function () {
  signOut(auth);
};

onAuthStateChanged(auth, user => {
  if (user) {
    window.location.href = "dashboard.html";
  }
});
