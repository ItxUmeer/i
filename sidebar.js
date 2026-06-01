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
    // Re-architected with safe flexbox blocks to prevent unstyled purple inline text clumping
    let sidebarMarkup = `
        <div class="sidebar-brand-context" style="padding: 24px 16px 12px 16px; font-weight: 800; font-size: 11px; color: #64748b; text-transform: uppercase; letter-spacing: 1.5px;">
            MANAGEMENT CONSOLE
        </div>
        <div class="sidebar-links-wrapper" style="display: flex; flex-direction: column; gap: 4px; padding: 0 8px;">
            <a href="dashboard.html" class="sidebar-link" style="display: flex; align-items: center; gap: 12px; padding: 12px 16px; color: #94a3b8; text-decoration: none; font-weight: 600; font-size: 14px; border-radius: 6px; transition: all 0.15s ease; border-left: 4px solid transparent;">
                <span style="font-size: 16px; width: 20px; text-align: center;">📊</span> SLA & KPI Dashboards
            </a>
            <a href="tickets.html" class="sidebar-link" style="display: flex; align-items: center; gap: 12px; padding: 12px 16px; color: #94a3b8; text-decoration: none; font-weight: 600; font-size: 14px; border-radius: 6px; transition: all 0.15s ease; border-left: 4px solid transparent;">
                <span style="font-size: 16px; width: 20px; text-align: center;">🔧</span> Work Orders Triage
            </a>
    `;

    // 🛡️ CRITICAL CONDITION: Inject restricted modules ONLY for Admin and Planners
    // This explicitly completely blocks the 'facilities_manager' from receiving these nav anchors in their DOM
    if (normalizedRole === "admin" || normalizedRole === "planner") {
        sidebarMarkup += `
            <a href="assets.html" class="sidebar-link" style="display: flex; align-items: center; gap: 12px; padding: 12px 16px; color: #94a3b8; text-decoration: none; font-weight: 600; font-size: 14px; border-radius: 6px; transition: all 0.15s ease; border-left: 4px solid transparent;">
                <span style="font-size: 16px; width: 20px; text-align: center;">🏢</span> Assets Registry
            </a>
            <a href="ppm.html" class="sidebar-link" style="display: flex; align-items: center; gap: 12px; padding: 12px 16px; color: #94a3b8; text-decoration: none; font-weight: 600; font-size: 14px; border-radius: 6px; transition: all 0.15s ease; border-left: 4px solid transparent;">
                <span style="font-size: 16px; width: 20px; text-align: center;">📅</span> PPM Schedules List
            </a>
            <a href="reports.html" class="sidebar-link" style="display: flex; align-items: center; gap: 12px; padding: 12px 16px; color: #94a3b8; text-decoration: none; font-weight: 600; font-size: 14px; border-radius: 6px; transition: all 0.15s ease; border-left: 4px solid transparent;">
                <span style="font-size: 16px; width: 20px; text-align: center;">⚠️</span> Raise Issue Portal
            </a>
        `;
    }

    sidebarMarkup += `</div>`;

    // Assign the compiled layout content clean directly into the viewport shell
    sidebarContainer.innerHTML = sidebarMarkup;

    // 📍 Automate contextual highlighting for the active view path
    try {
        const structuralCurrentFile = window.location.pathname.split("/").pop() || "dashboard.html";
        const matchingLinkAnchor = sidebarContainer.querySelector(`a[href="${structuralCurrentFile}"]`);
        
        if (matchingLinkAnchor) {
            matchingLinkAnchor.classList.add("active");
            // Solid dark blue fill with sharp vivid blue left indicator bar matching original shell design
            matchingLinkAnchor.style.background = "#1e40af"; 
            matchingLinkAnchor.style.color = "#ffffff";
            matchingLinkAnchor.style.borderLeft = "4px solid #3b82f6";
            matchingLinkAnchor.style.borderTopLeftRadius = "0px";
            matchingLinkAnchor.style.borderBottomLeftRadius = "0px";
        }

        // Apply clean hover interactions programmatically to completely override raw default agent stylesheet behaviors
        const allSidebarLinks = sidebarContainer.querySelectorAll(".sidebar-link");
        allSidebarLinks.forEach(link => {
            if (link.getAttribute("href") !== structuralCurrentFile) {
                link.addEventListener("mouseenter", () => {
                    link.style.background = "#1e293b";
                    link.style.color = "#f8fafc";
                });
                link.addEventListener("mouseleave", () => {
                    link.style.background = "transparent";
                    link.style.color = "#94a3b8";
                });
            }
        });

    } catch (routingError) {
        console.warn("Active path highlighter bypass execution: ", routingError);
    }
}
