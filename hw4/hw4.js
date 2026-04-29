const bgSet = [
    "none",
    "images/lightblue.jpg",
    "images/lightgold.jpg"
];

const bgSelect = document.getElementById("bg");

function changeBg(input) {
    document.body.style.backgroundImage = "url(\'" + bgSet[input] + "\')";
};

bgSelect.addEventListener('change', function (e) { 
    changeBg(bgSelect.value);
});