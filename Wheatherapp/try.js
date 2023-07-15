const main_Division = document.querySelector("#main");
const Api = "116ac04a9a45a0546f051907feb5c62c";

const deleteWeatherInfo = () => {
  while (main_Division.firstChild) {
    main_Division.removeChild(main_Division.firstChild);
  }
};

const done = async (cityname="Southampton") => {
  console.log("city name ", cityname);
  deleteWeatherInfo(); // Delete previous weather information
  
  const doing = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=${Api}`);
  const data = await doing.json();
  console.log(data)
  if(data.cod!=200){
    alert("error")
    return;
}

const built = document.createElement("div");

built.innerHTML = `
<div class="outside">
<img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Weather Icon">
<div class="des" style="font-size:12px"><i>${data.weather[0].description}</i></div>
<div style="font-size:1.5rem" class="weather-info.country">${data.name}</div>
<div > ${data.main.temp}°C</div> 
<div class=descriptionBox>
  <div class="weather-info"> Pressure: ${data.main.pressure}mBar</div>
  <div class="weather-info">Windspeed: ${data.wind.speed}m/s</div>
  <div class="weather-info">Humidity: ${data.main.humidity}%</div>
<div>
<div>
`;
  

  main_Division.append(built);
  console.log(main_Division);
  console.log(data);
};
function currentData() {
  let currentDate = new Date();
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  let currentDayAndDate = currentDate.toLocaleDateString(undefined, options);
  document.getElementById('current-day-and-date').textContent = currentDayAndDate;
}
currentData()
document.querySelector("#btnsearch").addEventListener("click", () => done(document.querySelector("#searchBar").value));

document.querySelector("#searchBar").addEventListener("keydown", (e) => {
    if (e.key==="Enter"){
        done(document.querySelector("#searchBar").value);

    }

});
done()