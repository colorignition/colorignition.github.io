// Style Values
// - Theme values: (bg color, font color)
const themeValue = [
	["rgb(75, 75, 85)", "rgb(220, 220, 230)"], // dark (def)
	["rgb(220, 220, 220)", "rgb(15, 15, 25)"], // light
	["rgb(0, 0, 0)", "rgb(255, 255, 255)"] // high contrast
];
const fSizeValue = [
	"100%", "120%", "150%", "200%"
];

// References 
// - Page Elements
const iForm = document.getElementById("in-form");
const oDiv = document.getElementById("out-div").style;
const oPg = document.getElementById("out-p").style;

function changeTheme(index) {
	oDiv.backgroundColor = themeValue[index][0];
	oPg.color = themeValue[index][1];
}

function changeFontStyle(ul, bd, it) {
	// - Underlined
	oPg.textDecoration = ul ? "underline" : "";
	// - Bold
	oPg.fontWeight = bd ? "bold" : "";
	// - Italics
	oPg.fontStyle = it ? "italic" : "";
}

function changeTextSize(index) {
	oPg.fontSize = fSizeValue[index];
}

function updateDiv() {
	// - Form Status
	let iBgClr = document.getElementsByName("in-bgclr");
	let iFst_Ul = document.getElementById("in-fStyle-ul").checked;
	let iFst_Bd = document.getElementById("in-fStyle-bd").checked;
	let iFst_It = document.getElementById("in-fStyle-it").checked;
	let iFSz = document.getElementById("in-fsize").value;

	// Theme
	for(i = 0; i < iBgClr.length; i++) {
		if(iBgClr[i].checked) {
			changeTheme(iBgClr[i].value);
			break;
		}
	}

	// Font Style
	changeFontStyle(iFst_Ul, iFst_Bd, iFst_It);

	// Font Size
	changeTextSize(iFSz);
}

iForm.addEventListener("change", function() {
	updateDiv();
});