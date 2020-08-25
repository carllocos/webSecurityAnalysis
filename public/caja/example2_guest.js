function checkStrength(ev) {
    if (ev.pswd.length < 8) { pswdService.feedback("Too small (min. 8)"); }
    else {
        pswdService.feedback("Strong password!");
        var url = 'http://localhost:3030/password/?pswd=' + ev.pswd
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {  
                var beReply = JSON.parse(xhttp.responseText).reply;
                pswdService.feedback(beReply);
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    }
}



pswdService.register(checkStrength)