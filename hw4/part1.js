function loop_for(start, end, interval) {
	let sum = 0, product = 1;
	let outSum = "The sum of "; 
	let outPrd = "The product of ";

	// For Loop
	for(let i = start; i <= end; i += interval) {
		outSum = outSum.concat(i.toString(), " + ");
		outPrd = outPrd.concat(i.toString(), " * ");

		sum += i;
		product *= i;
	}

	// Snip the last 2 characters, then add the result to the output string
	outSum = outSum.substring(0, outSum.length - 2).concat("is ", sum.toLocaleString(), ".");
	outPrd = outPrd.substring(0, outPrd.length - 2).concat("is ", product.toLocaleString(), ".");

	// Change html element
	document.getElementById("output1a").textContent = outSum;
	document.getElementById("output1b").textContent = outPrd;
}

function loop_dowhile(start, end, interval) {
	let sum = 0, product = 1;
	let outSum = "The sum of "; 
	let outPrd = "The product of ";

	// Do-While Loop
	let i = start;
	do {
		outSum = outSum.concat(i.toString(), " + ");
		outPrd = outPrd.concat(i.toString(), " * ");

		sum += i;
		product *= i;

		i += interval;
	} while (i <= end);

	// Snip the last 2 characters, then add the result to the output string
	outSum = outSum.substring(0, outSum.length - 2).concat("is ", sum.toLocaleString(), ".");
	outPrd = outPrd.substring(0, outPrd.length - 2).concat("is ", product.toLocaleString(), ".");

	// Change html element
	document.getElementById("output2a").textContent = outSum;
	document.getElementById("output2b").textContent = outPrd;
}