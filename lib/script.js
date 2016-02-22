$(function () {
	$("#portfolio-button").click(function () {
		$('html, body').animate({
			scrollTop: $("#portfolio").offset().top
		}, 1000);
	});

	$("#about-button").click(function () {
		$('html, body').animate({
			scrollTop: $("#intro").offset().top
		}, 1000);
	});
	$("#contact-button").click(function () {
		$('html, body').animate({
			scrollTop: $("#contact").offset().top
		}, 1000);
	});
});