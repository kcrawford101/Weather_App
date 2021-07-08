// API key and fetch request
let weather = {
    apiKey: "b97e0971f053e47fa5a7a92a78b0c889",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&appid=" 
            + this.apiKey
        )
            .then ((response) => response.json())
            .then ((data) => this.displayWeather(data))
    },
// Display weather
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        // add UV index
        console.log(name,icon, description, temp, humidity, speed)
        document.querySelector(".city").innerText = "Weather in " + name;

    }
};