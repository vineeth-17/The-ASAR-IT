$("#nav-link").click(function() {
    $('html,body').animate({
        scrollTop: $("#about-section").offset().top},
        'slow');
});
$("#home-link").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });