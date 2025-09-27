const submitBtn = document.querySelector('button[type=submit]');

submitBtn.addEventListener('click', () => {
    const timestampInpt = document.querySelector('#timestamp-inpt');
    timestampInpt.value = new Date(Date.now()).toString();
});

const openCloseDetails = (learnMoreBtn, dialog) => {
    learnMoreBtn.addEventListener('click', () => {
        dialog.showModal();
        const closeBtn = dialog.querySelector('button');
        closeBtn.addEventListener('click', () => {
            dialog.close();
        });
    });
};

openCloseDetails(document.querySelector('#np-learn-more-btn'), document.querySelector('#np-dialog'));
openCloseDetails(document.querySelector('#bronze-learn-more-btn'), document.querySelector('#bronze-dialog'));
openCloseDetails(document.querySelector('#silver-learn-more-btn'), document.querySelector('#silver-dialog'));
openCloseDetails(document.querySelector('#gold-learn-more-btn'), document.querySelector('#gold-dialog'));