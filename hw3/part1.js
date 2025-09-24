function numInBounds(value, low, high) {
	return value >= low && value <= high;
}

function getGradeLetter(value){
	if(numInBounds(value, 90, 100)){ return "A"}
	else if(numInBounds(value, 80, 89)){ return "B"}
	else if(numInBounds(value, 70, 79)){ return "C"}
	else if(numInBounds(value, 60, 69)){ return "D"}
	else { return "F"}
}

function processForm() {
	let avg, mid, fin, prt;
	let calc, output;

	// Get form input values
	avg = parseInt(document.getElementById("in-avg").value);
	mid = parseInt(document.getElementById("in-mid").value);
	fin = parseInt(document.getElementById("in-fin").value);
	prt = parseInt(document.getElementById("in-prt").value);

	// Check if number
	if(isNaN(avg) || isNaN(mid) || isNaN(fin) || isNaN(prt)) {
		output = "Error! Input not number."
	}

	// Check if in bounds
	else if(!numInBounds(avg, 0, 100) || !numInBounds(mid, 0, 100) ||
			!numInBounds(fin, 0, 100) || !numInBounds(prt, 0, 100) ) {
		output = "Error! Input numbers not between 0 and 100."
	} 

	// Do operation
	else {
		calc = (0.5 * avg) + (0.2 * mid) + (0.2 * fin) + (0.1 * prt);
		output = calc.toFixed(0) + " ("+ getGradeLetter(calc) + ")";

		if(calc <= 69) {
			output += " --- Student must retake the course."
		}
	}

	// Write to HTML
	document.getElementById("output").textContent = output;
}