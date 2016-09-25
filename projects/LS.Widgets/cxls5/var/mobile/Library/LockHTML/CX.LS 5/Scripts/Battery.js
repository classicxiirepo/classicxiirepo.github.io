function batteryStats(options) {
    'use strict';
    var url = 'file:///private/var/mobile/Library/BatteryStats.txt',
        callAjax = function (url) {
            var txt;
            txt = new XMLHttpRequest();
            txt.onreadystatechange = function () {
                if (txt.readyState === 4) {
                    var stats = {},
                        response = txt.responseText.split('\n');
                    stats.percent = Number(response[0].split(':')[1]);
                    stats.charging = response[1].split(':')[1];
                    options.success(stats);
                }
            };
            txt.open("GET", url, true);
            txt.send();
            setTimeout(function () {
                callAjax(url);
            }, options.refresh);
        };
    callAjax(url);
}

batteryStats({
	refresh : 5000, // in milliseconds
	success: function(battery){
        document.getElementById('battery').innerHTML = battery.percent + "%";
        document.getElementById('charging').innerHTML = battery.charging;
	}
});