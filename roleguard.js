/**
 * DCAS CMMS Role-Based Access Control Guard (RBAC)
 * Protects frontend pages from unauthorized URL direct-entry.
 */

// Define pages that are allowed to skip authentication checkpoints entirely
const PUBLIC_PAGES = ["index.html", "login.html", "reports.html"];

// Define which roles are allowed to view which filenames
const PAGE_ACCESS_RULES = {
    "dashboard.html": ["admin", "planner"],
    "assets.html": ["admin", "planner"],
    "ppm.html": ["admin", "planner", "supervisor_viewer"],
    "tickets.html": ["admin", "contractor_hvac", "contractor_civil", "contractor_fire"]
};

/**
 * Checks the current session role and enforces access restrictions
 * @param {Function} successCallback - Runs if the user passes the role check
 */
export function checkAccess(successCallback) {
    const currentFile = window.location.pathname.split("/").pop() || "dashboard.html";
    let sessionRole = localStorage.getItem("role") || localStorage.getItem("userRole");

    // 🌟 FIX: If the target destination is a public page, bypass the guard completely
    if (PUBLIC_PAGES.includes(currentFile)) {
        if (successCallback && sessionRole) {
            successCallback(sessionRole.toLowerCase().trim());
        }
        return;
    }

    // 1. If no role exists and page is restricted, they aren't logged in
    if (!sessionRole) {
        console.warn("Access Denied: Stale or missing local storage identity token.");
        alert("Access Denied: Please log in to verify your identity.");
        window.location.href = "index.html";
        return;
    }

    // Normalize casing for robust matrix matching
    sessionRole = sessionRole.toLowerCase().trim();

    // 2. Check if the current page has restrictions defined
    if (PAGE_ACCESS_RULES[currentFile]) {
        const isAllowed = PAGE_ACCESS_RULES[currentFile].includes(sessionRole);
        
        if (!isAllowed) {
            alert(`Unauthorized Access: Your role [${sessionRole.toUpperCase()}] does not have permission to view this console.`);
            
            // Smart routing based on role access depth
            if (sessionRole.startsWith("contractor")) {
                window.location.href = "tickets.html";
            } else if (sessionRole === "supervisor_viewer") {
                window.location.href = "ppm.html";
            } else {
                window.location.href = "index.html";
            }
            return;
        }
    }

    // 3. If everything passes, let the page load its data
    if (successCallback) {
        successCallback(sessionRole);
    }
}
