/**
 * DCAS CMMS Navigation Drawer Engine
 * Dynamically renders links based on active user profiles
 */
export function loadSidebar(currentUserRole) {
    const sidebarContainer = document.getElementById("sidebarMenu");
    if (!sidebarContainer) return;

    // Get current active file name to apply high-contrast active styling tags
    const currentPath = window.location.pathname.split("/").pop() || "dashboard.html";

    // Complete Global Sidebar Workspace Registry
    const navigationLinksRegistry = [
        {
            name: "Executive Hub",
            file: "dashboard.html",
            icon: "📊",
            allowedRoles: ["admin", "planner"]
        },
        {
            name: "Work Orders Triage",
            file: "tickets.html",
            icon: "🔧",
            allowedRoles: ["admin", "contractor_hvac", "contractor_civil", "contractor_fire"]
        },
        {
            name: "Assets Registry",
            file: "assets.html",
            icon: "🏢",
            allowedRoles: ["admin", "planner"]
        },
        {
            name: "PPM Schedules",
            file: "ppm.html",
            icon: "📅",
            allowedRoles: ["admin", "planner", "supervisor_viewer"]
        },
        {
            name: "Raise Issue Portal",
            file: "reports.html",
            icon: "⚠️",
            allowedRoles: ["admin", "planner", "supervisor_viewer", "contractor_hvac", "contractor_civil", "contractor_fire"]
        }
    ];

    // Compile markup matching permitted roles
    let sidebarMarkupHtml = "";

    navigationLinksRegistry.forEach(item => {
        if (item.allowedRoles.includes(currentUserRole)) {
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
