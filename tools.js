function pad(number) {
	return (number < 10 ? '0' : '') + number
}

function output(input, element) {
	element.append(function() {
		return "<p>" + input + "</p>";
	});
}
