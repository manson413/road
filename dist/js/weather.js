'use strict';

fetch('http://api.openweathermap.org/data/2.5/weather?id=706483&appid=ef7f81bcd7e6fb42615118db01c6e020')
.then(function(resp){ return resp.json() })
.then(function(data){
    let tempValue = data.main.temp;
    let temp = Math.ceil( tempValue - 273.15);
    if(temp > 0){
        document.getElementById('temp').innerHTML = `+${temp}&deg;C`;
    } else {
        document.getElementById('temp').innerHTML = `${temp}&deg;C`;
    }
})
.catch(function(){
    //catch any errors
});