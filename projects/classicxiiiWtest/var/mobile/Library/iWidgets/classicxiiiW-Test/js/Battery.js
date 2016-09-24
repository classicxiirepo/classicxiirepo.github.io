
var Level = "";
var State = "";

$.ajaxSetup({
cache: false,
headers: {'Cache-Control': 'no-cache'}
});

function init() {

refreshLocationTimer = setTimeout(init, 10*1000);

jQuery.get('file:///private/var/mobile/Library/BatteryStats.txt', function(appdata) {

var myvar = appdata;
var substr = appdata.split('\n');
var Level=substr[0].split(':')[1];
var State=substr[1].split(':')[1];

if( Level > 0  && Level <= 10 )  document.getElementById("BatteryImage").src="Images/Battery/B1.png";
if( Level > 10  && Level <= 20 )  document.getElementById("BatteryImage").src="Images/Battery/B2.png";
if( Level > 20 && Level <= 30 )  document.getElementById("BatteryImage").src="Images/Battery/B3.png";
if( Level > 30 && Level <= 40 ) document.getElementById("BatteryImage").src="Images/Battery/B4.png";
if( Level > 40 && Level <= 50 ) document.getElementById("BatteryImage").src="Images/Battery/B5.png";
if( Level > 50 && Level <= 60 ) document.getElementById("BatteryImage").src="Images/Battery/B6.png";
if( Level > 60 && Level <= 70 ) document.getElementById("BatteryImage").src="Images/Battery/B7.png";
if( Level > 70 && Level <= 80 ) document.getElementById("BatteryImage").src="Images/Battery/B8.png";
if( Level > 80 && Level <= 90 ) document.getElementById("BatteryImage").src="Images/Battery/B9.png";
if( Level > 90 && Level <= 100 ) document.getElementById("BatteryImage").src="Images/Battery/B10.png";



document.getElementById("LevelDisplay").innerHTML = "Battery" + Level +  '%';

document.getElementById("LevelDisplay").style.position = "absolute";

document.getElementById("StateDisplay").innerHTML = State;



});

}