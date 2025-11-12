const floatRegex = /^(\d)+(\.)(\d{4,1024})$/;

function hideResults() {
	document.getElementById("out-results").style.display = "none";
}

function showResults() {
	document.getElementById("out-results").style.display = "grid";
}

function processForm() {
	let out_msg = "";

	let in_num = document.getElementById("in-num").value;

	// check against regex
	if(!floatRegex.test(in_num)) {
		out_msg = "Input invalid, a number with at least 4 decimals is required";

		hideResults();
	}
	// process result
	else {
		out_msg = "Input valid, returning results";

		document.getElementById("out-input").value = in_num;
		document.getElementById("out-int").value = Math.round(in_num);
		document.getElementById("out-sqrt").value = Math.round(Math.sqrt(in_num));
		document.getElementById("out-fl1").value = (Math.floor(in_num * 10 + .5) / 10).toFixed(1);
		document.getElementById("out-fl2").value = (Math.floor(in_num * 100 + .5) / 100).toFixed(2);
		document.getElementById("out-fl3").value = (Math.floor(in_num * 1000 + .5) / 1000).toFixed(3);

		showResults();
		document.getElementById("form").reset();
	}
	
	document.getElementById("out-msg").textContent = out_msg;
}