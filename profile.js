function currentTime() {
	var date = new Date();
	var hour = date.getHours();
	var min = date.getMinutes();
	var sec = date.getSeconds();
	hour = updateTime(hour);
	min = updateTime(min);
	sec = updateTime(sec);
	document.getElementById("clock").innerText = hour + " : " + min + " : " + sec;
	var t = setTimeout(function(){ currentTime() }, 1000);
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
    window.location = "mailto:martin.cabrol@free.fr";
}

$( document ).ready(function() {

	var request = $.ajax({
		method: "GET",
		url: "https://mcabrol.github.io/README.md"
	});

	request.done(function(data) {
		$('#content').append(marked(data));
	});

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

	  currentTime();
});
