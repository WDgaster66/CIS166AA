$(document).ready(function() {
    $("#slideshow > div:gt(0)").hide(); // hide all divs except the first one
    setInterval(function() {
        $("#slideshow > div:first") // get the first div
            .fadeOut(1000) // fade out
            .next() // get the next div
            .fadeIn(1000) // fade it in
            .end() // go back to the first div
            .appendTo("#slideshow"); // move it to the end of the slideshow
    }, 3000); // repeat every 3 seconds
});
