//the following project requires the use of the following DOM APIs: querySelector(), getElementsByTagName(), querySelectorAll(), and getElementById(). In order to complete this project successfully, at one point or another, you will have used each of them.
 
//Using a DOM api, store the header's text in a variable
var headerText = document.querySelector(".header").textContent; 
//Using a DOM api, get the number of paragraphs in the page
var paragraphCount = document.getElementsByTagName("p").length; 
//Using a DOM api, get the number of heading tags used in the document
var headingCount = document.querySelectorAll("h1, h2, h3, h4, h5, h6").length; 
//Using a DOM api, get the number of list items being used in the unordered list
var listItemCount = document.querySelector("ul").children.length; 
//Use the correct DOM api to count the number of links being used in the page
var linkCount = document.querySelectorAll("a").length;
//set a variable to show the maximum number of links allowed on the page is 3
var maxLinks = 3;
//create an if/else statement that argues the following: if the total number of links on the page is greater than the maximum number of links allowed, then print the message "This is too many links. The limit is (include the variable for the maximum number of links)."
var message; 
if (linkCount > maxLinks) { // check if the link count is greater than the max links
	message = " This is too many links. The limit is <b>" + maxLinks + "</b>."; // assign a message to the variable
} else {
	message = " The number of links is within the limit."; // assign a different message to the variable
}

//create a summary of the article using the variables and display it in the summary div
var summary = document.getElementById("summary"); // use getElementById to get the element with the id of summary
var summaryText = "<br>The article title is <b>" + headerText + "</b><br><br>" + // create a summary text using the variables and line breaks
	"This article contains <b>" + paragraphCount + "</b> paragraphs, and a total of <b>" + listItemCount + "</b> list items." +
	" There are a total of <b>" + headingCount + "</b> heading tags and <b>" + linkCount + "</b> links used on the page." +
	message; // add the message to the summary text
summary.innerHTML = summaryText; // set the innerHTML of the summary element to the summary text
