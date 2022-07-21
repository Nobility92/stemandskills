const d = new Date();
let datetime = d.getFullYear()+'/'+d.getMonth()+'/'+d.getDate()+ '  ' + d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
document.getElementById("update").innerHTML = datetime;

//for weather diplay
const url = "https://api.openweathermap.org/data/2.5/onecall?lat=36.97820922794823&lon=-109.1270983583244&exclude=hourly,minutely&appid=063dbb4eea74383c891a7e335525315b";