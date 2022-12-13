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

	for (const pop of items) {
		pop.addEventListener("click", (e) => {
			//화면 너비구하기
			const winWidth = document.body.clientWidth;
			if (winWidth > 767) {
				//화면 너비가 767보다 컸을때만 적용
				//클릭한 article img의 src값, h2, p를 변수에 저장
				const img = e.currentTarget.querySelector("img").getAttribute("src");
				const title = e.currentTarget.querySelector("h2").innerText;
				const desc = e.currentTarget.querySelector("p").innerText;

				popup.querySelector("img").setAttribute("src", img);
				popup.querySelector("h2").innerText = title;
				popup.querySelector("p").innerText = desc;

				popup.classList.add("on");
			}
		});
	}
	popup.addEventListener("click", () => {
		popup.classList.remove("on");
	});
});
