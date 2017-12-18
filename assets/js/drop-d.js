
$(".dropdown dt a").on('click', function() {
  $(".dropdown dd ul").slideToggle('fast');
});

$(".dropdown dd ul li a").on('click', function() {
  $(".dropdown dd ul").hide();
});

function getSelectedValue(id) {
  return $("" + id).find("dt a span.value").html();
}

$(document).bind('click', function(e) {
  var $clicked = $(e.target);
  if (!$clicked.parents().hasClass("dropdown")) $(".dropdown dd ul").hide();
});



$(".dropdown2 dt a").on('click', function() {
  $(".dropdown2 dd ul").slideToggle('fast');
});

$(".dropdown2 dd ul li a").on('click', function() {
  $(".dropdown2 dd ul").hide();
});

function getSelectedValue(id) {
  return $("" + id).find("dt a span.value").html();
}

$(document).bind('click', function(e) {
  var $clicked = $(e.target);
  if (!$clicked.parents().hasClass("dropdown2")) $(".dropdown2 dd ul").hide();
});




$(".dropdown3 dt a").on('click', function() {
  $(".dropdown3 dd ul").slideToggle('fast');
});

$(".dropdown3 dd ul li a").on('click', function() {
  $(".dropdown3 dd ul").hide();
});

function getSelectedValue(id) {
  return $("" + id).find("dt a span.value").html();
}

$(document).bind('click', function(e) {
  var $clicked = $(e.target);
  if (!$clicked.parents().hasClass("dropdown3")) $(".dropdown3 dd ul").hide();
});


$(".dropdown4 dt a").on('click', function() {
  $(".dropdown4 dd ul").slideToggle('fast');
});

$(".dropdown4 dd ul li a").on('click', function() {
  $(".dropdown4 dd ul").hide();
});

function getSelectedValue(id) {
  return $("" + id).find("dt a span.value").html();
}

$(document).bind('click', function(e) {
  var $clicked = $(e.target);
  if (!$clicked.parents().hasClass("dropdown4")) $(".dropdown4 dd ul").hide();
});


$(".dropdown5 dt a").on('click', function() {
  $(".dropdown5 dd ul").slideToggle('fast');
});

$(".dropdown5 dd ul li a").on('click', function() {
  $(".dropdown5 dd ul").hide();
});

function getSelectedValue(id) {
  return $("" + id).find("dt a span.value").html();
}

$(document).bind('click', function(e) {
  var $clicked = $(e.target);
  if (!$clicked.parents().hasClass("dropdown5")) $(".dropdown5 dd ul").hide();
});




$(".dropdown7 dt a").on('click', function() {
  $(".dropdown7 dd ul").slideToggle('fast');
});

$(".dropdown7 dd ul li a").on('click', function() {
  $(".dropdown7 dd ul").hide();
});

function getSelectedValue(id) {
  return $("" + id).find("dt a span.value").html();
}

$(document).bind('click', function(e) {
  var $clicked = $(e.target);
  if (!$clicked.parents().hasClass("dropdown7")) $(".dropdown7 dd ul").hide();
});
