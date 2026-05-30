import { auth } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js";

export function checkAccess(callback) {
    onAuthStateChanged(auth, (user) => {
        if (!user) {
            window.location.href = "login.html";
            return;
        }

        const role = localStorage.getItem("userRole") || "staff";
        
        if (typeof callback === "function") {
            callback(role);
        }
    });
}
