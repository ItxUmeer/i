import { db } from './firebase.js';
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const totalEl = document.getElementById("total");
const pendingEl = document.getElementById("pending");
const completedEl = document.getElementById("completed");

async function loadDashboard() {
  let total = 0, pending = 0, completed = 0;

  const snap = await getDocs(collection(db, "requests"));

  snap.forEach(doc => {
    total++;
    if (doc.data().status === "Pending") pending++;
    if (doc.data().status === "Completed") completed++;
  });

  totalEl.innerText = total;
  pendingEl.innerText = pending;
  completedEl.innerText = completed;
}

loadDashboard();
