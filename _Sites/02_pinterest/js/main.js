window.addEventListener("load", () => {
	// const elem = document.querySelector("section");
	var iso = new Isotope("section", {
		// options
		itemSelector: "article",
	});

	const btnFilter = document.querySelectorAll(".btns > li");
	for (let el of btnFilter) {
		el.addEventListener("click", (e) => {
			e.preventDefault();

			for (let el of btnFilter) {
				el.classList.remove("on");
			}

			//클릭한 버튼에 클래스 넣어줌
			e.currentTarget.classList.add("on");

			//클릭한 버튼에 있는 a태그안에 속성 href의 value 값 가져오기
			const filtering = e.currentTarget.querySelector("a").getAttribute("href");

			iso.arrange({ filter: filtering });
		});
	}

	//각 article을 클릭하면 팝업창 뜨게
	const items = document.querySelectorAll("article");
	const popup = document.querySelector("#popup");
});
