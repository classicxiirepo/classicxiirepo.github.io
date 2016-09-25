window.addEventListener("load", function() {
   document.body.style.width='100%';
   document.body.style.height='100%';
}, false);

function notif(){
    if (groovyAPI.isShowingNotifications()){
        $('#brush,#clock,#day').animate({'margin-top': ShiftUp_Notif + "%",}, 200);
    } else {
        $('#brush,#clock,#day').animate({'margin-top': OriginalPos + "%",}, 500);
    }
    setTimeout(notif, 1000);      
};

notif();