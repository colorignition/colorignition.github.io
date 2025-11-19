const d_alert = document.getElementById("alert");
const d_new = document.getElementById("new-user");
const d_ret = document.getElementById("ret-user");

function createCookie(cName, cValue, expDays) {
	var d = new Date();
	d.setTime(d.getTime() + (expDays*24*60*60*1000));
	var expires = "expires="+ d.toUTCString();
	document.cookie = cName + "=" + cValue + ";" + expires + ";path=/";
}

function createTempCookie(cName, cValue){
	document.cookie = cName + "=" + cValue;
}

function getCookie(cName) {
	var name = cName + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');

	for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function deleteCookie(cName) {
	createCookie(cName, "", -1)
}

function showDiv(elem) {
	elem.style.display = "block";
}

function hideDiv(elem) {
	elem.style.display = "none";
}

function pushAlert(msg) {
	d_alert.textContent = msg;
	showDiv(d_alert);
}

function processForm() {
	let iPn = document.getElementById("in-pname").value;
	let iUn = document.getElementById("in-uname").value;

	let alertMsg = "";

	// Valid input checks
	if(iPn == ""){
		alertMsg += "Error: Personal Name is empty! ";
	}
	if(iUn == ""){
		alertMsg += "Error: Username is empty! ";
	}

	// If verified, process inputs
	if(alertMsg == "") {
		createTempCookie("personalName", iPn, 7);
		createTempCookie("userName", iUn, 7);

		document.getElementById("in-form").reset();
		alertMsg += "Success: Cookies saved! Please reload the page to see changes.";
	}

	pushAlert(alertMsg);
}

function updateRetMsg() {
	let msg = "Welcome back, " + getCookie("personalName") + "!";
	document.getElementById("out-msg").textContent = msg;
}

function clearAllCookies() {
	deleteCookie("personalName");
	deleteCookie("userName");
	pushAlert("Cookies for this page have been cleared! Please reload the page to see changes.")
}

function updatePage() {
	hideDiv(d_alert);

	// New User Page
	if(getCookie("personalName") == "") {
		showDiv(d_new);
		hideDiv(d_ret);
	}
	// Returning User Page
	else {
		updateRetMsg();
		showDiv(d_ret);
		hideDiv(d_new);
	}
}