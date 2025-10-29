function processForm(){
	let output = "", canProceed = true;

	let in_name, in_age, in_br, in_genre;

	// get input text
	in_name = document.getElementById("in-name").value;

	// get input radio
	let in_age_all = document.getElementsByName("in-age");
	for(i = 0; i < in_age_all.length; i++){
		if(in_age_all[i].checked){
			in_age = in_age_all[i].value;
		}
	}

	// get input checkbox
	in_br = [];
	in_br.push(
		document.getElementById("in-br-frfx").checked,
		document.getElementById("in-br-edge").checked,
		document.getElementById("in-br-chrm").checked,
		document.getElementById("in-br-sfri").checked);

	// get input select
	in_genre = document.getElementById("in-genre").value;

	// checks
	if(in_name=="" || in_name==null){
		output += "Name empty! "
		canProceed = false;
	}
	if(in_age=="" || in_age==null){
		output += "Age not selected! "
		canProceed = false;
	}
	if(in_genre=="" || in_genre==null){
		output += "Genre not selected! "
		canProceed = false;
	}
	if(in_br.every(check => check === false)){
		output += "Browser not selected! "
		canProceed = false;
	}

	// process (very simple this time, i was expecting to manipulate the data)
	if(canProceed) {
		output = "Thanks, your data was submitted!";
		document.getElementById("form").reset();
	}

	// output
	document.getElementById("output").textContent = output;
}