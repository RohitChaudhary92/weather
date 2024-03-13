const cityName=document.getElementById("cityName")
		const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
		const options = {
		  method: 'GET',
		  headers: {
			'X-RapidAPI-Key': 'cc2424561cmshff72ee0d1801621p1c0631jsne380ecea3ac0',
			'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		  }
		};
		
	const getWeather=(city)=>{
	cityName.innerHTML=city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city +'', options).then(response=> response.json())
	.then((response)=>{
	console.log(response)
	// cloud_pct.innerHTML=response.cloud_pct
	temp.innerHTML=response.temp
	tempp.innerHTML=response.temp
	feels_like.innerHTML=response.feels_like
	humidity.innerHTML=response.humidity
	humidity2.innerHTML=response.humidity
	min_temp.innerHTML=response.min_temp
	max_temp.innerHTML=response.max_temp
	wind_speed.innerHTML=response.wind_speed
	wind_speed2.innerHTML=response.wind_speed
	wind_degrees.innerHTML=response.wind_degrees
	sunrise.innerHTML=response.sunrise
	sunset.innerHTML=response.sunset
} )
.catch(err=>console.error(err));
	}
submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather(city.value)
})
getWeather("Delhi")

//Also corrected
// document.addEventListener('DOMContentLoaded', async function() {
// 	 const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
// 	 const options = {
// 	  method: 'GET',
// 	  headers: {
// 	   'X-RapidAPI-Key': 'cc2424561cmshff72ee0d1801621p1c0631jsne380ecea3ac0',
// 	   'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	  }
// 	 };
	 
// 	 try {
// 	  const response = await fetch(url, options);
// 	  const result = await response.json(); // Parse the response to JSON
// 	  console.log(result);
// 	  cloud_pct.innerHTML = result.cloud_pct;
// 	  temp.innerHTML = result.temp;
// 	  feels_like.innerHTML = result.feels_like;
// 	  humidity.innerHTML = result.humidity;
// 	  min_temp.innerHTML = result.min_temp;
// 	  max_temp.innerHTML = result.max_temp;
// 	  wind_speed.innerHTML = result.wind_speed;
// 	  wind_degrees.innerHTML = result.wind_degrees;
// 	  sunrise.innerHTML = result.sunrise;
// 	  sunset.innerHTML = result.sunset;
// 	 } 
// 	 catch (error) {
// 	  console.error(error);
// 	 }
// 	});
	
	  
	  












