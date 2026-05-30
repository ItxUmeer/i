/**
 * DCAS CMMS User Profile Management Module
 * Interacts directly with the Firestore '/users' collection
 */
import { db } from "./firebase.js";
import { collection, doc, setDoc, getDoc, getDocs, query, where } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";

/**
 * Fetches a user's role and profile metadata configuration by explicit Firebase UID
 * This is the primary, high-performance method utilized during secure authentication triage.
 * * @param {string} uid - The authenticated user's unique Firebase UID
 * @returns {Object|null} User document data object or null if not mapped
 */
export async function getUserProfileByUid(uid) {
    try {
        if (!uid) return null;
        
        const userDocRef = doc(db, "users", uid.trim());
        const docSnap = await getDoc(userDocRef);

        if (docSnap.exists()) {
            const data = docSnap.data();
            
            // Normalize values to ensure role matching is completely robust
            if (data && data.role) {
                data.role = data.role.toLowerCase().trim();
            }
            return data;
        }
        return null;
    } catch (error) {
        console.error("Critical Profile Extraction Fault via UID:", error);
        throw error;
    }
}

/**
 * Fetches a user's role and metadata configuration by email address
 * Useful for fallback matching, administrative user lookup tables, or password resets.
 * * @param {string} email - The logged-in user's enterprise email
 * @returns {Object|null} User data object or null if not found
 */
export async function getUserProfileByEmail(email) {
    try {
        if (!email) return null;
        
        const usersRef = collection(db, "users");
        const q = query(
            usersRef, 
            where("email", "==", email.toLowerCase().trim()), 
            where("active", "==", "true")
        );
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            let userData = null;
            querySnapshot.forEach((docSnap) => {
                userData = docSnap.data();
            });

            if (userData && userData.role) {
                userData.role = userData.role.toLowerCase().trim();
            }
            return userData;
        }
        return null;
    } catch (error) {
        console.error("Error fetching user profile matrix via email context:", error);
        throw error;
    }
}

/**
 * Helper function to seed/provision system users into Firestore.
 * Run this once or use it via an admin control panel to map authentic production roles.
 * Note: Document keys are anchored straight onto UIDs to ensure data integrity.
 */
export async function seedSystemUsersRegistry() {
    const usersToCreate = [
        {
            uid: "sys_admin_root_01", // Swap this value out with real production user UIDs from Firebase Auth Dashboard
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
            // Anchor the document identifier using the authenticated core identity UID
            await setDoc(doc(db, "users", user.uid), user);
            console.log(`Successfully provisioned profile registry node for: ${user.name}`);
        }
        alert("Firestore Users Collection seeded successfully with aligned document keys!");
    } catch (error) {
        console.error("Error provisioning user baseline lookup nodes:", error);
    }
}
