function mHide() {
	show = $('input[name="button"]').val();
	
	if(show=="Show") {
		$('#menu').show();
		$('input[name="button"]').val("Hide");
	} else if(show=="Hide") {
		$('#menu').hide();
		$('input[name="button"]').val("Show");
	}
}