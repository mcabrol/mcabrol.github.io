function search_api() {
	var x = $("#search").val();
	request_profile(x);
}

function invert() {
	$('body').toggleClass("dark");
}


display_loading(0);


$( document ).ready(function() {

	console.log( "ready!" );
	// request_profile("mcabrol");
	request("mcabrol");


});
