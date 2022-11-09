window.addEventListener("load", () => {
	var elem = document.querySelector("section");
	var iso = new Isotope(elem, {
		// options
		itemSelector: "article",
		layoutMode: "fitRows",
	});

	// element argument can be a selector string
	//   for an individual element
	var iso = new Isotope("section", {
		// options
	});
});
