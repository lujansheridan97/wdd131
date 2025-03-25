// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Set last modified date in footer
document.getElementById("lastModified").textContent = document.lastModified;

// Toggle navigation menu
document.querySelector(".menu-toggle").addEventListener("click", function() {
    document.querySelector("nav").classList.toggle("active");
});
