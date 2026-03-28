// Footer year & last modified
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Wind Chill Function
function calculateWindChill(temp, windSpeed) {
  return 13.12 + 0.6215 * temp - 11.37 * windSpeed**0.16 + 0.3965 * temp * windSpeed**0.16;
}

// Static values for now
const temperature = 5; // °C
const windSpeed = 10; // km/h
const windChillEl = document.getElementById('windChill');

if (temperature <= 10 && windSpeed > 4.8) {
  windChillEl.textContent = Math.round(calculateWindChill(temperature, windSpeed)) + '°C';
} else {
  windChillEl.textContent = 'N/A';
}