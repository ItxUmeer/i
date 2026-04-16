import { db, auth } from "./firebase.js";
import { doc, getDoc } 
from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";

import { signOut } 
from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js";

async function loadSidebar() {

  const user = auth.currentUser;
  if (!user) return;

  const snap = await getDoc(doc(db, "users", user.uid));

  if (!snap.exists()) return;

  const role = snap.data().role;

  let menu = "";

  if (role === "admin") {
    menu = `
      <button onclick="location.href='dashboard.html'">Dashboard</button>
      <button onclick="location.href='assets.html'">Assets</button>
      <button onclick="location.href='workorders.html'">Work Orders</button>
      <button onclick="location.href='ppm.html'">PPM</button>
      <button onclick="location.href='supervisor.html'">Facilities Supervisor</button>
    `;
  }

  else if (role === "assets_officer") {
    menu = `
      <button onclick="location.href='assets.html'">Assets</button>
      <button onclick="location.href='ppm.html'">PPM</button>
    `;
  }

  else if (role === "facilities_supervisor") {
    menu = `
      <button onclick="location.href='supervisor.html'">My Work Orders</button>
      <button onclick="location.href='ppm.html'">PPM Schedule</button>
    `;
  }

  document.querySelector(".sidebar").innerHTML = `
    <h2>CMMS Dubai</h2>
    ${menu}
    <hr style="border:1px solid #1f2937">
    <button id="logoutBtn">Logout</button>
  `;

  document.getElementById("logoutBtn").onclick = () => {
    signOut(auth);
    window.location.href = "index.html";
  };
}

loadSidebar();
