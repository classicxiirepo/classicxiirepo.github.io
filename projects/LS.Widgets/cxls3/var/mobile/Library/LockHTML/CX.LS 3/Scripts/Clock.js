window.addEventListener("load", function() {
   document.body.style.width='100%';
   document.body.style.height='100%';
}, false);

function updateClock() {
var currentTime = new Date();
var currentHours = currentTime.getHours();
var currentMinutes = currentTime.getMinutes();
var currentMinutes1 = currentTime.getMinutes();
var currentMinutesunit = currentTime.getMinutes ( );
var currentSeconds = currentTime.getSeconds();
var currentDate = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate();
timeOfDay = ( currentHours < 12 ) ? "am" : "pm";

if (Clock == "24h"){
	timeOfDay = "";
	currentHours = ( currentHours < 10 ? "" : "" ) + currentHours;
	currentMinutes1= ( currentMinutes1< 10 ? "0" : "" ) + currentMinutes1;
	currentTimeString = currentHours + currentMinutes + currentMinutesunit;
	currentTimeString1 = currentHours + ":" + currentMinutes1;
}
if (Clock == "12h"){
	currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
	currentHours = ( currentHours == 0 ) ? 12 : currentHours;
	currentMinutes1= ( currentMinutes1< 10 ? "0" : "" ) + currentMinutes1;
	currentTimeString1 = currentHours + ":" + currentMinutes1;
}

document.getElementById("hour").innerHTML = currentHours_name_array[currentHours];
document.getElementById("minute").innerHTML = currentMinutes_name_array[currentMinutes];
document.getElementById("minutesunit").innerHTML = currentMinutesunit_name_array[currentMinutesunit];
document.getElementById("day").innerHTML = days[currentTime.getDay()];
document.getElementById("month").innerHTML = months[currentTime.getMonth()];
document.getElementById("date").innerHTML = currentDate;
}

function init(){
updateClock();
setInterval("updateClock();", 1000);
}


