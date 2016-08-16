/* takes an array of scripts urls, and checks for unusual stuff */

// noooooo it doesn't work ;((((

var xhttp = new XMLHttpRequest();
var reject = false;
urls = ["https://mrsherlockholmes.github.io/script-jacking/script-jacking.js"];

for (url in urls) {
  xhttp.open("GET", url, false);
  xhttp.send();
  statements = xhttp.responseText.split(";");
  for (statement in statements) {
    stm = statement.trim();
    if (stm.substr(0, 19) === "document.getElement") {
      reject = true;
    }
  }
}
