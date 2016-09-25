//Languages translated were originally by Junesiphone. Code integrated & modified by Juan (@Classicxii)//

if (Lang == "en") {
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var sdays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var smonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var condition = ["Tornado", "Tropical Storm", "Hurricane", "Thunderstorm", "Thunderstorm", "Snow", "Sleet", "Sleet", "Freezing Drizzle", "Drizzle", "Freezing Rain", "Showers", "Showers", "Flurries", "Snow", "Snow", "Snow", "Hail", "Sleet", "Dust", "Fog", "Haze", "Smoky", "Blustery", "Windy", "Cold", "Mostly Cloudy", "Mostly Cloudy", "Mostly Cloudy", "Mostly Cloudy", "Mostly Cloudy", "Clear", "Sunny", "Fair", "Fair", "Sleet", "Hot", "Thunderstorms", "Thunderstorms", "Thunderstorms", "Showers", "Heavy Snow", "Light Snow", "Heavy Snow", "Partly Cloudy", "Thunderstorm", "Snow", "Thunderstorm", "blank"];
var greeting = ["Good morning","Good afternoon","Good evening","Good night"];
}
if (Lang == "fr") {
var days = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
var sdays = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
var months = ["Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Decembre"];
var smonths = ["Jan", "Fév", "Mar", "Avr", "Mai", "Jui", "Jui", "Aoû", "Sep", "Oct", "Nov", "Déc"];
var condition = ["Tornade", "Tropical", "Ouragan", "Orages Violents", "Orages", "Pluie", "Pluie", "Neige", "Bruine", "Bruine", "Pluie", "Averses", "Averses", "Quelques Flocons", "Faibles Chutes de Neige", "Rafales de Neige", "Neige", "GrÃƒÂªle", "Neige Fondue", "PoussiÃƒÂ©reux", "Brouillard", "Brume", "Brumeux", "TempÃƒÂªte", "Vent", "Temps Froid", "Temps Nuageux ", "TrÃƒÂ¨s Nuageux", "TrÃƒÂ¨s Nuageux", "Nuageux", "Nuageux", "Temps Clair", "Ensoleille", "Beau Temps", "Beau Temps", "Pluie et GrÃƒÂªles", "Temps Chaud", "Orages IsolÃƒÂ©s", "Orages Eparses", "Orages Eparses", "Averses Eparses", "Fortes Chutes de Neige", "Chutes de Neige Eparses", "Fortes Chutes de Neige", "Nuageux", "Orages", "Chute de Neige", "Orages IsolÃƒÂ©s", "Non Disponible"];
var greeting = ["matin","après midi","soir","nuit"];
}
if (Lang == "sp") {
var days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
var sdays = ["Sol", "Mon", "Mar", "Mie", "Jue", "Vie", "Sat"];
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var smonths = ["Ene", "Feb", "Mar", "Abr", "Mayo", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dic"];
var condition = ["Tornado", "Tormenta Tropical", "Huracan", "Tormentas Electricas Severas", "Tormentas Electricas", "Mezcla de Lluvia y Nieve", "Mezcla de lluvia y aguanieve", "Mezcla de nieve y aguaniev", "Llovizna helada", "Llovizna", "Lluvia bajo cero", "Chubascos", "Chubascos", "Rafagas de nieve", "Ligeras precipitaciones de nieve", "Viento y nieve", "Nieve", "Granizo", "Aguanieve", "Polvareda", "Neblina", "Bruma", "Humeado", "Tempestuoso", "Vientoso", "Frio", "Nublado ", "Mayormente nublado", "Mayormente nublado", "despejado", "despejado", "Despejado", "Soleado", "Lindo", "Lindo", "Mezcla de lluvia y granizo", "Caluroso", "Tormentas electricas aisladas", "Tormentas electricas dispersas", "Tormentas electricas dispersas", "Chubascos dispersos", "Nieve fuerte", "Precipitaciones de nieve dispersas", "Nieve fuerte", "despejado", "Lluvia con truenos y relampagos", "Precipitaciones de nieve", "Tormentas aisladas", "No disponible"];
var greeting = ["Buenos días","buenas tardes","buenas tardes","buenas noches"];
}
if (Lang == "de") {
var days = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
var sdays = ["Son", "Mon", "Die", "Mit", "Don", "Fre", "Sam"];
var months = ["Januar", "Februar", "MÃ¤rz", "April", "Mai", "Juni", "Ju li", "August", "September", "Oktober", "November", "Dez ember"]; 
var smonths = ["Jan", "Feb", "Mä", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez "];
var condition = ["Tornado", "Tropischer Sturm", "Wirbelsturm", "Schwere Gewitter", "Gewitter", "Regen und Schnee", "Graupelschauer", "Schneeregen", "Gefrierender Nieselregen", "Nieselregen", "Gefrierender Regen", "Schauer", "Schauer", "SchneegestÃ¶ber", "Leichte Schneeschauer", "Schneetreiben", "Schnee", "Hagel", "Schneeregen", "Staubig", "Nebelig", "Dunstschleier", "Dunstig", "StÃ¼rmisch", "Windig", "Kalt", "BewÃ¶lkt", "Meist BewÃ¶lkt", "Meist BewÃ¶lkt", "BewÃ¶lkt", "BewÃ¶lkt", "Klar", "Sonnig", "Heiter", "Heiter", "Regen und Hagel", "Heiss", "Ã–rtliche Gewitter", "Vereinzelte Gewitter", "Vereinzelte Gewitter", "Vereinzelte Schauer", "Starker Schneefall", "Vereinzelte Schneeschauer", "Starker Schneefall", "BewÃ¶lkt", "Gewitter", "Scheeschauer", "Ã–rtliche Gewitterschauer", "Nicht VerfÃ¼gbar"];
var greeting = ["Guten Morgen","Guten Nachmittag","Guten Abend","Gute Nacht"];
}
if (Lang == "cz") {
var days = ["NedÄ›le", "PondÄ›lÃ­", "ÃšterÃ½", "StÅ™eda", "ÄŒtvrtek", "PÃ¡tek", "Sobota"];
var sdays = ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"];
var months = ["Leden", "Ãšnor", "BÅ™ezen", "Duben", "KvÄ›ten", "ÄŒerven", "ÄŒervenec", "Srpen", "ZÃ¡Å™Ã­", "Å˜Ã­jen", "Listopad", "Prosinec"];
var smonths = ["Led", "Úno", "Bře", "Dub", "Kvě", "Čen", "Čec", "Srp", "Zář", "Říj", "Lis", "Pro"];
var condition = ["TornÃ¡do", "TropickÃ¡ bouÅ™e", "HurikÃ¡n", "BouÅ™e", "BouÅ™e", "SnÄ›Å¾enÃ­", "DÃ©Å¡Å¥ a snÃ­h", "DÃ©Å¡Å¥ a snÃ­h", "MrznoucÃ­ mrholenÃ­", "MrholenÃ­", "MrznoucÃ­ dÃ©Å¡Å¥", "PÅ™ehÃ¡Åˆky", "PÅ™ehÃ¡Åˆky", "Poryvy vÄ›tru", "SnÄ›Å¾enÃ­", "SnÄ›Å¾enÃ­", "SnÄ›Å¾enÃ­", "Kroupy", "DÃ©Å¡Å¥ a snÃ­h", "Prach", "Mlhy", "Å˜Ã­dkÃ© mlhy", "KouÅ™", "VÄ›trno s bouÅ™kami", "VÄ›trno", "Chladno", "OblaÄno", "OblaÄno", "OblaÄno", "OblaÄno", "OblaÄno", "Jasno", "SluneÄno", "KrÃ¡snÄ›", "KrÃ¡snÄ›", "DÃ©Å¡Å¥ a snÃ­h", "Horko", "BouÅ™e", "BouÅ™e", "BouÅ™e", "PÅ™ehÃ¡Åˆky", "HustÃ© snÄ›Å¾enÃ­", "LehkÃ© snÄ›Å¾enÃ­", "HustÃ© snÄ›Å¾enÃ­", "Polojasno", "BouÅ™e", "SnÄ›Å¾enÃ­", "BouÅ™e", "prÃ¡zdnÃ©"];
var greeting = ["dobré ráno","dobré odpoledne","dobrý večer","dobrou noc"];
}
if (Lang == "nl") {
var days = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];
var sdays = ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"];
var months = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"];
var smonths = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var condition = ["Tornado", "Tropische Storm", "Orkaan", "Onweer", "Onweer", "Sneeuw", "Natte sneeuw", "Natte sneeuw", "Hagel", "Miezer", "Hagel", "Buien", "Buien", "Natte sneeuw", "Sneeuw", "Sneeuw", "Sneeuw", "Hagel", "Natte sneeuw", "Stof", "Mist", "Nevel", "Dampig", "Blustery", "Winderig", "Koud", "Bewolkt", "Bewolkt", "Bewolkt", "Bewolkt", "Bewolkt", "Helder", "Zon", "Normaal", "Normaal", "Natte sneeuw", "Heet", "Onweer", "Onweer", "Onweer", "Buien", "Zware sneeuw", "Lichte sneeuw", "Zware sneeuw", "Licht bewolkt", "Onweer", "Sneeuw", "Onweer", "blank"];
var greeting = ["Goedemorgen","Goedenmiddag","Goedenavond","goede nacht"];
}
if (Lang == "ru") {
var days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
var sdays = ["Вос", "Пон", "Вто", "Сре", "Чет", "Пят", "Суб"];
var months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
var smonths = ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"];
var condition = ["Торнадо", "Тропический шторм", "Ураган", "Гроза", "Гроза", "Снег", "Мокрый снег", "Мокрый снег", "Изморозь", "Морось", "Ледяной дождь", "Ливень", "Ливень", "Сильные порывы ветра", "Снег", "Снег", "Снег", "Град", "Мокрый снег", "Пыль", "Туман", "Легкий туман", "Туманно", "Порывисто", "Ветренно", "Холодно", "Облачно", "Облачно", "Облачно", "Облачно", "Облачно", "Ясно", "Солнечно", "Ясно", "Ясно", "Мокрый снег", "Жарко", "Гроза", "Гроза", "Гроза", "Ливень", "Снегопад", "Небольшой снег", "Снегопад", "Переменная облачность", "Гроза", "Снег", "Гроза", "пусто"];
var greeting = ["доброе утро","Добрый день","Добрый вечер","доброй ночи"];
}
if (Lang == "it") {
var days = ["Domenica", "Lunedi", "Martedi", "mercoledi", "Giovedi", "Venerdi", "Sabato"];
var sdays = ["Sun", "Mon", "Mar", "Mer", "Gio", "Ven", "Sat"];
var months = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
var smonths = ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"];
var condition = ["Tornado", "Tempesta Tropicale", "Uragano", "Temporali Forti", "Temporali", "Pioggia mista a Neve", "Nevischio", "Nevischio", "Pioggia Gelata", "Pioggerella", "Pioggia Ghiacciata", "Pioggia", "Pioggia", "Neve a Raffiche", "Neve Leggera", "Tempesta di Neve", "Neve", "Grandine", "Nevischio", "Irregolare", "Nebbia", "Foschia", "Fumoso", "Raffiche di Vento", "Ventoso", "Freddo", "Nuvoloso", "Molto Nuvoloso", "Molto Nuvoloso", "Nuvoloso", "Nuvoloso", "Sereno", "Sereno", "Bel Tempo", "Bel Tempo", "Pioggia e Grandine", "Caldo", "Temporali Isolati", "Temporali Sparsi", "Temporali Sparsi", "Rovesci Sparsi", "Neve Forte", "Nevicate Sparse", "Neve Forte", "Nuvoloso", "Rovesci Temporaleschi", "Rovesci di Neve", "Temporali isolati", "Non Disponibile"];
var greeting = ["Buongiorno","buon pomeriggio","Buonasera","buona notte"];
}
if (Lang == "zh") {
var days = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
var sdays = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
var months = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
var smonths = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"];
var condition = ["龙卷风", "热带风暴", "飓风", "雷暴", "雷暴", "雪", "雨雪", "雨雪", "冻毛毛雨", "细雨", "冻雨", "淋浴", "淋浴", "飘雪", "雪", "雪", "雪", "Hail", "雨雪", "尘", "牙齿", "阴霾", "烟", "风起云涌", "有风", "冷", "多云", "多云", "多云", "多云", "多云", "明确", "晴朗", "公平", "公平", "雨雪", "Hot", "雷暴", "雷暴", "雷暴", "淋浴", "大雪", "小雪", "大雪", "半 多云", "雷暴", "雪", "雷暴", "空白"];
var greeting = ["早上好","下午好","晚上好","晚安"];
}
if (Lang == "pt") {
var days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
var sdays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
var months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
var smonths = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
var condition = ["Tornado", "Tempestade Tropical", "Furacão", "Trovoada", "Trovoada", "Neve", "Chuva com Neve", "Chuva com Neve", "Geada", "Garoa", "Chuva Gélida", "Pancadas de Chuva", "Pancadas de Chuva", "Rajadas", "Neve", "Neve", "Neve", "Granizo", "Chuva Gélida", "Poeira", "Névoa", "Névoa", "Nebuloso", "Vendaval", "Ventando", "Frio", "Nublado", "Nublado", "Nublado", "Nublado", "Nublado", "Céu Limpo", "Ensolarado", "Bom Tempo", "Bom Tempo", "Chuva Gélida", "Quente", "Trovoadas", "Trovoadas", "Trovoadas", "Pancadas de Chuva", "Nevasca Pesada", "Nevasca Leve", "Nevasca Pesada", "Parcialmente Nublado", "Trovoada", "Neve", "Trovoada", "em branco"];
var greeting = ["Bom Dia","Boa tarde","Boa noite","Boa noite"];
}
if (Lang == "pl") {
var days = ["Niedziela", "Poniedzialek", "Wtorek", "Sroda", "Czwartek", "Piatek", "Sobota"];
var sdays = ["Nie", "Pon", "Wto", "Sro", "Czw", "Pia", "Sob"];
var months = ["Styczen", "Luty", "Marzec", "Kwiecien", "Maj", "Czerwiec", "Lipiec", "Sierpien", "Wrzesien", "Pazdziernik", "Listopad", "Grudzien"];
var smonths = ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Paz", "Lis", "Gru"];
var condition = ["Tornado", "Tropikalna Burza", "Huragan", "Burza Z Piorunami", "Burza Z Piorunami", "Snieg", "Deszcz Ze Sniegiem", "Deszcz Ze Sniegiem", "Zamarzajaca Mzawka", "Mzawka", "Zamarzajacy Deszcz", "Przelotny Deszcz", "Przelotny Deszcz", "Przelotny Deszcz", "Snieg", "Snieg", "Snieg", "Grad", "Deszcz Ze Sniegiem", "Pyl", "Mgla", "Mgla", "Zadymiony", "Wietrznie", "Wietrznie", "Zimno", "Pochmurnie", "Pochmurnie", "Pochmurnie", "Pochmurnie", "Pochmurnie", "Czyste Niebo", "Slonecznie", "Slonecznie", "Slonecznie", "Deszcz Ze Sniegiem", "Cieplo", "Burze z Piorunami", "Burze z Piorunami", "Burze z Piorunami", "Przelotny Deszcz", "Mocny Snieg", "Lekki Snieg", "Mocny Snieg", "Czesciowo Pochmurnie", "Burza Z Piorunami", "Snieg", "Burza Z Piorunami", "puste"];
var greeting = ["Dzień dobry","Dzień dobry","Dobry wieczór","Dobranoc"];
}
if (Lang == "he") {
var days = ["שבת", "שישי", "חמיש", "רביעי", "שלישי", "שני", "ראשון"];
var sdays = ["ז’", "ו’", "ה", "ד’", "ג’", "ב’", "א’"];
var months = ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"];
var smonths = ["ינו", "פבר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוג", "ספט", "אוקט", "נוב", "דצמ"];
var condition = ["טורנדו", "סופה טרופית", "הוריקן", "סופת-רעמים", "סופת-רעמים", "שלג", "ברד קל", "ברד קל", "ברד", "טפטוף", "טפטוף", "מקלחת", "מקלחת", "משב רוח", "שלג", "שלג", "שלג", "ברד", "ברד קל", "Dust", "ערפל", "אובך", "אובך", "סוער", "סוער", "קר", "מעונן", "מעונן", "מעונן", "מעונן", "מעונן", "בהיר", "שמשי", "נאה", "נאה", "ברד קל", "חם", "סופת-רעמים", "סופת-רעמים", "סופת-רעמים", "מקלחת", "שלג כבד", "שלג קל", "שלג כבד", "מעונן חלקית", "סופת-רעמים", "שלג", "סופת-רעמים", "ריק"];
var greeting = ["בוקר טוב","אחר הצהריים טובים","ערב טוב","לילה טוב"];
}