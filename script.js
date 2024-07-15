async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'c99dd3b78f65a58b1d72f1527a6f6f88';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; // Use apiKey variable here

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        if (response.ok) {
            displayWeather(data);
        } else {
            document.getElementById('weather-info').innerHTML = `<p>${data.message}</p>`;
        }
    } catch (error) {
        document.getElementById('weather-info').innerHTML = `<p>Error fetching weather data</p>`;
    }
}

function displayWeather(data) {
    const weatherInfo = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity} %</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
    document.getElementById('weather-info').innerHTML = weatherInfo;
}
















