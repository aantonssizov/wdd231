import { placesOfInterest } from "../data/places-of-interest.mjs";

const lastVisitedKey = 'LAST_VISITED';
const firstVisitKey = 'FIRST_VISIT';

const placesContainer = document.querySelector(".places-container");
const daysSinceElm = document.querySelector("p#daysSince");

const renderPlaces = (places) => {
    const sections = places.map(place => {
        const section = document.createElement("section");
        const figure = document.createElement("figure");
        // const caption = document.createElement("figcaption");
        const img = document.createElement("img");
        const h2 = document.createElement("h2");
        const address = document.createElement("address");
        const description = document.createElement("p");
        const learnMoreBtn = document.createElement("button");

        img.src = place.image;
        img.alt = `Image for ${place.name}`;
        img.loading = 'lazy';
        img.width = '300';
        img.height = '200';

        h2.textContent = place.name;
        address.textContent = place.address;
        description.textContent = place.description;
        learnMoreBtn.textContent = 'Learn More';

        figure.appendChild(img);
        section.append(figure, h2, address, description, learnMoreBtn);

        return section;
    });

    placesContainer.replaceChildren(...sections);
};

const createWelcomeBackMessage = () => {
    const firstVisit = localStorage.getItem(firstVisitKey) === null ? true : false;
    let lastVisited = Number(localStorage.getItem(lastVisitedKey) ?? Date.now());

    const daysDifference = Math.floor((Date.now() - lastVisited) / (24 * 60 * 60 * 1000));

    if (firstVisit) {
        daysSinceElm.textContent = 'Welcome! Let us know if you have any questions.';
        localStorage.setItem(firstVisitKey, false);
    } else if (daysDifference === 0) {
        daysSinceElm.textContent = 'Back so soon! Awesome!';
    } else if (daysDifference === 1) {
        daysSinceElm.textContent = 'You last visited 1 day ago.';
    } else {
        daysSinceElm.textContent = `You last visited ${daysDifference} days ago.`;
    }

    localStorage.setItem(lastVisitedKey, Date.now());
};

createWelcomeBackMessage();
renderPlaces(placesOfInterest);
