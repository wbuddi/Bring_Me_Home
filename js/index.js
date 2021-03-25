$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});

var initialSrc = "images/color_logo_White_logo_Transparent.png";
var scrollSrc = "images/color_logo_orange_logo_Transparent@2x.png";

$(window).scroll(function() {
   var value = $(this).scrollTop();
   if (value > 100)
      $(".logo").attr("src", scrollSrc);
   else
      $(".logo").attr("src", initialSrc);
});