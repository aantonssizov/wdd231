const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let dateOfBirth = document.createElement("p");
        let placeOfBirth = document.createElement("p");
        let dateOfDeath = document.createElement("p");
        let yearsAsProphet = document.createElement("p");
        let order = document.createElement("p");
        let numberOfChildren = document.createElement("p");
        let portrait = document.createElement("img");

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        dateOfBirth.textContent = `Date of Birth: ${prophet.birthdate}`;
        placeOfBirth.textContent = `Place of Birth: ${prophet.birthplace}`;
        dateOfDeath.textContent = `Date of Death: ${prophet.death}`;
        yearsAsProphet.textContent = `Years as Prophet: ${prophet.length}`;
        order.textContent = `Order: ${prophet.order}`;
        numberOfChildren.textContent = `Number of Children: ${prophet.numofchildren}`;

        portrait.src = prophet.imageurl;
        portrait.alt = `Portrait of ${fullName.textContent}`;
        portrait.loading = 'lazy';
        portrait.setAttribute("width", "340px");
        portrait.setAttribute("height", "440px");

        card.appendChild(fullName);
        card.appendChild(dateOfBirth);
        card.appendChild(placeOfBirth);
        card.appendChild(dateOfDeath);
        card.appendChild(yearsAsProphet);
        card.appendChild(order);
        card.appendChild(numberOfChildren);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data);
    displayProphets(data.prophets);
}

getProphetData();