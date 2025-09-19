import { members, getMembershipLevel } from './members.mjs';

const spotlightsContainer = document.querySelector(".spotlights-container");

const displaySpotlights = (members) => {
    members.forEach(member => {
        const spotlightContainer = document.createElement("section");

        const title = document.createElement("h2");
        const tagLine = document.createElement("p");

        const spotlightInfoContainer = document.createElement("div");

        const logo = document.createElement("img");

        const emailPElm = document.createElement("p");
        const emailBElm = document.createElement("b");
        const emailAElm = document.createElement("a");

        const phonePElm = document.createElement("p");
        const phoneBElm = document.createElement("b");
        const phoneAElm = document.createElement("a");

        const urlPElm = document.createElement("p");
        const urlBElm = document.createElement("b");
        const urlAElm = document.createElement("a");

        const addressPElm = document.createElement("p");
        const addressBElm = document.createElement("b");

        const membershipLevelPElm = document.createElement("p");
        const membershipLevelBElm = document.createElement("b");

        title.textContent = member.name;
        tagLine.textContent = member.tagLine;

        logo.classList.add("spotlight-logo");
        logo.src = member.logo;
        logo.alt = `${member.name} logo`;
        logo.loading = 'lazy';

        emailBElm.textContent = "Email: ";
        emailAElm.textContent = member.email;
        emailAElm.href = `mailto:${member.email}`;
        emailPElm.append(emailBElm, emailAElm);

        phoneBElm.textContent = "Phone: ";
        phoneAElm.textContent = member.phonenumber;
        phoneAElm.href = `tel:${member.phonenumber}`;
        phonePElm.append(phoneBElm, phoneAElm);

        urlBElm.textContent = "Url: ";
        urlAElm.textContent = member.website;
        urlAElm.href = member.website;
        urlPElm.append(urlBElm, urlAElm);

        addressBElm.textContent = 'Address: ';
        addressPElm.textContent = member.address;
        addressPElm.prepend(addressBElm);

        membershipLevelBElm.textContent = "Membership Level: ";
        membershipLevelPElm.textContent = getMembershipLevel(member.membershipLevel);
        membershipLevelPElm.prepend(membershipLevelBElm);

        spotlightInfoContainer.classList.add("spotlight-info-container");
        spotlightInfoContainer.append(logo, emailPElm, phonePElm, urlPElm, addressPElm, membershipLevelPElm);

        spotlightContainer.classList.add("spotlight-container");
        spotlightContainer.append(title, tagLine, spotlightInfoContainer);

        spotlightsContainer.append(spotlightContainer);
    });
};

const getRandomItem = (arr) => {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

const filteredMembers = members.filter(member => member.membershipLevel != 1);
const randomMembers = [];

do {
    const randomMember = getRandomItem(filteredMembers);
    if (!randomMembers.includes(randomMember))
        randomMembers.push(randomMember);
} while (randomMembers.length !== 2);

displaySpotlights(randomMembers);
