const apiKey = "45a11430a85d93d5584225932217b8ae";

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("city");
const weather = document.getElementById("weather");

searchBtn.addEventListener("click", getWeather);

async function getWeather(){

    const city = cityInput.value.trim();

    if(city === ""){
        alert("Please enter a city name.");
        return;
    }

    const url =
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{

        const response = await fetch(url);
        const data = await response.json();

        if(data.cod != 200){
            weather.innerHTML = `
                <h2>City not found</h2>
            `;
            return;
        }

        weather.innerHTML = `
            <h2>${data.name}</h2>
            <h3>🌤️ ${data.main.temp}°C</h3>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind: ${data.wind.speed} m/s</p>
        `;

    }

    catch(error){

        weather.innerHTML = `
            <h2>Something went wrong.</h2>
        `;

    }

}
