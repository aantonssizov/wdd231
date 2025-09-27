const mainElm = document.querySelector("main");
const params = new URLSearchParams(window.location.search);

const firstName = document.createElement("p");
const lastName = document.createElement("p");
const email = document.createElement("p");
const phone = document.createElement("p");
const organizationName = document.createElement("p");
const timestamp = document.createElement("p");

firstName.textContent = `First Name: ${params.get('firstName')}`;
lastName.textContent = `Last Name: ${params.get('lastName')}`;
email.textContent = `Email: ${params.get('email')}`;
phone.textContent = `Phone: ${params.get('phone')}`;
organizationName.textContent = `Organization Name: ${params.get('organizationName')}`;
timestamp.textContent = `Submitted at: ${params.get('timestamp')}`;

mainElm.append(firstName, lastName, email, phone, organizationName, timestamp);