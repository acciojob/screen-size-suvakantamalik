function updateSize() {
  var h = window.innerHeight;
  var w = window.innerWidth;

  let h1 = document.querySelector(".sizeInfo h1");
  h1.textContent = `Width: ${w} and Height: ${h}`;
  console.log(h);
}

updateSize();

window.addEventListener("resize", updateSize);
