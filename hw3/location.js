const x = document.getElementById("loct");

// Location
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function success(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
  //showPosition(position);
}

function error() {
  alert("Sorry, no position available.");
}

// Map
function showPosition(position) {
  let latlon = position.coords.latitude + "," + position.coords.longitude;

  let img_url = "https://maps.googleapis.com/maps/api/staticmap?center=" + latlon + "&zoom=14&size=400x300&sensor=false&key=KEYIFIHADONE";

  document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
}

// Run on document content fully loaded
document.addEventListener("DOMContentLoaded", function() {
  getLocation();
});