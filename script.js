function toogleTime(el) {
  el.classList.toggle("night");
  document.querySelector("html").classList.toggle("dark-mode");
  (document.title=="jour")?document.title="nuit":document.title="jour";
}
