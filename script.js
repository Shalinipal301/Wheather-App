const apikey = "3265874a2c77ae4a04bb96236a642d2f";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

const url = (city) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

async function getWeatherByLocation(city) {
    const resp = await fetch(url(city), { origin: "cors" });
    const respData = await resp.json();

    console.log(respData);

    addWeatherToPage(respData);
}

function addWeatherToPage(data) {
    const temp = KtoC(data.main.temp);
    const {id}= data.weather[0];

    const weather = document.createElement("div1");
    weather.classList.add("weather");

    weather.innerHTML = `
    <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> ${temp}°c <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /></h2>
    <small>${data.weather[0].main}</small>
`;
    if (id<250){
        document.getElementById("demo1").style.backgroundColor = " #aafdaa";
        
        
      }
      else if (id<350){
        document.getElementById("demo1").style.backgroundColor = " #cbf707";
        

      }
      else if (id<550){
        document.getElementById("demo1").style.backgroundColor = "#0f5753";
        

      }
      else if (id<650){
        document.getElementById("demo1").style.backgroundColor = "#eb9b08";
        
      }
      else if (id<800){
        document.getElementById("demo1").style.backgroundColor = "#c3aafd";
        
      }
      else if (id===800){
        document.getElementById("demo1").style.backgroundColor = "#f77ff1";
       
      }
      else if(id>800){
        document.getElementById("demo1").style.backgroundColor = "#fa9aa7";
        
      }

          
        
              

    
    main.innerHTML = "";

    main.appendChild(weather);
}

function KtoC(K) {
    return Math.floor(K - 273.15);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const city = search.value;

    if (city) {
        getWeatherByLocation(city);
    }
});