const apiKey = "18592fc1e639d10c878c11562226a62a";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&lang=de&q=";

const search = document.querySelector(".city-input input");
const button = document.querySelector(".city-input button");
const weatherIcon = document.querySelector(".weather-icon");
const text = document.querySelector(".text");

async function checkWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);
 
    document.querySelector(".city").innerHTML = data.name;

    if(data.cod === "404"){
        document.querySelector(".city").innerHTML = "ÖHA!"
        weatherIcon.src = "icons/Arnold.gif"
        document.querySelector(".temp").innerHTML = "de Stodt gibts ned"
        text.innerHTML = "do host an Tippfehler!"
    }

    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";

    if(data.weather[0].main === "Clouds"){
        weatherIcon.src = "icons/cloudy.svg"
        text.innerHTML = "Heint spuit de Sun verstecka"

    }else if(data.weather[0].main === "Clear"){
        weatherIcon.src = "icons/clear_day.svg"
        text.innerHTML = "Es scheint de Sun, geh auße und tring a Bier"

    }else if(data.weather[0].main === "Thunderstorm"){
        weatherIcon.src = "icons/thunderstorms.svg"
        text.innerHTML = "Geh schnö eine sunst trifft di da Blitz"

    }else if(data.weather[0].main === "Drizzle"){
        weatherIcon.src = "icons/drizzle.svg"
        text.innerHTML = "Es trepfet, oba ned da Wossahohn"

    }else if(data.weather[0].main === "Snow"){
        weatherIcon.src = "icons/snow.svg"
        text.innerHTML = "A guats Weda zum Skifoan"

    }else if(data.weather[0].main === "Rain"){
        weatherIcon.src = "icons/rain.svg"
        text.innerHTML = "Heint schitts wie Sau, geh ned auße!"

    }else if(data.weather[0].main === "Mist"){
        weatherIcon.src = "icons/mist.svg"
        text.innerHTML = "Na du bist ned bsoffn, es nebet wirkli"

    }else if(data.weather[0].main === "Haze"){
        weatherIcon.src = "icons/haze.svg"
        text.innerHTML = "Heint hots an gscheidn Dunst"

    }else if(data.weather[0].main === "Dust"){
        weatherIcon.src = "icons/dust.svg"
        text.innerHTML = "Es staubt mehr wie in Kolumbien"

    }else if(data.weather[0].main === "Fog"){
        weatherIcon.src = "icons/fog.svg"
        text.innerHTML = "Na du bist ned bsoffn, es nebet wirkli"

    }else if(data.weather[0].main === "Tornado"){
        weatherIcon.src = "icons/tornado.svg"
        text.innerHTML = "Ui, aufpassen sunst wachlst di davoh!"
    }
}

button.addEventListener("click", ()=>{checkWeather(search.value)})


