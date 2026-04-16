import { db } from "./firebase.js";
import { collection, getDocs, addDoc } 
from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";

// AUTO GENERATOR FUNCTION
export async function generatePPM() {

  const assetsSnap = await getDocs(collection(db, "assets"));
  const ppmSnap = await getDocs(collection(db, "ppm"));

  let existing = new Set();

  // avoid duplicates
  ppmSnap.forEach(doc => {
    let d = doc.data();
    existing.add(d.assetId + "-" + d.nextDue);
  });

  const today = new Date();

  assetsSnap.forEach(async (docItem) => {

    let asset = docItem.data();

    if (!asset.ppmFrequency) return;

    let nextDue = calculateNextDue(asset.ppmFrequency);

    let key = asset.name + "-" + nextDue;

    if (existing.has(key)) return; // prevent duplicates

    await addDoc(collection(db, "ppm"), {
      assetId: asset.name,
      task: "Auto Maintenance - " + asset.type,
      frequency: asset.ppmFrequency,
      nextDue: nextDue,
      status: "Pending",
      location: asset.locationGroup + " - " + asset.building,
      createdAt: new Date().toISOString()
    });

  });

  console.log("PPM Generated Successfully");
}

// DATE CALCULATION
function calculateNextDue(freq) {

  const date = new Date();

  switch(freq) {

    case "Weekly":
      date.setDate(date.getDate() + 7);
      break;

    case "Monthly":
      date.setMonth(date.getMonth() + 1);
      break;

    case "Quarterly":
      date.setMonth(date.getMonth() + 3);
      break;

    case "Yearly":
      date.setFullYear(date.getFullYear() + 1);
      break;
  }

  return date.toISOString().split("T")[0];
}
