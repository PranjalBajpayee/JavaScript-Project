const apikey="42f1807fe7129d7b9d63ab9c05db5c01"
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input")
const searchBtn=document.querySelector(".search button")

async function checkWeather(city){
    const response= await fetch(apiurl + city + `&appid=${apikey}`)
    var data= await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "KM/HR";

    
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value)
})
checkWeather(city);