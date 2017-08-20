jQuery.ajax({
url: "https://api.data.amsterdam.nl/bag/openbareruimte/",
type: "GET",
data: {
"q": "pieter nieuwland",
},
})
.done(function(data, textStatus, jqXHR) {
console.log("HTTP Request Succeeded: " + jqXHR.status);
console.log(data);
})
.fail(function(jqXHR, textStatus, errorThrown) {
console.log("HTTP Request Failed");
})
.always(function() {
/* ... */
});