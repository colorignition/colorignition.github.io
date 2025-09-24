var question, outmsg, yesno_block, num_block;
var x, y;

function hookElem() {
	outmsg = document.getElementById("out-msg");
	yesno_block = document.getElementById("yesno");
	num_block = document.getElementById("nums");
}

function getNewNum() {
	x = Math.round(Math.random() * 9);
	y = Math.round(Math.random() * 9);
}

function askUserMult() {
	question = "How much is " + x + " times " + y + "?";
	outmsg.textContent = question;
}

function resetAsk(){
	getNewNum();
	askUserMult();
	yesno_block.style.display = "none";
	num_block.style.display = "block";
}

function exit(){
	outmsg.textContent = "Thank you for playing! See you next time!"
	yesno_block.style.display = "none";
	num_block.style.display = "none";
}

function processForm() {
	let answer;

	answer = parseInt(document.getElementById("in-answer").value);

	// Check if number
	if(isNaN(answer)) {
		outmsg.textContent = "Error! Input not number. " + question;
	}
	// Do operation
	else {
		// Check if correct
		if(answer != x * y) {
			outmsg.textContent = "No. Please try again. " + question;
		} else {
			outmsg.textContent = "Very good! Would you like to keep playing?"
			yesno_block.style.display = "block";
			num_block.style.display = "none";
		}
	}
}