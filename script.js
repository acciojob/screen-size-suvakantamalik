//your JS code here. If required.
function updateWindowSize() {
	var h = window.innerHeight;
	var w = window.innerWidth;

	let h1 = document.getElementById("sizeInfo h1");
	h1.innerText = `Width: ${w} and Height: ${h}`;
}

updateWindowSize();

window.addEventListener("resize", updateWindowSize);