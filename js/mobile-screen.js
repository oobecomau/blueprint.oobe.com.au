var n = localStorage.getItem('on_load_counter');
if ( n === null ) { 
    n = 1;
    $(".mw-flex-container").css("display","flex").show();
    $(".mw-loader").fadeOut(1000);
    $("html").css("overflow-y","hidden");
    $(".mw-flex-container div").css("display","block").fadeIn(3000);
} else if ( n > 10 ) { 
    n = 1; 
    $(".mw-flex-container").css("display","flex").show();
    $(".mw-loader").fadeOut(1000);
    $("html").css("overflow-y","hidden");
    $(".mw-flex-container div").css("display","block").fadeIn(3000);
} else if ( n < 4 ) {
    n++;
    $(".mw-flex-container").css("display","flex").show();
    $(".mw-loader").fadeOut(1000);
    $("html").css("overflow-y","hidden");
    $(".mw-flex-container div").css("display","block").fadeIn(3000);
} else {
    n++;
    $(".mobile-welcome").hide();
    $("html").css("overflow-y","scroll");
}
localStorage.setItem('on_load_counter', n);
document.getElementById('counter').innerHTML = n;
$("#mobileScreen").on("click", function() {
    $(".mobile-welcome").hide(1000);
    $("html").css("overflow-y","scroll");
});


