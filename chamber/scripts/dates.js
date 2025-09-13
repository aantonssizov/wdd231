let currentYear = new Date().getFullYear();
let lastModified = document.lastModified;

const currentyearElm = document.getElementById("currentyear");
const lastModifiedElm = document.getElementById("lastModified");

currentyearElm.textContent = `©${currentYear}`;
lastModifiedElm.textContent = `Last modification: ${lastModified}`;