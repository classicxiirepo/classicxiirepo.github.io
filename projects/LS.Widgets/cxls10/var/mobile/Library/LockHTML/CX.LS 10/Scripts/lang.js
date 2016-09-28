/*
             ,---.      .-._            _,---.            ,--.-,  ,-,--.
   _.-.    .--.'  \    /==/ \  .-._ _.='.'-,  \          |==' -|,-.'-  _\
 .-,.'|    \==\-/\ \   |==|, \/ /, /==.'-     /          |==|- /==/_ ,_.'
|==|, |    /==/-|_\ |  |==|-  \|  /==/ -   .-'         __|==|, \==\  \
|==|- |    \==\,   - \ |==| ,  | -|==|_   /_,-.     ,--.-'\=|- |\==\ -\
|==|, |    /==/ -   ,| |==| -   _ |==|  , \_.' )    |==|- |=/ ,|_\==\ ,\
|==|- `-._/==/-  /\ - \|==|  /\ , \==\-  ,    ( .=. |==|. /=| -/==/\/ _ |
/==/ - , ,|==\ _.\=\.-'/==/, | |- |/==/ _  ,  /:=; :\==\, `-' /\==\ - , /
`--`-----' `--`        `--`./  `--``--`------'  `=`  `--`----'  `--`---'
** Creator: JunesiPhone & modified by Classicxii
** Website: http://junesiphone.com/libraries
** Language file for clock and weather.
** Usage translate[current].weekday[5]
*/

"use strict";
var current = (window.navigator.language.length >= 2) ? window.navigator.language.split('-')[0] : 'en',
    $$ = function (el) {
        return document.querySelector(el);
    },
    translate = {
        en: {
            weekday: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            sday: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            greeting: ["Good morning","Good afternoon","Good evening","Good night"],
            charging: "currently charging",
	     discharging: "currently unplugged",
	     battlevel: "battery level",
            smonth: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            condition: ["Tornado", "Tropical Storm", "Hurricane", "Thunderstorm", "Thunderstorm", "Snow", "Sleet", "Sleet", "Freezing Drizzle", "Drizzle", "Freezing Rain", "Showers", "Showers", "Flurries", "Snow", "Snow", "Snow", "Hail", "Sleet", "Dust", "Fog", "Haze", "Smoky", "Blustery", "Windy", "Cold", "Cloudy", "Cloudy", "Cloudy", "Cloudy", "Cloudy", "Clear", "Sunny", "Fair", "Fair", "Sleet", "Hot", "Thunderstorms", "Thunderstorms", "Thunderstorms", "Showers", "Heavy Snow", "Light Snow", "Heavy Snow", "Partly Cloudy", "Thunderstorm", "Snow", "Thunderstorm", "blank"]
        },
        nl: {
            weekday: ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"],
            sday: ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"],
            month: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"],
            smonth: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            greeting: ["Goedemorgen","Goedenmiddag","Goedenavond","goede nacht"],
            charging: "momenteel opladen",
            discharging: "momenteel niet ingeplugd",
            battlevel: "batterijniveau",
            condition: ["Tornado", "Tropische Storm", "Orkaan", "Onweer", "Onweer", "Sneeuw", "Natte sneeuw", "Natte sneeuw", "Hagel", "Miezer", "Hagel", "Buien", "Buien", "Natte sneeuw", "Sneeuw", "Sneeuw", "Sneeuw", "Hagel", "Natte sneeuw", "Stof", "Mist", "Nevel", "Dampig", "Blustery", "Winderig", "Koud", "Bewolkt", "Bewolkt", "Bewolkt", "Bewolkt", "Bewolkt", "Helder", "Zon", "Normaal", "Normaal", "Natte sneeuw", "Heet", "Onweer", "Onweer", "Onweer", "Buien", "Zware sneeuw", "Lichte sneeuw", "Zware sneeuw", "Licht bewolkt", "Onweer", "Sneeuw", "Onweer", "blank"]
        },
        ru: {
            weekday: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
            sday: ["Вос", "Пон", "Вто", "Сре", "Чет", "Пят", "Суб"],
            month: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
            smonth: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
            greeting: ["доброе утро","Добрый день","Добрый вечер","доброй ночи"],
            charging: "В данный момент зарядка",
            discharging: "В данный момент отключен от сети",
            battlevel: "уровень заряда батареи",
            condition: ["Торнадо", "Тропический шторм", "Ураган", "Гроза", "Гроза", "Снег", "Мокрый снег", "Мокрый снег", "Изморозь", "Морось", "Ледяной дождь", "Ливень", "Ливень", "Сильные порывы ветра", "Снег", "Снег", "Снег", "Град", "Мокрый снег", "Пыль", "Туман", "Легкий туман", "Туманно", "Порывисто", "Ветренно", "Холодно", "Облачно", "Облачно", "Облачно", "Облачно", "Облачно", "Ясно", "Солнечно", "Ясно", "Ясно", "Мокрый снег", "Жарко", "Гроза", "Гроза", "Гроза", "Ливень", "Снегопад", "Небольшой снег", "Снегопад", "Переменная облачность", "Гроза", "Снег", "Гроза", "пусто"]
        },
        cz: {
            weekday: ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"],
            sday: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"],
            month: ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"],
            smonth: ["Led", "Úno", "Bře", "Dub", "Kvě", "Čen", "Čec", "Srp", "Zář", "Říj", "Lis", "Pro"],
            greeting: ["dobré ráno","dobré odpoledne","dobrý večer","dobrou noc"],
            charging: "v současné době nabíjení",
            discharging: "v současné době odpojit",
            battlevel: "nabití baterie",
            condition: ["Tornádo", "Tropická bouře", "Hurikán", "Bouře", "Bouře", "Sněžení", "Déšť a sníh", "Déšť a sníh", "Mrznoucí mrholení", "Mrholení", "Mrznoucí déšť", "Přeháňky", "Přeháňky", "Poryvy větru", "Sněžení", "Sněžení", "Sněžení", "Kroupy", "Déšť a sníh", "Prach", "Mlhy", "Řídké mlhy", "Kouř", "Větrno s bouřkami", "Větrno", "Chladno", "Oblačno", "Oblačno", "Oblačno", "Oblačno", "Oblačno", "Jasno", "Slunečno", "Krásně", "Krásně", "Déšť a sníh", "Horko", "Bouře", "Bouře", "Bouře", "Přeháňky", "Husté sněžení", "Lehké sněžení", "Husté sněžení", "Polojasno", "Bouře", "Sněžení", "Bouře", "prázdné"]
        },
        it: {
            weekday: ['Domenica', 'Luned&#236', 'Marted&#236', 'Mercoled&#236', 'Gioved&#236', 'Venerd&#236', 'Sabato'],
            sday: ["Sun", "Mon", "Mar", "Mer", "Gio", "Ven", "Sat"],
            month: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
            smonth: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
            greeting: ["Buongiorno","buon pomeriggio","Buonasera","buona notte"],
            charging: "attualmente ricarica",
            discharging: "attualmente scollegato",
            battlevel: "livello della batteria",
            condition: ["Tornado", "Tempesta Tropicale", "Uragano", "Temporali Forti", "Temporali", "Pioggia mista a Neve", "Nevischio", "Nevischio", "Pioggia Gelata", "Pioggerella", "Pioggia Ghiacciata", "Pioggia", "Pioggia", "Neve a Raffiche", "Neve Leggera", "Tempesta di Neve", "Neve", "Grandine", "Nevischio", "Irregolare", "Nebbia", "Foschia", "Fumoso", "Raffiche di Vento", "Ventoso", "Freddo", "Nuvoloso", "Molto Nuvoloso", "Molto Nuvoloso", "Nuvoloso", "Nuvoloso", "Sereno", "Sereno", "Bel Tempo", "Bel Tempo", "Pioggia e Grandine", "Caldo", "Temporali Isolati", "Temporali Sparsi", "Temporali Sparsi", "Rovesci Sparsi", "Neve Forte", "Nevicate Sparse", "Neve Forte", "Nuvoloso", "Rovesci Temporaleschi", "Rovesci di Neve", "Temporali isolati", "Non Disponibile"]
        },
        sp: {
            weekday: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
            sday: ["Sol", "Mon", "Mar", "Mie", "Jue", "Vie", "Sat"],
            month: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
            smonth: ["Ene", "Feb", "Mar", "Abr", "Mayo", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dic"],
            greeting: ["Buenos días","buenas tardes","buenas tardes","buenas noches"],
            charging: "actualmente carga",
            discharging: "actualmente desenchufado",
            battlevel: "nivel de bateria",
            condition: ["Tornado", "Tormenta Tropical", "Huracan", "Tormentas Electricas Severas", "Tormentas Electricas", "Mezcla de Lluvia y Nieve", "Mezcla de lluvia y aguanieve", "Mezcla de nieve y aguaniev", "Llovizna helada", "Llovizna", "Lluvia bajo cero", "Chubascos", "Chubascos", "Rafagas de nieve", "Ligeras precipitaciones de nieve", "Viento y nieve", "Nieve", "Granizo", "Aguanieve", "Polvareda", "Neblina", "Bruma", "Humeado", "Tempestuoso", "Vientoso", "Frio", "Nublado ", "Mayormente nublado", "Mayormente nublado", "despejado", "despejado", "Despejado", "Soleado", "Lindo", "Lindo", "Mezcla de lluvia y granizo", "Caluroso", "Tormentas electricas aisladas", "Tormentas electricas dispersas", "Tormentas electricas dispersas", "Chubascos dispersos", "Nieve fuerte", "Precipitaciones de nieve dispersas", "Nieve fuerte", "despejado", "Lluvia con truenos y relampagos", "Precipitaciones de nieve", "Tormentas aisladas", "No disponible"]
        },
        de: {
            weekday: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
            sday: ["Son", "Mon", "Die", "Mit", "Don", "Fre", "Sam"],
            month: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Ju li", "August", "September", "Oktober", "November", "Dez ember"],
            smonth: ["Jan", "Feb", "Mä", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez "],
            greeting: ["Guten Morgen","Guten Nachmittag","Guten Abend","Gute Nacht"],
            charging: "zur Zeit Lade",
            discharging: "zur Zeit akustisch",
            battlevel: "Batterie Level",
            condition: ["Tornado", "Tropischer Sturm", "Wirbelsturm", "Schwere Gewitter", "Gewitter", "Regen und Schnee", "Graupelschauer", "Schneeregen", "Gefrierender Nieselregen", "Nieselregen", "Gefrierender Regen", "Schauer", "Schauer", "Schneegestöber", "Leichte Schneeschauer", "Schneetreiben", "Schnee", "Hagel", "Schneeregen", "Staubig", "Nebelig", "Dunstschleier", "Dunstig", "Stürmisch", "Windig", "Kalt", "Bewölkt", "Meist Bewölkt", "Meist Bewölkt", "Bewölkt", "Bewölkt", "Klar", "Sonnig", "Heiter", "Heiter", "Regen und Hagel", "Heiss", "Örtliche Gewitter", "Vereinzelte Gewitter", "Vereinzelte Gewitter", "Vereinzelte Schauer", "Starker Schneefall", "Vereinzelte Schneeschauer", "Starker Schneefall", "Bewölkt", "Gewitter", "Scheeschauer", "Örtliche Gewitterschauer", "Nicht Verfügbar"]
        },
        fr: {
            weekday: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
            sday: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
            month: ["Janvie", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
            smonth: ["Jan", "Fév", "Mar", "Avr", "Mai", "Jui", "Jui", "Aoû", "Sep", "Oct", "Nov", "Déc"],
            greeting: ["matin","après midi","soir","nuit"],
            charging: "actuellement, en ce moment se charge",
            discharging: "actuellement, en ce moment débranché",
            battlevel: "niveau de batterie",
            condition: ["Tornade", "Tropical", "Ouragan", "Orages Violents", "Orages", "Pluie", "Pluie", "Neige", "Bruine", "Bruine", "Pluie", "Averses", "Averses", "Quelques Flocons", "Faibles Chutes de Neige", "Rafales de Neige", "Neige", "GrÃªle", "Neige Fondue", "PoussiÃ©reux", "Brouillard", "Brume", "Brumeux", "TempÃªte", "Vent", "Temps Froid", "Temps Nuageux ", "TrÃ¨s Nuageux", "TrÃ¨s Nuageux", "Nuageux", "Nuageux", "Temps Clair", "Ensoleille", "Beau Temps", "Beau Temps", "Pluie et GrÃªles", "Temps Chaud", "Orages IsolÃ©s", "Orages Eparses", "Orages Eparses", "Averses Eparses", "Fortes Chutes de Neige", "Chutes de Neige Eparses", "Fortes Chutes de Neige", "Nuageux", "Orages", "Chute de Neige", "Orages IsolÃ©s", "Non Disponible"]
        },
        zh: {
            weekday: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
            sday: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
            month: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
            smonth: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
            greeting: ["早上好","下午好","晚上好","晚安"],
            charging: "目前 充电",
            discharging: "目前 不插电",
            battlevel: "电池电量",
            condition: ["龙卷风", "热带风暴", "飓风", "雷暴", "雷暴", "雪", "雨雪", "雨雪", "冻毛毛雨", "细雨", "冻雨", "淋浴", "淋浴", "飘雪", "雪", "雪", "雪", "Hail", "雨雪", "尘", "牙齿", "阴霾", "烟", "风起云涌", "有风", "冷", "多云", "多云", "多云", "多云", "多云", "明确", "晴朗", "公平", "公平", "雨雪", "Hot", "雷暴", "雷暴", "雷暴", "淋浴", "大雪", "小雪", "大雪", "半 多云", "雷暴", "雪", "雷暴", "空白"]
        },
        he: {
            weekday: ["שבת", "שישי", "חמיש", "רביעי", "שלישי", "שני", "ראשון"],
            sday: ["ז’", "ו’", "ה", "ד’", "ג’", "ב’", "א’"],
            month: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"],
            smonth: ["ינו", "פבר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוג", "ספט", "אוקט", "נוב", "דצמ"],
            greeting: ["בוקר טוב","אחר הצהריים טובים","ערב טוב","לילה טוב"],
            charging: "כַּיוֹם טְעִינָה",
            discharging: "כַּיוֹם לְהוֹצִיא אֶת הַתֶקַע",
            battlevel: "רמת הסוללה",
            condition: ["טורנדו", "סופה טרופית", "הוריקן", "סופת-רעמים", "סופת-רעמים", "שלג", "ברד קל", "ברד קל", "ברד", "טפטוף", "טפטוף", "מקלחת", "מקלחת", "משב רוח", "שלג", "שלג", "שלג", "ברד", "ברד קל", "Dust", "ערפל", "אובך", "אובך", "סוער", "סוער", "קר", "מעונן", "מעונן", "מעונן", "מעונן", "מעונן", "בהיר", "שמשי", "נאה", "נאה", "ברד קל", "חם", "סופת-רעמים", "סופת-רעמים", "סופת-רעמים", "מקלחת", "שלג כבד", "שלג קל", "שלג כבד", "מעונן חלקית", "סופת-רעמים", "שלג", "סופת-רעמים", "ריק"]
        },
        pl: {
            weekday: ["Niedziela", "Poniedzialek", "Wtorek", "Sroda", "Czwartek", "Piatek", "Sobota"],
            sday: ["Nie", "Pon", "Wto", "Sro", "Czw", "Pia", "Sob"],
            month: ["Styczen", "Luty", "Marzec", "Kwiecien", "Maj", "Czerwiec", "Lipiec", "Sierpien", "Wrzesien", "Pazdziernik", "Listopad", "Grudzien"],
            smonth: ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Paz", "Lis", "Gru"],
            greeting: ["Dzień dobry","Dzień dobry","Dobry wieczór","Dobranoc"],
            charging: "obecnie ładowanie",
            discharging: "obecnie wyjąć wtyczkę",
            battlevel: "poziom naładowania baterii",
            condition: ["Tornado", "Tropikalna Burza", "Huragan", "Burza Z Piorunami", "Burza Z Piorunami", "Snieg", "Deszcz Ze Sniegiem", "Deszcz Ze Sniegiem", "Zamarzajaca Mzawka", "Mzawka", "Zamarzajacy Deszcz", "Przelotny Deszcz", "Przelotny Deszcz", "Przelotny Deszcz", "Snieg", "Snieg", "Snieg", "Grad", "Deszcz Ze Sniegiem", "Pyl", "Mgla", "Mgla", "Zadymiony", "Wietrznie", "Wietrznie", "Zimno", "Pochmurnie", "Pochmurnie", "Pochmurnie", "Pochmurnie", "Pochmurnie", "Czyste Niebo", "Slonecznie", "Slonecznie", "Slonecznie", "Deszcz Ze Sniegiem", "Cieplo", "Burze z Piorunami", "Burze z Piorunami", "Burze z Piorunami", "Przelotny Deszcz", "Mocny Snieg", "Lekki Snieg", "Mocny Snieg", "Czesciowo Pochmurnie", "Burza Z Piorunami", "Snieg", "Burza Z Piorunami", "puste"]
        },
        pt: {
            weekday: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
            sday: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
            month: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
            smonth: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
            greeting: ["Bom Dia","Boa tarde","Boa noite","Boa noite"],
            charging: "atualmente carregamento",
            discharging: "atualmente desconectado",
            battlevel: "nível de bateria",
            condition: ["Tornado", "Tempestade Tropical", "Furacão", "Trovoada", "Trovoada", "Neve", "Chuva com Neve", "Chuva com Neve", "Geada", "Garoa", "Chuva Gélida", "Pancadas de Chuva", "Pancadas de Chuva", "Rajadas", "Neve", "Neve", "Neve", "Granizo", "Chuva Gélida", "Poeira", "Névoa", "Névoa", "Nebuloso", "Vendaval", "Ventando", "Frio", "Nublado", "Nublado", "Nublado", "Nublado", "Nublado", "Céu Limpo", "Ensolarado", "Bom Tempo", "Bom Tempo", "Chuva Gélida", "Quente", "Trovoadas", "Trovoadas", "Trovoadas", "Pancadas de Chuva", "Nevasca Pesada", "Nevasca Leve", "Nevasca Pesada", "Parcialmente Nublado", "Trovoada", "Neve", "Trovoada", "em branco"]
        }
    };
if (!translate[current]) {
    current = 'en';
}