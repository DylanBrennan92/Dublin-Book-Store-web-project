function validateForm() {
//Script to validate user input on form

	var enteredName;
	var enteredEmail;


	enteredName = document.getElementById("userName").value;
	enteredEmail = document.getElementById("userMail").value;
	document.getElementById("terms").value;

//Begin evaluating inputs one by one

if (enteredName.length <2 || enteredName =="" ){
	alert("You must enter a valid name");

}
if (enteredEmail.length <5 || enteredEmail =="" ){
	alert("You must enter a valid Email address which includes an @ symbol");
}

if (document.getElementById("terms").checked==true{
	alert("Thanks for singing up");
}
else{
	alert("You must agree to the terms and conditions");

	}

}/*end of function*/
