const charRegex = /^([a-z])$/;

function makeNewWindow(text) {
	// content of new window
	var myText = ""
	myText += "<div>\n";
	myText += "<p style=\"color:white\">" + text + "</p>\n";
	myText += "<input type='button' value='Close Window' onclick='window.close()'>\n";
	myText += "</div>\n";

	// Create new window
	// Note: Setting the absolute location of the new window seems to default the
	// placement to the main monitor regardless of which monitor the browser window
	// is in... 
	var newWindow = window.open("", "new_window", "width=300,height=100");
	let doc = newWindow.document;

	newWindow.focus();

	// assign content
	doc.title = "New Window";
	doc.documentElement.setAttribute('lang','eng');
	doc.body.innerHTML = myText;

	// change body color
	doc.body.style.backgroundColor = "rgb(60, 60, 60)";

	// finish
	doc.close();
}

function processForm() {
	let out_msg = "";

	let in_content = document.getElementById("in-content").value;
	let in_char = document.getElementById("in-char").value;

	let c = in_content.toLowerCase();
	let k = in_char.toLowerCase();

	if (!charRegex.test(k)) {
		out_msg = "Error: Invalid search character";
		makeNewWindow(out_msg);
	}
	else {
		// Loop through the chars in the content to count
		let count = 0;
		for(i = 0; i < c.length; i++) {
			if(c.charAt(i) == k) {
				count++;
			}
		}

		// If no match
		if(count < 1) {
			out_msg = out_msg.concat("Failure: The character \"", in_char, "\" was not found in the text \"", in_content, "\".");
			makeNewWindow(out_msg);
			out_msg = "";
		}
		else {
			out_msg = out_msg.concat("Success: The character \"", in_char, "\" was found ", count, " amount of times in the text \"", in_content, "\".");

			document.getElementById("form").reset();
		}
	}

	document.getElementById("out-msg").textContent = out_msg;
}