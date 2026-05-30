export function loadSidebar(role) {
    const menu = document.getElementById("sidebarMenu");
    if (!menu) return;
    
    let items = [];

    switch(role) {
        case "staff":
            items = [
                ["🏠 Operations View", "dashboard.html"],
                ["📝 Raise Request", "requests.html"],
                ["📋 My Requests", "myrequests.html"]
            ];
            break;

        case "fsu":
        case "supervisor":
            items = [
                ["🏠 Operations View", "dashboard.html"],
                ["✅ Approvals Hub", "approvals.html"],
                ["📝 Requests", "requests.html"],
                ["🔧 Work Orders", "workorders.html"],
                ["📅 PPM Schedules", "ppm.html"]
            ];
            break;

        case "contractor":
            items = [
                ["🏠 Executive Hub", "dashboard.html"],
                ["🔧 Work Orders", "workorders.html"],
                ["📅 PPM Scheduling", "ppm.html"],
                ["🏭 Assets Control", "assets.html"],
                ["📦 Inventory Engine", "inventory.html"]
            ];
            break;

        case "management":
        case "admin":
            items = [
                ["🏠 Executive Hub", "dashboard.html"],
                ["📝 Requests Registry", "requests.html"],
                ["✅ Operations Approvals", "approvals.html"],
                ["🔧 Work Orders Tracking", "workorders.html"],
                ["🏭 Assets Registry", "assets.html"],
                ["📅 PPM Schedules", "ppm.html"],
                ["📦 Material Stockroom", "inventory.html"]
            ];
            break;
    }

    menu.innerHTML = "";
    items.forEach(item => {
        // Evaluate active route mapping match
        const currentPath = window.location.pathname;
        const isActive = currentPath.includes(item[1]) ? "active" : "";
        
        menu.innerHTML += `
            <a href="${item[1]}" class="menu-item ${isActive}">
                ${item[0]}
            </a>
        `;
    });
}
