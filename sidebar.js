export function renderSidebar(role) {

  const menu = document.getElementById("menu");

  let html = `<a href="dashboard.html">Dashboard</a>`;

  if (role === "admin") {
    html += `<a href="workorders.html">Work Orders</a>`;
    html += `<a href="assets.html">Assets</a>`;
    html += `<a href="ppm.html">PPM</a>`;
  }

  if (role === "facilities_supervisor") {
    html += `<a href="workorders.html">Approve Work Orders</a>`;
    html += `<a href="ppm.html">PPM</a>`;
  }

  if (role === "assets_officer") {
    html += `<a href="assets.html">Assets</a>`;
  }

  if (role === "maintenance") {
    html += `<a href="workorders.html">My Work Orders</a>`;
  }

  menu.innerHTML = html;
}
