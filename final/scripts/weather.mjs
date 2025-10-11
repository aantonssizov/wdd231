const url = 'https://api.openweathermap.org/data/2.5/weather?lat=50.104036&lon=8.66810&units=metric&appid=8f64f7bd173873c29de23465453d150a';

const fetchWeatherApi = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        renderData(data);
    } catch (error) {
        console.error(error);
    }
};

const renderData = (data) => {
    const img = document.querySelector('.weather-block img');
    const description = document.querySelector('#weather-description');
    const temp = document.querySelector('#weather-temp');
    const pressure = document.querySelector('#weather-pressure');
    const humidity = document.querySelector('#weather-humidity');
    const visibility = document.querySelector('#weather-visibility');
    const wind = document.querySelector('#weather-wind');

    img.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    img.alt = `Weather icon for ${data.weather[0].description}`;
    img.loading = 'lazy';

    description.textContent = data.weather[0].description;
    temp.textContent = `${data.main.temp}°C`;
    pressure.textContent = `${data.main.pressure}hPa`;
    humidity.textContent = `${data.main.humidity}%`;
    visibility.textContent = `${data.visibility}m`;
    wind.textContent = `${data.wind.speed}m/s ${data.wind.deg}°`;
};

fetchWeatherApi();