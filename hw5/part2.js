// State Data Table:
// Abbreviation, Name, Capital, Population
var stateData = [
	["AL", "Alabama",	"Montgomery",	5157699],
	["AK", "Alaska",	"Juneau",		740133],
	["AZ", "Arizona",	"Phoenix",		7582384],
	["AR", "Arkansas",	"Little Rock",	3088354],
	["CA", "California","Sacramento",	39431263],
	["CO", "Colorado",	"Denver",		5957493]
]

var stateListStr = "";

function makeSLS() {
	for(z = 0; z < stateData.length; z++) {
		stateListStr += stateData[z][1];
		stateListStr = stateListStr.concat(" (", stateData[z][0], ")");

		if(z != stateData.length - 1) {
			stateListStr += ", ";
		}
	}
}

function hideResults() {
	document.getElementById("out-results").style.display = "none";
}

function showResults() {
	document.getElementById("out-results").style.display = "grid";
}

function getStateAbbr(index) {
	return (stateData[index][0]).toLowerCase();
}

function getStateName(index) {
	return (stateData[index][1]).toLowerCase();
}

function processForm() {
	let out_msg = "";

	let stateIndex = -1;
	let in_state = (document.getElementById("in-state").value).toLowerCase();

	// check if the input correlates to any entry
	for(i = 0; i < stateData.length; i++) {
		if(in_state == getStateAbbr(i) || in_state == getStateName(i)) {
			stateIndex = i;
			break;
		}
	}

	// If no match
	if(stateIndex == -1) {
		out_msg = "Sorry, we do not have information about this state! We only have information about ";
		out_msg = out_msg.concat(stateListStr, ".");

		hideResults();
	}
	else {
		out_msg = "Thanks for your inquiry, here is the information you requested:";

		document.getElementById("out-abbr").value = stateData[stateIndex][0];
		document.getElementById("out-name").value = stateData[stateIndex][1];
		document.getElementById("out-cap").value = stateData[stateIndex][2];
		document.getElementById("out-popl").value = stateData[stateIndex][3].toLocaleString();

		showResults();
		document.getElementById("form").reset();
	}
	
	document.getElementById("out-msg").textContent = out_msg;
}

