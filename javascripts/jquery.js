$(document).ready(function() {
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
});
