loadJokeService = function (divId, imgDiv, usn) {

  /**JOKE TILTE AND TEXT REQUEST**/
  var xhttp = new XMLHttpRequest();

  xhttp.onload = function () {
    var p = JSON.parse(xhttp.responseText);
    var el = "<h3>" + p.title + "</h3><br>";
    el += "<p>" + p.joke + "</p>";
    document.getElementById(divId).innerHTML = el;
  }

  xhttp.open('GET', 'http://localhost:3030/joke/?usn=' + usn);
  xhttp.send();

  /**IMAGE REQUEST **/
  var imgReq = new XMLHttpRequest();
  var email = lbl(document.getElementsByName('email')[0].value);
  imgReq.onload = function () {
    document.getElementById(imgDiv).innerHTML = imgReq.responseText;
  }
  var invalidUrl = 'http://localhost:3030/image/joke/?email=' + email
  imgReq.open('GET', invalidUrl); //fails
  imgReq.send();


  //fails when url includes sensitive data
  var url = 'http://localhost:3030/image/joke/'
  // imgReq.open('GET', url);
}