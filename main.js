
var x = document.getElementById("geolocationDemo");
var globalUser;
var usersBrowser;
window.onload = onLoad();

function onLoad() {
  console.log("runing on load");
  var url = window.location.pathname;
  var filename = url.substring(url.lastIndexOf('/') + 1);
  browserDetect();
  if (filename === 'index.html') {
    //getLocation();
  }
  else if (filename === 'svgc.html') {
    console.log("runing in svg canvas");
    drawRectangle();
  }
  else if (filename === 'form.html') {
    hideContent();
  }
}

function drawRectangle() {
  var c = document.getElementById('newCanvas');
  if (c) {
    var ctx = c.getContext('2d');
    ctx.fillStyle = '#7cce2b';
    ctx.fillRect(20, 20, 150, 80);
  }
}

function doCoolStuff() {
  var userName = document.getElementById("inputName").value;
  var userSurname = document.getElementById("inputSurname").value;
  var helloContent = document.getElementById("hideContent");
  document.getElementById("userName").innerHTML = "  Hello: " + userName + " !";
  document.getElementById("userSurname").innerHTML = "  Hello: " + userSurname + " !";
  helloContent.style.visibility = "visible";
}

function hideContent() {
  var helloContent = document.getElementById("hideContent");
  helloContent.style.visibility = "hidden";
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Your Latitude: " + position.coords.latitude +
    " and Longitude: " + position.coords.longitude + " check on this map. :)";

  var pos = position.coords.latitude + "," + position.coords.longitude;

  var mapsrc = "https://www.google.com/maps/embed/v1/place?q=" + pos + "&key=AIzaSyA-5px9IvD9XjxTBh5EpJwYRp4XC7zaMTg";


  document.getElementById("map").src = mapsrc;
}
/* Detect which browser */
function browserDetect() {
  if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
    //alert('Opera');
    usersBrowser = 'Opera';
  }
  else if (navigator.userAgent.indexOf("Chrome") != -1) {
    //alert('Chrome');
    usersBrowser = 'Chrome';
  }
  else if (navigator.userAgent.indexOf("Safari") != -1) {
    //alert('Safari');
    usersBrowser = 'Safari';
  }
  else if (navigator.userAgent.indexOf("Firefox") != -1) {
    //alert('Firefox');
    usersBrowser = 'Firefox';
  }
  else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) //IF IE > 10
  {
    //alert('IE'); 
    usersBrowser = 'IE';
  }
  else {
    alert('unknown');
  }
}