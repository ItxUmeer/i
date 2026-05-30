import { auth } from "./firebase.js";

export function checkAccess() {

    const role =
        localStorage.getItem("userRole");

    if (!auth.currentUser) {

        window.location.href =
            "login.html";

        return;
    }

    return role;
}
