const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=16.76&lon=-3.00&appid=8f64f7bd173873c29de23465453d150a';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&lat=16.76&lon=-3.00&appid=8f64f7bd173873c29de23465453d150a';

const displayWeather = (data) => {
    const currentTemp = document.querySelector('#current-temp');
    const weatherIcon = document.querySelector('#weather-icon');
    const description = document.querySelector('figcaption');

    currentTemp.textContent = data.main.temp;

    weatherIcon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.alt = data.weather[0].description;

    description.textContent = data.weather[0].description;
};

const displayForecast = (data) => {
    const days = [data.list[4], data.list[12], data.list[20]]; // 3 days forecast at 12 pm
    const forecastContainer = document.querySelector("#forecast");

    days.forEach(day => {
        const dayTemp = document.createElement("p");
        const dayOfWeek = getDayOfWeek(new Date(day.dt_txt).getDay());

        dayTemp.textContent = `The temperature for ${dayOfWeek} is going to be ${day.main.temp} °C`;
        forecastContainer.append(dayTemp);
    })
};

const getDayOfWeek = (day) => {
    switch (day) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return day;
    }
};

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

(async () => {
    const forecastData = await apiFetch(forecastUrl);
    const weatherData = await apiFetch(weatherUrl);

    displayWeather(weatherData);
    displayForecast(forecastData);
})();