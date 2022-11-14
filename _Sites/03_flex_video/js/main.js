//article hover viedo play
const items = document.querySelectorAll("article");

//aside
const aside = document.querySelector("aside");
const close = document.querySelector("aside span");

for (let el of items) {
	el.addEventListener("mouseenter", (e) => {
		e.currentTarget.querySelector("video").play();
	});

	el.addEventListener("mouseleave", (e) => {
		e.currentTarget.querySelector("video").pause();
	});

	el.addEventListener("click", (e) => {
		let title = e.currentTarget.querySelector("h2").innerText;
		let txt = e.currentTarget.querySelector("p").innerText;
		let video = e.currentTarget.querySelector("video").getAttribute("src");

		aside.querySelector("h2").innerText = title;
		aside.querySelector("p").innerText = txt;
		aside.querySelector("video").setAttribute("src", video);
		aside.querySelector("video").play();

		aside.classList.add("on");
	});
}

close.addEventListener("click", () => {
	aside.classList.remove("on");
	aside.querySelector("video").pause();
});
