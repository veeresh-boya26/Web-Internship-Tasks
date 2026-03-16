async function getWeather() {

let city = document.getElementById("city").value;

let apiKey = "b951f3528d8acf4178806cbb970d3a6a";

let url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=metric";

try {

let response = await fetch(url);
let data = await response.json();

if(data.cod != 200){
document.getElementById("result").innerHTML = "City not found";
return;
}

document.getElementById("result").innerHTML =
"Temperature: " + data.main.temp + " °C <br>" +
"Weather: " + data.weather[0].description;

}
catch(error){
document.getElementById("result").innerHTML = "Error getting weather data";
}

}