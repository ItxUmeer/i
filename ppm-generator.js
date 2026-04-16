import { db } from "./firebase.js";
import {
  collection,
  getDocs,
  addDoc,
  query,
  where
} from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";


// 🧠 RULE ENGINE
function getFrequency(type, location) {

  // HVAC systems need more frequent maintenance
  if (type === "HVAC") return 1; // monthly

  // Electrical systems
  if (type === "Electrical") return 3; // quarterly

  // Mechanical systems
  if (type === "Mechanical") return 6;

  // default
  return 6;
}


// 🚀 MAIN GENERATOR
export async function generatePPM() {

  const assetsSnap = await getDocs(collection(db, "assets"));

  const today = new Date();

  for (const docSnap of assetsSnap.docs) {

    const asset = docSnap.data();

    const months = getFrequency(asset.type, asset.location);

    const nextDue = new Date();
    nextDue.setMonth(today.getMonth() + months);

    // ❌ CHECK DUPLICATE (important)
    const ppmCheck = query(
      collection(db, "ppm"),
      where("asset", "==", asset.name),
      where("status", "==", "Pending")
    );

    const existing = await getDocs(ppmCheck);

    if (!existing.empty) continue;

    // ➕ CREATE PPM
    await addDoc(collection(db, "ppm"), {
      asset: asset.name,
      type: asset.type,
      location: asset.location,
      frequency: months + " month(s)",
      nextDue: nextDue.toISOString().split("T")[0],
      status: "Pending",
      createdAt: new Date().toISOString()
    });

    console.log("PPM created for:", asset.name);
  }

  console.log("PPM AUTO GENERATION COMPLETE ✔");
}
