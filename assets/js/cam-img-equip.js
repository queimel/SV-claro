// Change active class on product sizes.

var sizes = jQuery(".product--size").find("span");
sizes.click(function() {
  sizes.removeClass("active");
  $(this).addClass("active");
});

// Change image on thumbnail click.
var thumbs = $(".icon-images").find("img");
thumbs.click(function() {
  var src = $(this).attr("src");
  var dp = $(".display-img");
  dp.attr("src", src);
});