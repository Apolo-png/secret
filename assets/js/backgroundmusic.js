function play() {
  document.getElementById("ost").play();
}
document.body.addEventListener("mouseover", play);
window.addEventListener("click", play);
window.onload = play();
