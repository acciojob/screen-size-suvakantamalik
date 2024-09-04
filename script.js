function updateSize() {
  var h = window.innerHeight;
  var w = window.innerWidth;

  let h1 = document.querySelector("h1");
  h1.textContent = `Width: ${w} and Height: ${h}`;
  console.log(h);
}

window.addEventListener("resize", updateSize);
