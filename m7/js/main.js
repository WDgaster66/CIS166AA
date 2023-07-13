//create an array of 5 arrays
//each inner array should contain a name and a number grade
var students = [
	["David", 80],
	["Victor", 77],
	["Tracey", 55],
	["Jason", 95],
	["Raymond", 69]
];
 
//create a function called getGrade with a parameter of value
function getGrade(value) {
	//inside the function, create an if/else statement that accounts for grades and values from F to A
	if (value >= 90) {
		return "A";
	} else if (value >= 80) {
		return "B";
	} else if (value >= 70) {
		return "C";
	} else if (value >= 60) {
		return "D";
	} else {
		return "F";
	}
}
 
//create a for loop that iterates through the length of the students array and increments by 1 with each loop
for (var i = 0; i < students.length; i++) {
	//inside the for loop, use a method of your choice (NOT document.write()) to output a string of text that reads like the following example: 
  	//David's number grade is 80 and letter grade is a B
  	var name = students[i][0]; // get the name from the inner array
  	var grade = students[i][1]; // get the grade from the inner array
  	var letter = getGrade(grade); // get the letter from the function
  	var message = name + "'s number grade is " + grade + " and letter grade is a " + letter + "."; // create a message with the variables
  	var paragraph = document.createElement("p"); // create a paragraph element
  	var text = document.createTextNode(message); // create a text node with the message
  	paragraph.appendChild(text); // append the text node to the paragraph element
  	output.appendChild(paragraph); // append the paragraph element to the output div
}
