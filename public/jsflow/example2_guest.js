function checkStrength(pswd) {
    var fb = "Too Small"
    if (pswd.length >= 8) {
        fb = "Strong password!";
//        backendReq(pswd)
    }
    return fb;
}


console.log("loaded");

// function backendReq(pswd) {
    // var url = 'http://localhost:3030/password/?pswd=' + pswd
    // var xhttp = new XMLHttpRequest();
    // xhttp.onreadystatechange = function () {
        // if (this.readyState == 4 && this.status == 200) {            
            // document.getElementById("backend").innerHTML = JSON.parse(xhttp.responseText).reply
        // }
    // };
    // xhttp.open("GET", url, true);
    // xhttp.send();
// }
