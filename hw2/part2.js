function processForm(){
	let num1, num2, num3;
	let sum, average, product, min, max;
	let output;

	num1 = Number(document.getElementById("num1").value);
	num2 = Number(document.getElementById("num2").value);
	num3 = Number(document.getElementById("num3").value);

	// Validation
	if(!num1 || !num2 || !num3){
		output = "Input was incorrect. Make sure all fields are filled, or all fields are numerical inputs.";
	} else 
	// Processing
	{
		output = "Output was successful!";

		// Do math
		sum = num1 + num2 + num3;
		average = sum / 3;
		product = num1 * num2 * num3;
		min = Math.min(num1, num2, num3);
		max = Math.max(num1, num2, num3);

		// Modify HTML element with new output
		document.getElementById("out_sum").value = sum.toFixed();
		document.getElementById("out_avg").value = average.toFixed();
		document.getElementById("out_prd").value = product.toFixed();
		document.getElementById("out_min").value = min.toFixed();
		document.getElementById("out_max").value = max.toFixed();
	}

	// Write status
	document.getElementById("output").textContent = output;
}