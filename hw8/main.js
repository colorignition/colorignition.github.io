// For AJAX demo
function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    makeCDTable(this);
  }
  xhttp.open("GET", "cd_catalog.xml");
  xhttp.send();
}

function makeCDTable(xml) {
  const xmlDoc = xml.responseXML;
  const x = xmlDoc.getElementsByTagName("CD");
  let table="<tr><th>Title</th><th>Artist</th><th>Country</th><th>Company</th><th>Price</th><th>Year</th></tr>";
  for (let i = 0; i < x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("COUNTRY")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("COMPANY")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue +
    "</td></tr>"
    ;
  }
  document.getElementById("demo").innerHTML = table;
}

// For REST API
// base URL to API
const exampleUrl = "https://cataas.com/cat";

// Process form to create the URL needed to request from the API
async function processForm(){
  let finalUrl = exampleUrl;

  // retrieve from form
  let in_type = document.getElementsByName("in-type");
  let in_filter = document.getElementById("in-filter").value;
  let in_text = document.getElementById("in-text").value;

  // Check type
  // - Type is animated
  if (in_type[1].checked) {
    finalUrl += "/gif";
  }

  // Check text
  if (in_text != "") {
    finalUrl += "/says/" + in_text;
  }

  // Append JSON request
  finalUrl += "?json=true";

  // Check filter
  switch (in_filter) {
    // Mono filter
    case "mono":
      finalUrl += "&filter=mono";
      break;
    // negate filter
    case "negate":
      finalUrl += "&filter=negate";
      break;
  }

  // Get and show from API
  console.log(finalUrl);
  let returnJson = await getExample(finalUrl);
  showExample(returnJson);
}

// Fetch from URL, returns JSON
async function getExample(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response;
    return result.json();
  } 
  catch (error) {
    console.error(error.message);
  }
}

// Process JSON result into HTML
function showExample(result) {
  // Image URL
  var element_img = "<img class=\"example-img\" src=\"" + result.url + "\">";

  // Date created
  // The delimiter between day and time is 'T'
  var result_date =  result.created_at.split('T');
  var element_date = "<span><strong>Created at:</strong> " + result_date[0] + ", " + result_date[1] + "</span>";

  // Tags
  var element_tags = "<span><strong>Tags:</strong> ";
  if(result.tags.length > 0){
    for (i = 0; i < result.tags.length; i++){
      element_tags += result.tags[i];
      if(i != result.tags.length - 1) element_tags += ", ";
    }
  } else {
    element_tags += "(No Tags)";
  }
  
  element_tags += "</span>";

  // HTML Element Assembly
  var element_all = element_date + "<br>" + element_tags + "<br><br>" + element_img;
  document.getElementById("example").innerHTML = element_all;
}