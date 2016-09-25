if (Lang == "ca"){
	var days = ["Domingo","L","M","M","J","V","S"];
	var date=['00','uno','dos','tres','cuatro','cinco','seis','siete','ocho','nueve','diez','once','doce','trece','catorce','quince','dieciseis','diecisiete','dieciocho','diecinueve','veinte','veintiuno','veintidos','veintitres','veinticuatro','veinticinco','veinitiseis','veintisiete','veintiocho','veintinueve','treinta','treinta y uno'];
	var months=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
}
if (Lang == "en"){
	var days = ["S","M","T","W","T","F","S"];
	var date=['00','One','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty','twenty-one','twenty-two','twenty-three','twenty-four','twenty-five','twenty-six','twenty-seven','twenty-eight','twenty-nine','thirty','thirty-one'];
	var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
}
if (Lang == "fr"){
	var days = ["Dimanche","L","M","M","J","V","S"];
    var date=['00','Un','deux','trois','quatre','cinq', "esix", "esincluso",'huit','neuf','dix','onze','douze','treize','quatorze','quinze', "seize", 'dix-sept','dix-huit','dix-neuf','vingt','vingt et un','vingt-deux','vingt-trois','vingt-quatre','vingt-cinq','vingt-six','vingt-sept','vingt-huit','vingt-neuf','trente','trente et un'];
	var months=['Janvier','Fevrier','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Decembre'];
}

function updateClock() {
var currentTime = new Date();
var currentHours = currentTime.getHours();
var currentMinutes = currentTime.getMinutes();
var currentMinutes1 = currentTime.getMinutes();
var currentMinutesunit = currentTime.getMinutes ( );
var currentSeconds = currentTime.getSeconds();
var currentDate = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate();
var currentYear = currentTime.getFullYear();
timeOfDay = ( currentHours < 12 ) ? "am" : "pm";

if (Lang == "ca"){
   var currentHours_name_array = new Array ("doce", "una", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez", "once", "doce", "una", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez", "once", "doce")
   var currentMinutes_name_array = new Array ("en punto", "y", "y", "y", "y", "y", "y", "y", "y", "y", "y diez", "y once", "y doce", "y trece", "y catorce", "y quince", "y dieciseis", "y diecisiete", "y dieciocho", "y diecinueve", "y veinte", "veinti", "veinti", "veinti", "veinti", "veinti", "veinti", "veinti", "veinti", "veinti", "y treinta", "treinta", "treinta", "treinta", "treinta", "treinta", "treinta", "treinta", "treinta", "treinta", "cuarenta", "y cuarenta", "cuarenta", "cuarenta", "cuarenta", "cuarenta", "cuarenta", "cuarenta", "cuarenta", "cuarenta", "y cincuenta", "cincuenta", "cincuenta", "cincuenta", "cincuenta", "cincuenta", "cincuenta", "cincuenta", "cincuenta", "cincuenta", "")
   var currentMinutesunit_name_array = new Array ("", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", " ", "y uno", "y dos", "y tres", "y cuatro", "y cinco", "y seis", "y siete", "y ocho", "y nueve", " ", "y uno", "y dos", "y tres", "y cuatro", "y cinco", "y seis", "y siete", "y ocho", "y nueve", " ", "y uno", "y dos", "y tres", "y cuatro", "y cinco", "y seis", "y siete", "y ocho", "y nueve", "")
}
if (Lang == "en"){
   var currentHours_name_array = new Array ("Twelve", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve")
   var currentMinutes_name_array = new Array ("O'", "O'", "O'", "O'", "O'", "O'", "O'", "O'", "O'", "O'", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "Sixteen", "Seventeen", "eighteen", "Nineteen", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "")
   var currentMinutesunit_name_array = new Array ("clock", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "", "", "", "", "", "", "", "", "", "", "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "")
}
if (Lang == "fr"){
   var currentHours_name_array = new Array ("minuit", "une", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "midi", "une", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "minuit")
   var currentMinutes_name_array = new Array ("et", "et", "et", "et", "et", "et", "et", "et", "et", "et", "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf", "vingt", "vingt", "vingt", "vingt", "vingt", "vingt", "vingt", "vingt", "vingt", "vingt", "trente", "trente", "trente", "trente", "trente", "trente", "trente", "trente", "trente", "trente", "quarante", "quarante", "quarante", "quarante", "quarante", "quarante", "quarante", "quarante", "quarante", "quarante", "cinquante", "cinquante", "cinquante", "cinquante", "cinquante", "cinquante", "cinquante", "cinquante", "cinquante", "cinquante", "")
   var currentMinutesunit_name_array = new Array ("heure", "une", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "une", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", " ", "une", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", " ", "une", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", " ", "une", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "")
}

if (Clock == "24h"){
	timeOfDay = "";
	currentHours = ( currentHours < 10 ? "" : "" ) + currentHours;
	currentMinutes1= ( currentMinutes1< 10 ? "0" : "" ) + currentMinutes1;
	currentTimeString = currentHours + currentMinutes + currentMinutesunit;
	currentTimeString1 = currentHours + ":" + currentMinutes1;
	document.getElementById("ampm").innerHTML = timeOfDay;
}
if (Clock == "12h"){
	currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
	currentHours = ( currentHours == 0 ) ? 12 : currentHours;
	currentMinutes1= ( currentMinutes1< 10 ? "0" : "" ) + currentMinutes1;
	currentTimeString1 = currentHours + ":" + currentMinutes1;
	document.getElementById("ampm").innerHTML = timeOfDay;
}

document.getElementById("hour").innerHTML = currentHours_name_array[currentHours];
document.getElementById("minute").innerHTML = currentMinutes_name_array[currentMinutes];
document.getElementById("minutesunit").innerHTML = currentMinutesunit_name_array[currentMinutesunit];

document.getElementById("day").innerHTML = days[currentTime.getDay()];
document.getElementById("date").innerHTML = date[currentTime.getDate()];
document.getElementById("month").innerHTML = months[currentTime.getMonth()];
document.getElementById("year").innerHTML = currentYear;
}

function init(){
updateClock();
setInterval("updateClock();", 1000);
}