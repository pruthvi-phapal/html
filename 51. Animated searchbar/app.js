const searchcontainer = document.querySelector(".container");
const mic = document.querySelector(".mic-icon");
const magnifier = document.querySelector(".magnifier");

magnifier.addEventListener("click", () => {
  searchcontainer.classList.toggle("active");
  mic.classList.toggle("hidden");
});
