import { events } from "../data/events.mjs";

const SELECTED_FILTER_KEY = 'selected_filter_key';

const allEventsBtn = document.querySelector("#all-events");
const pastEventsBtn = document.querySelector("#past-events");
const upcomingEventsBtn = document.querySelector("#upcoming-events");

const renderEvents = (events) => {
    const eventsContainer = document.querySelector('.events-container');
    const renderedItems = events.map(event => {
        const section = document.createElement("section");
        const sectionTitle = document.createElement("h2");
        const sectionDescription = document.createElement("p");
        const sectionDatePElm = document.createElement("p");
        const sectionDateBElm = document.createElement("b");
        const sectionDateSpanElm = document.createElement("span");
        const sectionTypePElm = document.createElement("p");
        const sectionTypeBElm = document.createElement("b");
        const sectionTypeSpanElm = document.createElement("span");
        const sectionPricingPElm = document.createElement("p");
        const sectionPricingBElm = document.createElement("b");
        const sectionPricingSpanElm = document.createElement("span");
        const sectionAddress = document.createElement("address");

        sectionTitle.textContent = event.title;
        sectionDescription.textContent = event.description;

        sectionDateBElm.textContent = 'Date: ';
        const startDate = new Date(event.startDate).toLocaleString();
        const endDate = event.endDate ? ` - ${new Date(event.endDate).toLocaleString()}` : '';
        sectionDateSpanElm.textContent = `${startDate}${endDate}`;
        sectionDatePElm.append(sectionDateBElm, sectionDateSpanElm);

        sectionTypeBElm.textContent = 'Type: ';
        sectionTypeSpanElm.textContent = event.type;
        sectionTypePElm.append(sectionTypeBElm, sectionTypeSpanElm);

        sectionPricingBElm.textContent = 'Pricing: ';
        sectionPricingSpanElm.textContent = event.pricing;
        sectionPricingPElm.append(sectionPricingBElm, sectionPricingSpanElm);

        sectionAddress.textContent = `The event will happen at the following location: ${event.address}`;

        section.append(sectionTitle, sectionDescription, sectionDatePElm, sectionTypePElm, sectionPricingPElm, sectionAddress);

        return section;
    });

    eventsContainer.replaceChildren(...renderedItems);
};

const setSelectedFilter = () => {
    const selectedFilter = localStorage.getItem(SELECTED_FILTER_KEY);

    switch (selectedFilter) {
        case 'all-events':
            allEventsBtn.click();
            break;
        case 'past-events':
            pastEventsBtn.click();
            break;
        case 'upcoming-events':
            upcomingEventsBtn.click();
            break;
        default:
            allEventsBtn.click();
    }
};

allEventsBtn.addEventListener('click', () => {
    pastEventsBtn.classList.remove("selected");
    upcomingEventsBtn.classList.remove("selected");
    allEventsBtn.classList.add("selected");

    localStorage.setItem(SELECTED_FILTER_KEY, 'all-events');

    renderEvents(events);
});

pastEventsBtn.addEventListener('click', () => {
    pastEventsBtn.classList.add("selected");
    upcomingEventsBtn.classList.remove("selected");
    allEventsBtn.classList.remove("selected");

    localStorage.setItem(SELECTED_FILTER_KEY, 'past-events');

    const filteredEvents = events.filter(event => {
        const startDate = new Date(event.startDate);

        return Math.floor((new Date(Date.now()) - startDate) / (1000 * 60 * 60 * 24)) > 0
    });

    renderEvents(filteredEvents);
});

upcomingEventsBtn.addEventListener('click', () => {
    pastEventsBtn.classList.remove("selected");
    upcomingEventsBtn.classList.add("selected");
    allEventsBtn.classList.remove("selected");

    localStorage.setItem(SELECTED_FILTER_KEY, 'upcoming-events');

    const filteredEvents = events.filter(event => {
        const startDate = new Date(event.startDate);

        return Math.floor((new Date(Date.now()) - startDate) / (1000 * 60 * 60 * 24)) <= 0;
    });

    renderEvents(filteredEvents);
});

setSelectedFilter();