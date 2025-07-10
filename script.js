const City = document.getElementById("location");
const coordinates = document.getElementById("lat-long");
const temperature = document.getElementById("temp");
const feels_like = document.getElementById("feel");
const Weather = document.getElementById("weather");
const description = document.getElementById("comment");
const newdesc = document.getElementById("newcomment");


const api_key = "";

const button = document.querySelector(".btn");

const city = "Lubbock";
const latitude = 33.5846;
const longitude = -101.8456;




function get_weather (city, lat, long){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api_key}&units=imperial`)// it's not quotes it's ``
    .then(res => res.json())
    .then(data => {
        console.log(data);//comment this later
        City.textContent = city;
        coordinates.textContent = lat + " ° "+ long+ " ° "; // i copied the degree symbol from the internet
        temperature.textContent = data.main.temp + " ° ";
        feels_like.textContent = "Feels Like: " + data.main.feels_like + " ° ";
        Weather.src = `./icons/${data.weather[0].icon}.png`; // the pic should change based on weather i haven't tested tho
        description.textContent = "Go out and touch some Grass!";
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        get_weather(city, latitude, longitude);
    });