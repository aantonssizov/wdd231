const url = 'data/members.json';
const members = await getMembersData();

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

async function getMembersData() {
    const response = await fetch(url);
    const data = await response.json();

    return data.members;
}

export { members, getMembershipLevel }
