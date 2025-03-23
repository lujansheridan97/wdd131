document.addEventListener("DOMContentLoaded", function () {
    const tempElement = document.getElementById("temp");
    const windElement = document.getElementById("wind");
    const windChillElement = document.getElementById("windchill");
    const lastModifiedElement = document.getElementById("lastModified");

    // Static values for temperature and wind speed
    const temperature = 10; // in Celsius
    const windSpeed = 5; // in km/h

    // Function to calculate wind chill
    function calculateWindChill(temp, wind) {
        if (temp <= 10 && wind > 4.8) {
            return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1);
        } else {
            return "N/A";
        }
    }

    // Update the wind chill display
    windChillElement.textContent = calculateWindChill(temperature, windSpeed);

    // Update last modified date
    lastModifiedElement.textContent = document.lastModified;
});
