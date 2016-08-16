xhttp = new XMLHttpRequest();
for (i = 0; i++; i < document.getElementsByTagName("script").length) {
  xhttp.open("GET", document.getElementsByTagName("script")[i].src, true);
  xhttp.send();
  console.log(xhttp.responseText);
}
