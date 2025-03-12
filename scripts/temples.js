// temples.js - JavaScript for Temple Album Page

// Update footer with the current year and last modified date
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("dynamic-info").textContent = `Last Modified: ${document.lastModified}`;
});

// Responsive Hamburger Menu
document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.createElement("button");
    menuButton.innerHTML = "&#9776;"; // Hamburger icon
    menuButton.id = "menu-button";
    document.querySelector("header").prepend(menuButton);
    
    const nav = document.querySelector("nav ul");
    menuButton.addEventListener("click", () => {
        nav.classList.toggle("open");
        menuButton.innerHTML = nav.classList.contains("open") ? "&times;" : "&#9776;";
    });
});
