var rate = {};
rate["eur"] = 0.92;
rate["cad"] = 1.38;
rate["hkd"] = 7.81;
rate["jpy"] = 156.73;
rate["pes"] = 18.41;

var value = {};
value["eur"] = 0;
value["cad"] = 0;
value["hkd"] = 0;
value["jpy"] = 0;
value["pes"] = 0;

function updateRate(){
	document.getElementById("rate_eur").textContent = rate["eur"];
	document.getElementById("rate_cad").textContent = rate["cad"];
	document.getElementById("rate_hkd").textContent = rate["hkd"];
	document.getElementById("rate_jpy").textContent = rate["jpy"];
	document.getElementById("rate_pes").textContent = rate["pes"];
}

function updateValue(){
	document.getElementById("value_eur").value = value["eur"].toFixed(2);
	document.getElementById("value_cad").value = value["cad"].toFixed(2);
	document.getElementById("value_hkd").value = value["hkd"].toFixed(2);
	document.getElementById("value_jpy").value = value["jpy"].toFixed(2);
	document.getElementById("value_pes").value = value["pes"].toFixed(2);
}

function calculateValue(baseValue, moneyType){
	value[moneyType] = baseValue * rate[moneyType];
}

function calculateAll() {
	let baseValue = Number(document.getElementById("input").value);

	if(!baseValue) {
		document.getElementById("output").textContent = "Invalid input. Please make sure input is a number.";
	} else {
		calculateValue(baseValue, "eur");
		calculateValue(baseValue, "cad");
		calculateValue(baseValue, "hkd");
		calculateValue(baseValue, "jpy");
		calculateValue(baseValue, "pes");

		updateValue()
		document.getElementById("output").textContent = "Output was successful!";
	}
}

updateRate()
updateValue()