//below you will create an event listener. All your code will be inside that event listener

//create an click event listener called isValidButton
document.getElementById("isValidBtn").addEventListener("click", function() {
  
  //inside the event listener set undefined variables for isValidMsg and getInput. You can leave them undefined because we'll use them later.
  var isValidMsg, getInput;

  //set isValidMsg to equal the isValidMsg id in your HTML
  isValidMsg = document.getElementById("isValidMsg");
  
  //output isValidMsg to HTML and set it to an empty string
  isValidMsg.innerHTML = "";
  
  //set getInput to take in the value of isValidInput (which matches the id of your input in your HTML)
  getInput = document.getElementById("isValidInput").value;
  
  //create a try statement
  try {
    //if getInput is empty, then throw the string "is empty"
    if (getInput === "") { // if getInput is an empty string
      throw "is empty"; // then, throw an error message
    }
    
    //if getInput is not a number, then throw the string "is not a number"
    if (isNaN(getInput)) { // if getInput is not a number (using the isNaN function)
      throw "is not a number"; // then, throw an error message
    }
    
    //if getInput is greater than 15, then throw the string "is too high"
    if (getInput > 15) { // is greater than 15
      throw "is too high"; // throw an error message
    }
    
    //if getInput is less than 12, then throw the string "is too low"
    if (getInput < 12) { // is less than 12
      throw "is too low"; // throw an error message
    }

    //open your catch statement
  } catch (error) {
    //output isValidMsg to HTML and output a string of "Input" and add the error message
    isValidMsg.innerHTML = "Input " + error; 
  }

    //open your finally statement
  finally {
    //create an alert that says "This will always run."
    alert("This will always run."); //should say, "Checking..."
  }
});
