<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DCAS Facilities CMMS - Login</title>
    <link rel="stylesheet" href="style.css">
</head>
<body class="login-page">

<div class="login-wrapper">
    <div class="login-card">

        <div class="login-header">
            <img src="logo-left.png" alt="Dubai Government" class="login-logo">
            <img src="logo-right.png" alt="DCAS Ambulance" class="login-logo">
        </div>

        <div class="system-title">
            <h1>Facilities CMMS</h1>
            <p>Dubai Corporation for Ambulance Service</p>
        </div>

        <form id="loginForm">
            <div class="input-group">
                <label>Enterprise Email</label>
                <input type="email" id="email" placeholder="name@dcas.gov.ae" required>
            </div>

            <div class="input-group">
                <label>Password</label>
                <input type="password" id="password" placeholder="••••••••" required>
            </div>

            <button type="submit" class="btn-primary" id="submitBtn">Login</button>
        </form>

        <div id="loginError"></div>
    </div>
</div>

<script type="module">
import { login } from "./auth.js";

document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const errorBox = document.getElementById("loginError");
    const submitBtn = document.getElementById("submitBtn");

    errorBox.innerText = "";
    submitBtn.disabled = true;
    submitBtn.innerText = "Verifying Identity...";

    try {
        const user = await login(email, password);

        if (!user || !user.role) {
            throw new Error("User profile configuration mismatch.");
        }

        localStorage.setItem("userRole", user.role);
        window.location.href = "dashboard.html";

    } catch (error) {
        submitBtn.disabled = false;
        submitBtn.innerText = "Login";
        errorBox.innerText = error.message || "Authentication failed";
    }
});
</script>

</body>
</html>
