fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=atlanta&appid=2ba30299663ddd2ea7871a5e569b1def&units=imperial"
    )
    .then(response => response.json())
    .then(body => {
        document.getElementById("weather").innerHTML = body.main.temp + "°";
    })
    .catch(error => alert("Please add your api key to the fetch url"));