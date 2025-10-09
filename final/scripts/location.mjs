const map = L.map('map').setView([50.10170101250017, 8.670476206908251], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const marker = L.marker([50.10170101250017, 8.670476206908251]).addTo(map);