const selectElement = document.getElementById('city-select');
const getWeatherBtn = document.getElementById('get-weather-btn');


getWeatherBtn.addEventListener('click', function() {
    const selectedCity = selectElement.value;
    if (selectedCity) {
        showWeather(selectedCity);        
    }
});



// assign data to the elements
async function showWeather(city) {

        const data = await getWeather(city);
        if (!data || !data.weather) {
            alert('Something went wrong, please try again later');
            return;
        }
        
        const weathericon = document.getElementById('weather-icon');
        const maintemp = document.getElementById('main-temperature');
        const feels = document.getElementById('feels-like');
        const humidity = document.getElementById('humidity');
        const wind = document.getElementById('wind');
        const windgust = document.getElementById('wind-gust');
        const weathermain = document.getElementById('weather-main');
        const location = document.getElementById('location');

        document.querySelector('.weather-container').style.display = 'block';
       
        data.weather[0].icon ? weathericon.src = data.weather[0].icon : weathericon.src = "N/A";
        data.main.temp ? maintemp.textContent = 'Temperature: ' + data.main.temp + '°C' : maintemp.textContent = "N/A";
        data.main.feels_like ? feels.textContent = 'Feels like: ' + data.main.feels_like + '°C' : feels.textContent = "N/A";
        data.main.humidity ? humidity.textContent = 'Humidity: ' + data.main.humidity + '%' : humidity.textContent = "N/A";
        data.wind.speed ? wind.textContent = 'Wind: ' + data.wind.speed + ' m/s' : wind.textContent = "N/A";
        data.wind.gust ? windgust.textContent = 'Gusts: ' + data.wind.gust + ' m/s' : windgust.textContent = "N/A";
        data.weather[0].main ? weathermain.textContent = 'Weather: ' + data.weather[0].main : weathermain.textContent = "Weather: N/A";
        data.name ? location.textContent = 'Location: ' + data.name : location.textContent = "Location: N/A";

}


// api data fetching function
async function getWeather(city) {
    try {    
        const response = await fetch('https://weather-proxy.freecodecamp.rocks/api/city/' + city);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
            }
        const data = await response.json();
        return data;
    }
    catch(error) {
        console.log(error);
    return null;
    };

}

