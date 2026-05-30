/**
 * DCAS CMMS User Profile Management Module
 * Interacts directly with the Firestore '/users' collection
 */
import { db } from "./firebase.js";
import { collection, doc, setDoc, getDocs, query, where } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";

/**
 * Fetches a user's role and metadata configuration by email address
 * @param {string} email - The logged-in user's enterprise email
 * @returns {Object|null} User data object or null if not found
 */
export async function getUserProfileByEmail(email) {
    try {
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("email", "==", email.toLowerCase().trim()), where("active", "==", "true"));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            let userData = null;
            querySnapshot.forEach((doc) => {
                userData = doc.data(); // Contains role, siteAccess, name, etc.
            });
            return userData;
        }
        return null;
    } catch (error) {
        console.error("Error fetching user profile matrix:", error);
        throw error;
    }
}

/**
 * Helper function to seed/provision system users into Firestore.
 * Run this once or use it via an admin control panel to create your roles.
 */
export async function seedSystemUsersRegistry() {
    const usersToCreate = [
        {
            uid: "sys_admin_root_01",
            name: "System Admin",
            email: "fmadmin@dcas.gov.ae",
            role: "admin",
            siteAccess: "HQ,Accommodation,Stations",
            assignedScope: "all",
            active: "true",
            createdAt: new Date().toISOString()
        },
        {
            uid: "contractor_hvac_sup",
            name: "Al-Futtaim HVAC Supervisor",
            email: "hvac.supervisor@contractor.ae",
            role: "contractor_hvac",
            siteAccess: "HQ,Stations",
            assignedScope: "air-conditioning",
            active: "true",
            createdAt: new Date().toISOString()
        },
        {
            uid: "contractor_civil_sup",
            name: "Imdaad Civil Supervisor",
            email: "civil.supervisor@contractor.ae",
            role: "contractor_civil",
            siteAccess: "HQ,Accommodation,Stations",
            assignedScope: "building-maintenance",
            active: "true",
            createdAt: new Date().toISOString()
        }
    ];

    try {
        for (const user of usersToCreate) {
            await setDoc(doc(db, "users", user.uid), user);
            console.log(`Successfully provisioned profile for: ${user.name}`);
        }
        alert("Firestore Users Collection seeded successfully!");
    } catch (error) {
        console.error("Error provisioning user baseline:", error);
    }
}
