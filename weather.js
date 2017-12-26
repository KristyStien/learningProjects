//Get Location
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude; 
        var lon = position.coords.longitude;
        
   
//Get Weather Info
        var ur = "https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + lon;        
        $.getJSON(ur, function (w) {
            
            //var setup
            var bod = document.querySelector("body");
            var weather = w.weather[0].main;
            var location = w.name;
            var temp = w.main.temp;
            var cloud = w.clouds.all;
            var sunRise = w.sys.sunrise * 1000;
            var sunSet = w.sys.sunset * 1000;
            var time = Date.now();
           

            //set BG color
            if (time > sunRise && time < sunSet) {
                if (cloud > 50) {
                    bod.classList.add("cloud");
                } else {
                    bod.classList.add("sunny");
                }
            } else {
                bod.classList.add("night");
            }
        
            //Display
            var locDisp = document.getElementById("loc");
            var tempDisp = document.getElementById("temp");
            var c = document.getElementById("cel");
            var f = document.getElementById("far");

            locDisp.textContent = location;
            tempDisp.textContent = temp;


            //C to F button
            f.addEventListener("click", function () {
                var num = Number(temp);
                tempDisp.textContent = Math.floor(num * 1.8 +32);
                c.classList.add("inactive");
                f.classList.remove("inactive");
            });

            c.addEventListener("click", function () {
                tempDisp.textContent = temp;
                f.classList.add("inactive");
                c.classList.remove("inactive");
            });

            //set Icon
            var theIcon = document.querySelector("i");
            //Daytime
            if (time > sunRise && time < sunSet) {
                switch (weather) {
                    case "Thunderstorm":
                        theIcon.classList.add("wi-day-thunderstorm");    
                        break;
                    case "Drizzle":
                        theIcon.classList.add("wi-sprinkle");      
                        break;
                    case "Rain":
                        theIcon.classList.add("wi-day-rain");      
                        break;
                    case "Snow":
                        theIcon.classList.add("wi-snowflake-cold");      
                        break;  
                    case "Atmosphere":
                        theIcon.classList.add("wi-dust");      
                        break;
                    case "Clear":
                        theIcon.classList.add("wi-day-sunny");      
                        break;
                    case "Clouds":
                        theIcon.classList.add("wi-day-cloudy");
                        break;
                    case "Extreme":
                        theIcon.classList.add("wi-alien");      
                        break;
                    case "Additional":
                        theIcon.classList.add("wi-strong-wind");      
                        break;
                    default:
                        theIcon.classList.add("wi-day-sunny");      
               } 
            } else {
                //Nightime
                switch (weather) {
                    case "Thunderstorm":
                        theIcon.classList.add("wi-storm-showers");      
                        break;
                    case "Drizzle":
                        theIcon.classList.add("wi-raindrops");      
                        break;
                    case "Rain":
                        theIcon.classList.add("wi-showers");      
                        break;
                    case "Snow":
                        theIcon.classList.add("wi-snowflake-cold");      
                        break;
                    case "Atmosphere":
                        theIcon.classList.add("wi-dust");      
                        break;
                    case "Clear":
                        theIcon.classList.add("wi-night-clear");      
                        break;
                    case "Clouds":
                        theIcon.classList.add("wi-cloudy");
                        break;
                    case "Extreme":
                        theIcon.classList.add("wi-alien");      
                        break;
                    case "Additional":
                        theIcon.classList.add("wi-stars");      
                        break;
                    default:
                        theIcon.classList.add("wi-stars");      
                }
            }

        });

    });
}





