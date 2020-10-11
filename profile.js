var request = $.ajax({
	method: "GET",
	url: "https://mcabrol.github.io/README.md"
});

request.done(function(data) {
	$('#content').append(marked(data));
});
