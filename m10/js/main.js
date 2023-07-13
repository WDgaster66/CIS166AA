//create a function that will validate form input
function validateForm() {
	//validate all the elements of the form
	var formElements = document.getElementById("myForm").elements;
	//create a variable called canSubmit and set it to a boolean of true
	var canSubmit = true; 
	//write a for loop that checks the value of each form field. If the form field is not completed, then canSubmit will be false
	for (var i = 0; i < formElements.length; i++) { // loop through all the elements of the form
		if (formElements[i].type !== "submit") { // exclude the submit button from validation
			if (formElements[i].value === "") { // check if the element has an empty value
				canSubmit = false; // change the submission status to false
			}
		}
	}
	return canSubmit; // return the submission status
}

//in an event listener, add a method to prevent default submission of the form. 
//create an alert if form is submitted that states a confirmation message
//make sure this event listener contains code to reset the form
document.getElementById("myForm").addEventListener("submit", function(event) { // add an event listener for submit on the form element by its id
	event.preventDefault(); // prevent the default submission of the form
	if (validateForm()) { // check if the form is valid using the validateForm function
		alert("Your form has been submitted successfully!"); // show a confirmation message
		document.getElementById("myForm").reset(); // reset the form
	} else {
		alert("Please fill out all the fields!"); // show an error message
	}
});
