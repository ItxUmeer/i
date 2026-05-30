export function loadSidebar(role) {
    const menu = document.getElementById("sidebarMenu");
    let items = [];

    switch(role) {
        case "staff":
            items = [
                ["🏠 Home Hub", "dashboard.html"],
                ["📝 Raise Request", "requests.html"],
                ["📋 My Requests", "myrequests.html"]
            ];
            break;

        case "supervisor":
            items = [
                ["🏠 Work Area", "dashboard.html"],
                ["🔧 Work Orders", "workorders.html"],
                ["📅 PPM Schedule", "ppm.html"]
            ];
            break;

        case "contractor": // Contractor Manager Mode
            items = [
                ["🏠 Admin Hub", "dashboard.html"],
                ["🔧 Work Orders", "workorders.html"],
                ["🏭 Assets Control", "assets.html"],
                ["📅 PPM Records", "ppm.html"],
                ["📦 Inventory", "inventory.html"]
            ];
            break;

        case "management":
        case "admin":
            items = [
                ["🏠 Dashboard", "dashboard.html"],
                ["📝 Requests Registry", "requests.html"],
                ["🔧 Work Orders", "workorders.html"],
                ["🏭 Asset Register", "assets.html"],
                ["📅 Planned PPM", "ppm.html"],
                ["📦 Inventory Stock", "inventory.html"]
            ];
            break;
    }

    menu.innerHTML = "";
    items.forEach(item => {
        const isActive = window.location.pathname.includes(item[1]) ? "active" : "";
        menu.innerHTML += `
            <a href="${item[1]}" class="menu-item ${isActive}">
                ${item[0]}
            </a>
        `;
    });
}
