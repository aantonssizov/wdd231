const thankyouPElm = document.querySelector("#thankyou");
const params = new URLSearchParams(window.location.search);

thankyouPElm.textContent = `Thank you, ${params.get('firstname')}, for filling up the form. ${params.get('coachname')} will contact you soon.`;