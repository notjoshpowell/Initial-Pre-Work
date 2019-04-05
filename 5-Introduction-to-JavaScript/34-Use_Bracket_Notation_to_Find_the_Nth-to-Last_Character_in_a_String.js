/* I learned that one can find any character from the end of a string by using
0-n, so the fourth character from the end would be 0-4 = 4. Inside of a bracket
after the variable name, retype the variableName.length - n . */

// Example
var firstName = "Ada";
var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];

// Setup
var lastName = "Lovelace";

// Only change code below this line
var secondToLastLetterOfLastName = lastName[lastName.length-2];
