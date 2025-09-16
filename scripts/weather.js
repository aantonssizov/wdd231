const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.63&units=metric&appid=11a3187600a64bd0eb21ef73a0fd62fb';

const displayResults = (data) => {
    const currentTemp = document.querySelector('#current-temp');
    const weatherIcon = document.querySelector('#weather-icon');
    const description = document.querySelector('figcaption');

    currentTemp.textContent = data.main.temp;

    weatherIcon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.alt = data.weather[0].description;

    description.textContent = data.weather[0].description;
};

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data); // testing only
            displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();