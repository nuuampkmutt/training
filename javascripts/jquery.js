$(document).ready(function() {
	$('#nivo-slider').nivoSlider();
	slidingLoginBox();
	dropMenu();
});
function slidingLoginBox(){
	$(".topMenuAction").click( function() {
	if ($("#openCloseIdentifier").is(":hidden")) {
		$("#slider").animate({
			marginTop: "-141px"
			}, 500 );
		$("#topMenuImage").html('Log in (Open)');
		$("#openCloseIdentifier").show();
	} else {
		$("#slider").animate({
			marginTop: "0px"
			}, 500 );
		$("#topMenuImage").html('Log in (Close)');
		$("#openCloseIdentifier").hide();
	}
	});
}
function dropMenu(){
    $("#nav li").hover(
        function () {
            $(this).find("div.sub-nav").fadeIn("fast");
        },
        function () {
            $(this).find("div.sub-nav").fadeOut("fast");
        }
    );
}