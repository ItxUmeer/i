/**
 * DCAS CMMS Navigation Drawer Engine
 * Dynamically renders links based on active user profiles
 */
export function loadSidebar(currentUserRole) {
    const sidebarContainer = document.getElementById("sidebarMenu");
    if (!sidebarContainer) return;

    // Get current active file name to apply high-contrast active styling tags
    const currentPath = window.location.pathname.split("/").pop() || "dashboard.html";

    // Normalize input parameter to ensure match integrity
    const roleToken = (currentUserRole || "").toLowerCase().trim();

    // Complete Global Sidebar Workspace Registry
    // UPDATED: Restructured roles to include facilities_manager and aligned titles to requirements
    const navigationLinksRegistry = [
        {
            name: "SLA & KPI Dashboards",
            file: "dashboard.html",
            icon: "📊",
            allowedRoles: ["admin", "planner", "facilities_manager"]
        },
        {
            name: "Work Orders Triage",
            file: "tickets.html",
            icon: "🔧",
            allowedRoles: ["admin", "planner", "facilities_manager"]
        },
        {
            name: "Assets Registry",
            file: "assets.html",
            icon: "🏢",
            allowedRoles: ["admin", "planner", "facilities_manager"]
        },
        {
            name: "PPM Schedules List",
            file: "ppm.html",
            icon: "📅",
            allowedRoles: ["admin", "planner", "facilities_manager"]
        },
        {
            name: "Raise Issue Portal",
            file: "reports.html",
            icon: "⚠️",
            allowedRoles: ["admin", "planner", "facilities_manager"]
        }
    ];

    // Compile markup matching permitted roles
    let sidebarMarkupHtml = "";

    navigationLinksRegistry.forEach(item => {
        if (item.allowedRoles.includes(roleToken)) {
            const isActiveClass = (currentPath === item.file) ? "active" : "";
            sidebarMarkupHtml += `
                <a href="${item.file}" class="menu-item ${isActiveClass}">
                    <span>${item.icon}</span>
                    <span>${item.name}</span>
                </a>
            `;
        }
    });

    sidebarContainer.innerHTML = sidebarMarkupHtml;
}
