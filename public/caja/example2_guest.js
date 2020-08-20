function checkStrength(ev) {
    if (ev.pswd.length < 8) {
        pswdService.feedback("Too small");
    }
    else {
        pswdService.feedback("Strong password!");
        backendReq(ev.pswd)
    }
}



function backendReq(pswd) {
    var url = 'http://localhost:3030/password/?pswd=' + pswd
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {            
            document.getElementById("backend").innerHTML = JSON.parse(xhttp.responseText).reply
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}



pswdService.register(checkStrength)