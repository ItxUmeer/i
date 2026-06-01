/**
 * DCAS CMMS Dynamic Sidebar Navigation Engine
 * Generates interface linkages strictly mapping to backend authorization matrices.
 */
export function loadSidebar(sessionRole) {
    const sidebarContainer = document.getElementById("sidebarMenu");
    if (!sidebarContainer) {
        console.error("Layout Exception: Sidebar container Target element (#sidebarMenu) missing from DOM tree framework.");
        return;
    }

    // Normalize casing for rigorous condition validation matching
    const normalizedRole = sessionRole ? sessionRole.toLowerCase().trim() : "";

    // 🏗️ Define components available to ALL administrative/management staff structures
    let sidebarMarkup = `
        <div class="sidebar-brand-context" style="padding: 16px; font-weight: 700; font-size: 14px; border-bottom: 1px solid rgba(255,255,255,0.1); margin-bottom: 12px; color: #f8fafc;">
            MANAGEMENT CONSOLE
        </div>
        <a href="dashboard.html" class="sidebar-link">📊 SLA & KPI Dashboards</a>
        <a href="tickets.html" class="sidebar-link">🔧 Work Orders Triage</a>
    `;

    // 🛡️ CRITICAL CONDITION: Inject restricted modules ONLY for Admin and Planners
    // This explicitly completely blocks the 'facilities_manager' from receiving these nav anchors in their DOM
    if (normalizedRole === "admin" || normalizedRole === "planner") {
        sidebarMarkup += `
            <a href="assets.html" class="sidebar-link">🏢 Assets Registry</a>
            <a href="ppm.html" class="sidebar-link">📅 PPM Schedules List</a>
            <a href="reports.html" class="sidebar-link">⚠️ Raise Issue Portal</a>
        `;
    }

    // Assign the compiled layout content clean directly into the viewport shell
    sidebarContainer.innerHTML = sidebarMarkup;

    // 📍 Automate contextual highlighting for the active view path
    try {
        const structuralCurrentFile = window.location.pathname.split("/").pop() || "dashboard.html";
        const matchingLinkAnchor = sidebarContainer.querySelector(`a[href="${structuralCurrentFile}"]`);
        if (matchingLinkAnchor) {
            matchingLinkAnchor.classList.add("active");
            // Optional inline style reinforcement for design tracking
            matchingLinkAnchor.style.background = "var(--primary-light, #1e40af)";
            matchingLinkAnchor.style.borderLeft = "4px solid #3b82f6";
        }
    } catch (routingError) {
        console.warn("Active path highlighter bypass execution: ", routingError);
    }
}
