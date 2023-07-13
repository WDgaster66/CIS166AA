//The following project requires the use of event types you've learned throughout the lesson.

//Come up with 10 different event types (i.e.; a load event, a keydown event, a click event, a mouseup event, etc.). Make sure it's at least 10.
//From there, you're going to program these 10 different events into your JS page.
//Deploy to your HTML page so the events are interactive.

//get the elements by their ids
var load = document.getElementById("load");
var resize = document.getElementById("resize");
var scroll = document.getElementById("scroll");
var click = document.getElementById("click");
var clickMessage = document.getElementById("click-message");
var input = document.getElementById("input");
var inputMessage = document.getElementById("input-message");
var mouse = document.getElementById("mouse");
var mouseMessage = document.getElementById("mouse-message");
var image = document.getElementById("image");
var imageMessage = document.getElementById("image-message");

//add event listeners to each element
window.addEventListener("load", function() { // listen for the load event on the window object
  load.style.color = "white"; // change the color of the load paragraph to white
});

window.addEventListener("resize", function() { // listen for the resize event on the window object
  resize.style.color = "white"; // change the color of the resize paragraph to white
});

window.addEventListener("scroll", function() { // listen for the scroll event on the window object
  scroll.style.color = "white"; // change the color of the scroll paragraph to white
});

click.addEventListener("click", function() { // listen for the click event on the click button
  clickMessage.textContent = "You clicked me!"; // change the text content of the click-message paragraph
});

input.addEventListener("input", function() { // listen for the input event on the input element
  inputMessage.textContent = "You typed: " + input.value; // change the text content of the input-message paragraph to show what you typed
});

mouse.addEventListener("mouseover", function() { // listen for the mouseover event on the mouse div
  mouseMessage.textContent = "You moved your mouse over me!"; // change the text content of the mouse-message paragraph
});

mouse.addEventListener("mouseout", function() { // listen for the mouseout event on the mouse div
  mouseMessage.textContent = "You moved your mouse out of me!"; // change the text content of the mouse-message paragraph
});

image.addEventListener("dblclick", function() { // listen for the dblclick event on the image element
  imageMessage.textContent = "You double clicked on me!"; // change the text content of the image-message paragraph
});
