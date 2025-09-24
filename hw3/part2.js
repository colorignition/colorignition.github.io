var item1_value = 20.99;
var item2_value = 12.75;
var item3_value = 9.95;
var item4_value = 35.89;

function setPriceDisplay() {
	document.getElementById("out-price1").textContent = "$" + item1_value;
	document.getElementById("out-price2").textContent = "$" + item2_value;
	document.getElementById("out-price3").textContent = "$" + item3_value;
	document.getElementById("out-price4").textContent = "$" + item4_value;
}

function numToUSD(value) {
	return "$" + value.toFixed(2);
}

function processForm() {
	let item1, item2, item3, item4;
	let sales1, sales2, sales3, sales4, salesAll;
	let weekEarn, out_msg;

	// Get form input values
	item1 = parseInt(document.getElementById("in-item1").value);
	item2 = parseInt(document.getElementById("in-item2").value);
	item3 = parseInt(document.getElementById("in-item3").value);
	item4 = parseInt(document.getElementById("in-item4").value);

	// Check if number
	if(isNaN(item1) || isNaN(item2) || isNaN(item3) || isNaN(item4)) {
		out_msg = "Error! Input not number."
	}

	// Check if in bounds
	else if(item1 < 0 || item2 < 0 || item3 < 0 || item4 < 0) {
		out_msg = "Error! Item count cannot be negative."
	} 

	// Do operation
	else {
		sales1 = item1 * item1_value;
		sales2 = item2 * item2_value;
		sales3 = item3 * item3_value;
		sales4 = item4 * item4_value;
		salesAll = sales1 + sales2 + sales3 + sales4;

		weekEarn = 250.0 + (salesAll * 0.09);

		out_msg = "Operation was successful"

		document.getElementById("out-qty1").value = item1;
		document.getElementById("out-qty2").value = item2;
		document.getElementById("out-qty3").value = item3;
		document.getElementById("out-qty4").value = item4;

		document.getElementById("out-total1").value = numToUSD(sales1);
		document.getElementById("out-total2").value = numToUSD(sales2);
		document.getElementById("out-total3").value = numToUSD(sales3);
		document.getElementById("out-total4").value = numToUSD(sales4);
		
		document.getElementById("out-totalAll").value = numToUSD(salesAll);
		document.getElementById("out-weekEarn").value = numToUSD(weekEarn);
	}

	// Write to HTML
	document.getElementById("out-msg").textContent = out_msg;
}