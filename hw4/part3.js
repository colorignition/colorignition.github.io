function processForm() {
	let size = Number(document.getElementById("in-size").value);
	let html_element = document.getElementById("output");

	html_element.style.letterSpacing = "0";

	if(size < 2) {
		html_element.textContent = "Error: Size is less than 2!"
	} else if (size > 10) {
		html_element.textContent = "Error: Size is greater than 10!"
	} else {
		makeSquare(size, html_element);
	}
}

function makeSquare(size, html_element){
	let output = "";
	html_element.innerHTML = "";

	let j = 0;
	for(let i = 0; i < size; i++){ // row
		j = 0; // col
		do {
			// Top or Bottom of Square, or beginning or end of row
			if(i == 0 || i == size - 1 || j == 0 || j == size - 1) {
				output += "* ";
			} 
			// Middle of Square
			else {
				output += "　";
			}

			j += 1;
		} while (j < size);

		output += "<br>";
	}

	html_element.style.letterSpacing = "5px";
	html_element.innerHTML += output;
	
	document.getElementById("form").reset();
}