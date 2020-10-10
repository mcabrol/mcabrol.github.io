function display_loading(index) {
	var loading = $('#loading');
	var content = $('#content');
	if (index == 0) {
		content.css("display", "none");
	} else {
		loading.css("display", "none");
		content.css("display", "block");
	}
}

function display_detail(x) {
	output("####### Details: " + x, $("#console"));
	request_contributors(x);
	request_commits(x);
	request_contents(x);
}

function print(value) {
	$("#console").append(function() {
		return ("<p>" + value['name'] + " / " + value['created_at'] + " / " + value['description'] + " / " + value['language'] + " / " + value['license'] + "</p>");
	});
}
