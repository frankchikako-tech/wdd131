/* =========================
   STATIC WEATHER VALUES
========================= */
const temperature = 5;   // °C (must match HTML)
const windSpeed = 10;   // km/h (must match HTML)

/* =========================
   WIND CHILL FUNCTION
   (ONE LINE RETURN REQUIRED)
========================= */
function calculateWindChill(temp, speed) {
  return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
}

/* =========================
   CALCULATE WIND CHILL
========================= */
let windChillValue = "N/A";

// Conditions for metric units
if (temperature <= 10 && windSpeed > 4.8) {
  windChillValue = calculateWindChill(temperature, windSpeed).toFixed(2) + " °C";
}

/* =========================
   DISPLAY VALUES
========================= */
document.getElementById("temp").textContent = temperature;
document.getElementById("wind").textContent = windSpeed;
document.getElementById("windchill").textContent = windChillValue;

/* =========================
   FOOTER DATES
========================= */
const year = new Date().getFullYear();
document.getElementById("year").textContent = year;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified;