export function loadSidebar(role) {

    const menu = document.getElementById("sidebarMenu");

    let items = [];

    switch(role){

        case "staff":

            items = [
                ["🏠 Dashboard","dashboard.html"],
                ["📝 Raise Request","requests.html"],
                ["📋 My Requests","myrequests.html"]
            ];

        break;

        case "fsu":

            items = [
                ["🏠 Dashboard","dashboard.html"],
                ["✅ Approvals","approvals.html"],
                ["📝 Requests","requests.html"],
                ["🔧 Work Orders","workorders.html"],
                ["🏭 Assets","assets.html"],
                ["📅 PPM","ppm.html"],
                ["📊 Reports","reports.html"]
            ];

        break;

        case "contractor":

            items = [
                ["🏠 Dashboard","dashboard.html"],
                ["🔧 Work Orders","workorders.html"],
                ["📅 PPM","ppm.html"],
                ["🏭 Assets","assets.html"],
                ["📦 Inventory","inventory.html"]
            ];

        break;

        case "management":

            items = [
                ["🏠 Dashboard","dashboard.html"],
                ["📈 KPI Dashboard","kpi.html"],
                ["📊 Reports","reports.html"],
                ["📉 Analytics","analytics.html"]
            ];

        break;

        case "admin":

            items = [
                ["🏠 Dashboard","dashboard.html"],
                ["📝 Requests","requests.html"],
                ["✅ Approvals","approvals.html"],
                ["🔧 Work Orders","workorders.html"],
                ["🏭 Assets","assets.html"],
                ["📅 PPM","ppm.html"],
                ["📦 Inventory","inventory.html"],
                ["📊 Reports","reports.html"],
                ["⚙️ Settings","settings.html"]
            ];

        break;

    }

    menu.innerHTML = "";

    items.forEach(item => {

        menu.innerHTML += `
            <a href="${item[1]}" class="menu-item">
                ${item[0]}
            </a>
        `;

    });

}
