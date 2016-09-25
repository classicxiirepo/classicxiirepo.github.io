if (Lang == "en"){
	var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
	var months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
}
if (Lang == "ca"){
	var days = ["Dom","Lun","Mar","Mie","Jue","Vie","Sab"];
	var months=['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dici'];
}
if (Lang == "fr"){
	var days = ["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"];
	var months=['Jan','Fev','Mar','Avr','Mai','Jui','Jui','Aou','Sep','Oct','Nov','Dec'];
}
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