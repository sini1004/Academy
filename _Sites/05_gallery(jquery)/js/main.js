const $btn = $(".nav ul li a"); //버튼역할하는 nav a를 변수로

$(".thumb").isotope({
	// set itemSelector so .grid-sizer is not used in layout
	itemSelector: ".all",
	stagger: 100,
	transitionDuration: "0.2s",
	hiddenStyle: {
		opacity: 0,
	},
	visibleStyle: {
		opacity: 1,
	},
});

$btn.click(function () {
	$btn.removeClass("active");
	$(this).addClass("active");
});

$(".btn_all").click(function () {
	$(".thumb").isotope({ filter: "*" });
});

$(".btn_web").click(function () {
	$(".thumb").isotope({ filter: ".web" });
});

$(".btn_mobile").click(function () {
	$(".thumb").isotope({ filter: ".mobile" });
});

$(".btn_motion").click(function () {
	$(".thumb").isotope({ filter: ".motion" });
});

$(".btn_award").click(function () {
	$(".thumb").isotope({ filter: ".award" });
});
