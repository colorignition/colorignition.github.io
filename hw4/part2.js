function makeTable(start, end, multiplier, html_element) {
	let output = ""

	// Div Wrapper
	output += "<div>";

	// Add Title
	output = output.concat("<h2>Table for ", multiplier.toString(), "s</h2>");

	// Begin Table
	output += "<table>";
	// Header Row - Number, Multiplier, Result
	output += "<tr><th>Number</th><th>Multiplier</th><th>Result</th></tr>";

	for(let i = start; i <= end; i++){
		// Begin row
		output += "<tr>"
		// Number Col
		output = output.concat("<td>", i.toString(), "</td>");
		// Multiplier Col
		output = output.concat("<td>", multiplier.toString(), "</td>");
		// Result Col
		output = output.concat("<td>", (i*multiplier).toString(), "</td>");
		// End row
		output += "</tr>";
	}

	// End table
	output += "</table>";

	// Div Wrapper End
	output += "</div>";

	// Add table to the html element
	document.getElementById(html_element).innerHTML += output;
}