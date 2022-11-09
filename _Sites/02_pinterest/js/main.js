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

	const btnFilter = document.querySelectorAll(".btns > li");
	for (let el of btnFilter) {
		el.addEventListener("click", (e) => {
			e.preventDefault();

			for (let el of btnFilter) {
				el.classList.remove("on");
			}

			e.currentTarget.classList.add("on");
		});
	}
});
