/* ==========================================================================
   GLOBAL DESIGN VARIABLES & RESET
   ========================================================================== */
:root {
    --sidebar: #0f172a;
    --sidebar-hover: #1e293b;
    --primary: #2563eb;
    --primary-hover: #1d4ed8;
    --success: #10b981;
    --warning: #f59e0b;
    --danger: #ef4444;
    --header: rgba(255, 255, 255, 0.95);
    --bg: #f8fafc;
    --card: #ffffff;
    --text: #0f172a;
    --muted: #64748b;
    --radius: 12px;
    --border: #e2e8f0;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif;
}

body {
    background: var(--bg);
    color: var(--text);
    min-height: 100vh;
    overflow-x: hidden;
}

/* ==========================================================================
   LOGIN MODULE SYSTEM (Restored & Enhanced)
   ========================================================================== */
.login-page {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%);
}

.login-wrapper {
    width: 100%;
    max-width: 420px;
}

.login-card {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    padding: 35px;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.login-logo {
    text-align: center;
    margin-bottom: 25px;
}

.login-logo h1 {
    margin: 0;
    color: #1e3a8a;
    font-size: 32px;
    font-weight: 800;
    letter-spacing: 1px;
}

.login-logo p {
    margin: 5px 0 0;
    color: var(--muted);
    font-size: 14px;
}

.login-card input {
    width: 100%;
    padding: 12px 16px;
    margin-bottom: 14px;
    border: 1px solid #cbd5e1;
    border-radius: 8px;
    font-size: 14px;
    background: #ffffff;
    color: #0f172a;
    outline: none;
    transition: border-color 0.15s ease;
}

.login-card input:focus {
    border-color: var(--primary);
}

.btn-primary {
    width: 100%;
    padding: 12px;
    background: var(--primary);
    color: #ffffff;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
    transition: background 0.15s ease;
}

.btn-primary:hover {
    background: var(--primary-hover);
}

#loginError {
    margin-top: 12px;
    color: var(--danger);
    font-size: 13px;
    text-align: center;
    font-weight: 600;
}

/* ==========================================================================
   APPLICATION MASTER STRUCTURE (Top Header Bar & Drawer)
   ========================================================================== */
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background: var(--header);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    z-index: 1000;
    border-bottom: 1px solid var(--border);
}

.header-left {
    display: flex;
    align-items: center;
    gap: 12px;
}

.header-title {
    font-weight: 700;
    font-size: 18px;
    color: #0f172a;
    letter-spacing: -0.3px;
}

.menu-btn {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #0f172a;
    display: none;
}

.user-box {
    display: flex;
    align-items: center;
    gap: 16px;
}

.role-badge {
    background: rgba(37, 99, 235, 0.1);
    color: var(--primary);
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.logout-btn {
    padding: 8px 16px;
    border: none;
    border-radius: 8px;
    background: rgba(239, 68, 68, 0.1);
    color: var(--danger);
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
}

.logout-btn:hover {
    background: var(--danger);
    color: #ffffff;
}

/* Upgraded Sidebar Navigation Viewport */
.sidebar {
    position: fixed;
    top: 70px;
    left: 0;
    width: 270px;
    height: calc(100vh - 70px);
    background: var(--sidebar);
    padding: 24px 14px;
    overflow-y: auto;
    border-right: 1px solid rgba(255, 255, 255, 0.05);
    z-index: 998;
}

.menu-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    color: #94a3b8;
    text-decoration: none;
    border-radius: 8px;
    margin-bottom: 6px;
    font-size: 14px;
    font-weight: 600;
    transition: all 0.15s ease;
}

.menu-item:hover {
    background: var(--sidebar-hover);
    color: #ffffff;
}

.menu-item.active {
    background: var(--primary);
    color: #ffffff;
}

.main-content {
    margin-left: 270px;
    margin-top: 70px;
    padding: 30px;
    min-height: calc(100vh - 70px);
}

.page-title {
    font-size: 24px;
    font-weight: 700;
    color: #0f172a;
    margin-bottom: 20px;
    letter-spacing: -0.5px;
}

/* ==========================================================================
   DASHBOARD COMPONENTS & PORTALS GRID LAYOUTS
   ========================================================================== */
.dashboard-container {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

/* Filter Strip Option Bars */
.filter-bar {
    background: #ffffff;
    padding: 16px 20px;
    border-radius: var(--radius);
    border: 1px solid var(--border);
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
}

.filter-group {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.filter-group label {
    font-size: 11px;
    font-weight: 700;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.filter-group select {
    height: 38px;
    padding: 0 12px;
    border: 1px solid #cbd5e1;
    border-radius: 8px;
    min-width: 190px;
    font-size: 13px;
    background: #f8fafc;
    color: #0f172a;
    outline: none;
}

/* Metric KPI Blocks Panels */
.metrics-grid-6 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 16px;
}

.metric-mini {
    background: #ffffff;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 20px 16px;
    text-align: center;
    box-shadow: 0 1px 3px rgba(0,0,0,0.02);
}

.metric-mini h4 {
    font-size: 11px;
    color: var(--muted);
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 0.3px;
    font-weight: 700;
}

.metric-mini p {
    font-size: 28px;
    font-weight: 700;
    line-height: 1;
}

/* Dynamic Charts Row Configuration */
.charts-row-split {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
}

/* FIXED HEIGHT CONSTRAINT STOPS THE INFINITE DOWNWARD CHART SCROLLING BUG */
.chart-box-card {
    background: #ffffff;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 20px;
    height: 330px; 
    position: relative;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0,0,0,0.02);
}

.chart-box-card h3 {
    font-size: 13px;
    font-weight: 700;
    color: #0f172a;
    margin-bottom: 14px;
    text-transform: uppercase;
    border-bottom: 1px solid var(--border);
    padding-bottom: 8px;
    letter-spacing: 0.3px;
}

.chart-canvas-wrapper {
    position: relative;
    height: 230px; 
    width: 100%;
}

/* Heading section strings */
.section-headline {
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    color: #0f172a;
    margin-top: 12px;
    letter-spacing: 0.8px;
}

/* Engine Utility Systems Grid */
.core-sys-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 16px;
}

.sys-card {
    background: #0f172a;
    color: #ffffff;
    border-radius: var(--radius);
    padding: 18px 20px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: background 0.2s ease, transform 0.2s ease;
}

.sys-card:hover {
    background: #1e293b;
    transform: translateY(-2px);
}

.sys-card h3 {
    font-size: 14px;
    font-weight: 600;
}

/* ==========================================================================
   16 AMC CORE CONTRACT MATRIX ROUTING PORTALS
   ========================================================================== */
.services-portal-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 16px;
}

.portal-card {
    background: #ffffff;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 14px;
    text-decoration: none;
    color: inherit;
    transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
    box-shadow: 0 1px 3px rgba(0,0,0,0.01);
}

.portal-card:hover {
    transform: translateY(-2px);
    border-color: var(--primary);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.portal-icon {
    font-size: 22px;
    width: 44px;
    height: 44px;
    background: #f1f5f9;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    flex-shrink: 0;
}

.portal-meta {
    display: flex;
    flex-direction: column;
}

.portal-meta h3 {
    font-size: 13px;
    font-weight: 700;
    color: #0f172a;
    line-height: 1.3;
}

.portal-meta p {
    font-size: 11px;
    color: var(--muted);
    margin-top: 2px;
}

/* ==========================================================================
   RESPONSIVE LAYOUT & UTILITIES CONTROL
   ========================================================================== */
.restricted-executive-view {
    display: none;
}

@media (max-width: 1024px) {
    .charts-row-split {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 768px) {
    .menu-btn {
        display: block;
    }
    .sidebar {
        left: -270px;
        transition: left 0.25s ease;
    }
    .sidebar.mobile-open {
        left: 0;
    }
    .main-content {
        margin-left: 0;
        padding: 20px;
    }
}
