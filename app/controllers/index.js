function doClick(e) {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://api.parse.com/1/classes/User/ypaDgadQIV", false);
	xhr.send();

	alert(xhr.status);
	alert(xhr.statusText);

}

function httpGet(theUrl) {
	var xmlHttp = null;

	xmlHttp = new XMLHttpRequest();
	xmlHttp.open("GET", theUrl, false);
	xmlHttp.send(null);
	return xmlHttp.responseText;
}

$.index.open();
