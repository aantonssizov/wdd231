const contactMikeBtn = document.querySelector("button#contact-mike");
const contactLucyBtn = document.querySelector("button#contact-lucy");
const contactThomasBtn = document.querySelector("button#contact-thomas");

const showDialog = (name) => {
    const dialog = document.querySelector("#contact-coach-dialog");

    const coachNameSelectElm = dialog.querySelector("#coach-name");
    coachNameSelectElm.value = name;

    const cancelBtn = dialog.querySelector("#close-dialog");
    cancelBtn.addEventListener("click", () => dialog.close());

    dialog.showModal();
};

contactMikeBtn.addEventListener("click", () => {
    showDialog("Mike Stenly");
});

contactLucyBtn.addEventListener("click", () => {
    showDialog("Lucy Smith");
});

contactThomasBtn.addEventListener("click", () => {
    showDialog("Thomas Fray");
});
