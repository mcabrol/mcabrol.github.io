function currentYear() {
	var year = new Date().getFullYear();
	document.getElementById("clock").innerText = `Copyright © ${year} All rights reserved.`;
}

function updateTime(k) {
	if (k < 10) {
		return ("0" + k);
	}
	else {
		return (k);
	}
}

function sendEmail()
{
    window.location = "mailto:contact@mcabrol.com";
}

$( document ).ready(function() {

	// var request = fetch({
	// 	method: "GET",
	// 	url: "https://mcabrol.github.io/README.md"
	// });

	var data = `## Based in *Paris* and *Brussel* graduated in **graphic design**, student in **computer science**. Currently employed as a **javascript frontend developer**.`;
	$('#content').append(marked(data));

	$('#key').hover(
		function () {
			$("#main").css({"color":"transparent"});
			$("#contact").css({"color":"white"});
		},
		function () {
			$("#contact").css({"color":"transparent"});
			$("#main").css({"color":"white"});
		}
	);

	currentYear();
});
