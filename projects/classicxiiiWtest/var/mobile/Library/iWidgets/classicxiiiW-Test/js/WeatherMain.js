
Weather({
    code : weathercode,
    temp : celsius,
    language : language,
    gps : gpsswitch,
    refresh : refreshrate, // in minutes
    success: function(w){
        
document.getElementById('condition').innerHTML = Fcondition[w.icon]; //condition in different languages

        document.getElementById('temp').innerHTML = w.temp + '&deg;'; 
        document.getElementById('city').innerHTML = w.city;
        document.getElementById('icon').src = 'Images/Weather/dubs/' + w.icon + '.png';

    }
});