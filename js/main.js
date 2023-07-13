//create a global variable called result
var result = document.getElementById("result");

//create a function called getLocation
function getLocation() {
  //create a variable that sets the value of true if the browser is Chrome
  var isChrome = navigator.userAgent.indexOf("Chrome") !== -1;

  //create an if statement with the following condition: if geolocation and the browser is Chrome, are both true, then show current position. Additionally, display a message that says "You're using Chrome, so you're cool!"
  if (navigator.geolocation && isChrome) { 
    navigator.geolocation.getCurrentPosition(showPosition);
    msg.textContent = "You're using Chrome, so you're cool!";
  }
  //otherwise if the browser is not Chrome, then display a message that says "Youu're not on the cool list. Then display a link that will send the user to Chrome's download page."
  else if (navigator.geolocation && !isChrome) { 
    msg.innerHTML = "You're not on the cool list. <a href='https://www.google.com/chrome/'>Download Chrome</a>."; 
  }
  //if the above conditions are not met, then display a message that says "Geolocation is not supported by this browser."
  else {
    msg.textContent = "Geolocation is not supported by this browser.";
  }
}

//create a function that will output the position to HTML
function showPosition(position) {
  var latitude = position.coords.latitude; // get the latitude value from position.coords.latitude
  var longitude = position.coords.longitude; // get the longitude value from position.coords.longitude
  result.innerHTML = "Latitude: " + latitude + "<br>Longitude: " + longitude; // use innerHTML to set the content of the result element with line breaks
}
