function playGame() {
	var randomNumber = Math.floor(Math.random() * 100) + 1; // get a random number between 1 and 100
	var min = 50; // set the minimum value
	var max = 75; // set the maximum value
	if (randomNumber > min && randomNumber < max) { // check if the random number is within the range
		result.textContent = "Your Number: " + randomNumber + ", You Won!"; // display a winning message
	} else {
		result.textContent = "Your Number: " + randomNumber + ", Keep Trying!"; // display a losing message
	}
}
