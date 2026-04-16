document.addEventListener("DOMContentLoaded", () => {
  const sidebarHTML = `
    <div class="sidebar">
      <h2>Dubai CMMS</h2>

      <button onclick="location.href='dashboard.html'">Dashboard</button>
      <button onclick="location.href='assets.html'">Assets</button>
      <button onclick="location.href='workorders.html'">Work Orders</button>
      <button onclick="location.href='ppm.html'">PPM</button>

      <hr style="border:1px solid #1f2937">

      <button onclick="logout()">Logout</button>
    </div>
  `;

  document.getElementById("sidebar").innerHTML = sidebarHTML;
});
