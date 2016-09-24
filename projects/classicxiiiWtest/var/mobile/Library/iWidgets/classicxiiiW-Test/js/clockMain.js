clock({
  twentyfour : twentyfour,
  padzero : padzero,
  lang : language,
  refresh : refresh,
  success: function(clock){


document.getElementById('hour').innerHTML = clock.hour(true,true); //returns the current hour set to 24hr with the zero padded

document.getElementById('minute').innerHTML = clock.minute(); //returns the current minute

document.getElementById('tod').innerHTML = clock.am(); //returns the current time of day.
      
document.getElementById('today').innerHTML = clock.sdaytext(); //returns the current day.

document.getElementById('date').innerHTML = clock.date(); //returns the current date.
      
document.getElementById('month').innerHTML = clock.smonth(); //returns the word of the current month.

document.getElementById('year').innerHTML = clock.year(); //returns the current year.

  }
});