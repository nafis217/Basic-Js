const apiKey = "33018b826f9066b41099d422cd98c170";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.getElementById("search-box");
const searchBtn = document.getElementById("search-btn");
const weatherIcon = document.getElementById("weather-icon");

searchBtn.addEventListener("click", () => {
    getWeather(searchBox.value);
});
    async function getWeather(city) {
    // const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    const data = await response.json();
    console.log(data);
    document.getElementById("city").innerText = data?.name;
    document.getElementById("temp").innerText = Math?.round(data.main.temp) + "°C";
    document.getElementById("humidity").innerText = data?.main.humidity + "%";
    document.getElementById("wind").innerText = data?.wind.speed + " km/h";
}












