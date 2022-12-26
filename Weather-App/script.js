// Rapid API :- Weather by API-Ninjas (Not Used in the Project Due to the API down time)

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'ce1402f125mshb018f7d197f2eb2p1b6efejsn1608aebcae62',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };

	// 1. Openweathermap API for containing data:-

const getWeather = (city) =>{
	cityName.innerHTML = city;
	fetch('https://api.openweathermap.org/data/2.5/weather?appid=061b9a5f540a9d3f220d1993844040b7&q='+city) // we have to attach the city name dynamically with URL
	.then(response => response.json())

	.then((response) => {

		console.log(response);

	    cloud_pct.innerHTML = response.clouds.all;
    	temp.innerHTML = Math.floor(response.main.temp - 273.15);      
    	temp2.innerHTML = Math.floor(response.main.temp - 273.15);      
    	feels_like.innerHTML = Math.floor(response.main.feels_like - 273.15);      
    	humidity.innerHTML = response.main.humidity;      
    	humidity2.innerHTML = response.main.humidity;      
    	min_temp.innerHTML = Math.floor(response.main.temp_min - 273.15);
    	max_temp.innerHTML = Math.floor(response.main.temp_max - 273.15);
    	wind_speed.innerHTML = response.wind.speed;      
    	wind_speed2.innerHTML = response.wind.speed;      
    	wind_degrees.innerHTML = response.wind.deg;      
    	sunrise.innerHTML = response.sys.sunrise;      
    	sunset.innerHTML = response.sys.sunset;

		let today = new Date();
		console.log(today);
		let day = today.getDay();
		let dayWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		let dayWeeks = dayWeek[day];
		let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		let month_Year = today.getMonth();
		let Actual_Month = month[month_Year];
		let date = today.getDate();
		let year = today.getFullYear();
		let hour = today.getHours();
		let minute = today.getMinutes();
		let sec = today.getSeconds();
		console.log("Current Date")
		 calendar.textContent =  `${dayWeeks}, ${Actual_Month}, ${date}, ${year}, ${hour}:${minute}:${sec}`;
	})
	.catch(err => console.error(err));
	
	// 2. Openweathermap API for containing news:-
	fetch('https://api.openweathermap.org/data/2.5/weather?appid=061b9a5f540a9d3f220d1993844040b7&q='+city) 
	.then(response => response.json())
	.then(data => {
		// do something with the weather news data here
		console.log(data);
		const imp = news_forecast.innerHTML = `Weather Condition : ${data.weather[0].description}`;
		visibility.innerHTML = data.visibility;
		pressure.innerHTML = data.main.pressure;
		Info_country.innerHTML = data.sys.id;
		console.log(imp);
	})
	.catch(error => {
		console.error(error);
	});
}
submit.addEventListener("click", (e)=>{
	e.preventDefault();
	getWeather(city.value);
})

// We have three events :- keyup events, input events, change events 
// We have designed the Debounce Function for the Event Handling
console.log(city);
function Debounce(func, delay){
	let timeout;
	return function(...args){
		if(timeout)
		console.log("Clearing Time Out");
		clearTimeout(timeout);
		timeout = setTimeout(()=>{
			func.call(this, ...args);
		}, delay)
	}
}
function FindSuggestion(e){
	console.log(e.target.value);
}
const DecorateFunction =  Debounce(FindSuggestion, 1500)

city.addEventListener("input", DecorateFunction);
getWeather("Karachi");


//  Weather for other common places
const obj_city = ["Shangai", "Boston", "Delhi", "New York", "Dallas", "Rome"];
console.log(obj_city.length);
for (let i = 0; i < obj_city.length; i++) {

  fetch('https://api.openweathermap.org/data/2.5/weather?appid=061b9a5f540a9d3f220d1993844040b7&q=' + obj_city[i])
  .then(response => response = response.json())
  .then((data) => {
	console.log(data);
	document.getElementById(`${obj_city[i]}1`).innerHTML = data.clouds.all;
	document.getElementById(`${obj_city[i]}2`).innerHTML = Math.floor(data.main.feels_like - 273.15);
	document.getElementById(`${obj_city[i]}3`).innerHTML = data.main.humidity;
	document.getElementById(`${obj_city[i]}4`).innerHTML = Math.floor(data.main.temp_max - 273.15);
	document.getElementById(`${obj_city[i]}5`).innerHTML = Math.floor(data.main.temp_min - 273.15);
	document.getElementById(`${obj_city[i]}6`).innerHTML = data.sys.sunrise;
	document.getElementById(`${obj_city[i]}7`).innerHTML = data.sys.sunset;
	document.getElementById(`${obj_city[i]}8`).innerHTML = Math.floor(data.main.temp - 273.15);
	document.getElementById(`${obj_city[i]}9`).innerHTML = data.wind.deg;
	document.getElementById(`${obj_city[i]}10`).innerHTML = data.wind.speed;
}).catch((error) => {
	console.log("Inside catch block")
	console.log(error)
})
}
