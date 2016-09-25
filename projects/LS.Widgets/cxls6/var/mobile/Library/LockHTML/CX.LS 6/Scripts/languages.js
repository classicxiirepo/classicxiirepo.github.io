if (Lang == "en"){
	   var 
days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
           var 
weatherdesc = ["Tornado", "Tropical Storm", "Hurricane", "Thunderstorm", "Thunderstorm", "Snow", "Sleet", "Sleet", "Freezing Drizzle", "Drizzle", "Freezing Rain", "Showers", "Showers", "Flurries", "Snow", "Snow", "Snow", "Hail", "Sleet", "Dust", "Fog", "Haze", "Smoky", "Blustery", "Windy", "Cold", "Cloudy", "Cloudy", "Cloudy", "Cloudy", "Cloudy", "Clear", "Sunny", "Fair", "Fair", "Sleet", "Hot", "Thunderstorms", "Thunderstorms", "Thunderstorms", "Showers", "Heavy Snow", "Light Snow", "Heavy Snow", "Partly Cloudy", "Thunderstorm", "Snow", "Thunderstorm", "blank"];
	   var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
}
if (Lang == "fr"){
	    var days = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
	    var months=['Janvier','Fevrier','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Decembre'];
             var 
weatherdesc = ["Tornade", "Tropical", "Ouragan", "Orages Violents", "Orages", "Pluie", "Pluie", "Neige", "Bruine", "Bruine", "Pluie", "Averses", "Averses", "Quelques Flocons", "Faibles Chutes de Neige", "Rafales de Neige", "Neige", "GrÃƒÂªle", "Neige Fondue", "PoussiÃƒÂ©reux", "Brouillard", "Brume", "Brumeux", "TempÃƒÂªte", "Vent", "Temps Froid", "Temps Nuageux ", "TrÃƒÂ¨s Nuageux", "TrÃƒÂ¨s Nuageux", "Nuageux", "Nuageux", "Temps Clair", "Ensoleille", "Beau Temps", "Beau Temps", "Pluie et GrÃƒÂªles", "Temps Chaud", "Orages IsolÃƒÂ©s", "Orages Eparses", "Orages Eparses", "Averses Eparses", "Fortes Chutes de Neige", "Chutes de Neige Eparses", "Fortes Chutes de Neige", "Nuageux", "Orages", "Chute de Neige", "Orages IsolÃƒÂ©s", "Non Disponible"];
}
if (Lang == "sp"){
            var 
days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
            var 
months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
            var 
weatherdesc = ["Tornado", "Tormenta Tropical", "Huracan", "Tormentas Electricas Severas", "Tormentas Electricas", "Mezcla de Lluvia y Nieve", "Mezcla de lluvia y aguanieve", "Mezcla de nieve y aguaniev", "Llovizna helada", "Llovizna", "Lluvia bajo cero", "Chubascos", "Chubascos", "Rafagas de nieve", "Ligeras precipitaciones de nieve", "Viento y nieve", "Nieve", "Granizo", "Aguanieve", "Polvareda", "Neblina", "Bruma", "Humeado", "Tempestuoso", "Vientoso", "Frio", "Nublado ", "Mayormente nublado", "Mayormente nublado", "despejado", "despejado", "Despejado", "Soleado", "Lindo", "Lindo", "Mezcla de lluvia y granizo", "Caluroso", "Tormentas electricas aisladas", "Tormentas electricas dispersas", "Tormentas electricas dispersas", "Chubascos dispersos", "Nieve fuerte", "Precipitaciones de nieve dispersas", "Nieve fuerte", "despejado", "Lluvia con truenos y relampagos", "Precipitaciones de nieve", "Tormentas aisladas", "No disponible"];
}
if (Lang == "de") {
    var days = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
    var months = ["Januar", "Februar", "MÃ¤rz", "April", "Mai", "Juni", "Ju li", "August", "September", "Oktober", "November", "Dez ember"];
    var weatherdesc = ["Tornado", "Tropischer Sturm", "Wirbelsturm", "Schwere Gewitter", "Gewitter", "Regen und Schnee", "Graupelschauer", "Schneeregen", "Gefrierender Nieselregen", "Nieselregen", "Gefrierender Regen", "Schauer", "Schauer", "SchneegestÃ¶ber", "Leichte Schneeschauer", "Schneetreiben", "Schnee", "Hagel", "Schneeregen", "Staubig", "Nebelig", "Dunstschleier", "Dunstig", "StÃ¼rmisch", "Windig", "Kalt", "BewÃ¶lkt", "Meist BewÃ¶lkt", "Meist BewÃ¶lkt", "BewÃ¶lkt", "BewÃ¶lkt", "Klar", "Sonnig", "Heiter", "Heiter", "Regen und Hagel", "Heiss", "Ã–rtliche Gewitter", "Vereinzelte Gewitter", "Vereinzelte Gewitter", "Vereinzelte Schauer", "Starker Schneefall", "Vereinzelte Schneeschauer", "Starker Schneefall", "BewÃ¶lkt", "Gewitter", "Scheeschauer", "Ã–rtliche Gewitterschauer", "Nicht VerfÃ¼gbar"];
}
if (Lang == "cz") {
            var 
days = ["NedÄ›le", "PondÄ›lÃ­", "ÃšterÃ½", "StÅ™eda", "ÄŒtvrtek", "PÃ¡tek", "Sobota"];
            var 
months = ["Leden", "Ãšnor", "BÅ™ezen", "Duben", "KvÄ›ten", "ÄŒerven", "ÄŒervenec", "Srpen", "ZÃ¡Å™Ã­", "Å˜Ã­jen", "Listopad", "Prosinec"];
            var 
weatherdesc = ["TornÃ¡do", "TropickÃ¡ bouÅ™e", "HurikÃ¡n", "BouÅ™e", "BouÅ™e", "SnÄ›Å¾enÃ­", "DÃ©Å¡Å¥ a snÃ­h", "DÃ©Å¡Å¥ a snÃ­h", "MrznoucÃ­ mrholenÃ­", "MrholenÃ­", "MrznoucÃ­ dÃ©Å¡Å¥", "PÅ™ehÃ¡Åˆky", "PÅ™ehÃ¡Åˆky", "Poryvy vÄ›tru", "SnÄ›Å¾enÃ­", "SnÄ›Å¾enÃ­", "SnÄ›Å¾enÃ­", "Kroupy", "DÃ©Å¡Å¥ a snÃ­h", "Prach", "Mlhy", "Å˜Ã­dkÃ© mlhy", "KouÅ™", "VÄ›trno s bouÅ™kami", "VÄ›trno", "Chladno", "OblaÄno", "OblaÄno", "OblaÄno", "OblaÄno", "OblaÄno", "Jasno", "SluneÄno", "KrÃ¡snÄ›", "KrÃ¡snÄ›", "DÃ©Å¡Å¥ a snÃ­h", "Horko", "BouÅ™e", "BouÅ™e", "BouÅ™e", "PÅ™ehÃ¡Åˆky", "HustÃ© snÄ›Å¾enÃ­", "LehkÃ© snÄ›Å¾enÃ­", "HustÃ© snÄ›Å¾enÃ­", "Polojasno", "BouÅ™e", "SnÄ›Å¾enÃ­", "BouÅ™e", "prÃ¡zdnÃ©"];
}
if (Lang == "nl") {
            var 
days = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];
            var
months = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"];
            var 
weatherdesc = ["Tornado", "Tropische Storm", "Orkaan", "Onweer", "Onweer", "Sneeuw", "Natte sneeuw", "Natte sneeuw", "Hagel", "Miezer", "Hagel", "Buien", "Buien", "Natte sneeuw", "Sneeuw", "Sneeuw", "Sneeuw", "Hagel", "Natte sneeuw", "Stof", "Mist", "Nevel", "Dampig", "Blustery", "Winderig", "Koud", "Bewolkt", "Bewolkt", "Bewolkt", "Bewolkt", "Bewolkt", "Helder", "Zon", "Normaal", "Normaal", "Natte sneeuw", "Heet", "Onweer", "Onweer", "Onweer", "Buien", "Zware sneeuw", "Lichte sneeuw", "Zware sneeuw", "Licht bewolkt", "Onweer", "Sneeuw", "Onweer", "blank"];
}