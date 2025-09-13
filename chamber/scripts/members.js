const url = 'data/members.json';
const membersContainer = document.querySelector(".members-container");
const cardsBtn = document.querySelector("#cardsBtn");
const listBtn = document.querySelector("#listBtn");

cardsBtn.addEventListener("click", () => {
    membersContainer.classList.add("cards");
    membersContainer.classList.remove("list");
})


listBtn.addEventListener("click", () => {
    membersContainer.classList.remove("cards");
    membersContainer.classList.add("list");
})

const getMembershipLevel = (membershipLevel) => {
    switch (membershipLevel) {
        case 1:
            return "member";
        case 2:
            return "silver";
        case 3:
            return "gold";
        default:
            return membershipLevel;
    }
}

const displayMembers = (members) => {
    members.forEach(member => {
        const container = document.createElement("section");
        const image = document.createElement("img");
        const name = document.createElement("a");
        const address = document.createElement("p");
        const phonenumber = document.createElement("p");
        const membershipLevel = document.createElement("p");

        image.src = member.logo;
        image.alt = member.name;
        image.width = 96;
        image.height = 96;
        image.loading = 'lazy';

        name.textContent = member.name;
        name.href = member.website;
        name.target = "_blank";

        address.textContent = member.address;
        phonenumber.textContent = member.phonenumber;

        membershipLevel.textContent = `Membership level: ${getMembershipLevel(member.membershipLevel)}`;
        membershipLevel.classList.add("membership-level")

        container.append(image, name, address, phonenumber, membershipLevel);
        membersContainer.appendChild(container);
    });
}

async function getMembersData() {
    const response = await fetch(url);
    const data = await response.json();

    displayMembers(data.members);
}

getMembersData();