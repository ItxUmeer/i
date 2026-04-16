import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";
import { db } from "./firebase.js";

export async function generatePPM() {

  const assetsSnap = await getDocs(collection(db, "assets"));

  const today = new Date();

  assetsSnap.forEach(async (docSnap) => {

    const a = docSnap.data();

    let next = new Date();
    next.setMonth(today.getMonth() + 1);

    await addDoc(collection(db, "ppm"), {
      asset: a.name,
      location: a.location,
      frequency: "Monthly",
      nextDue: next.toISOString().split("T")[0],
      status: "Pending"
    });

  });

  console.log("PPM Generated ✔");
}
