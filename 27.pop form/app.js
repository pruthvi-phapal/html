const close = document.getElementById("close");
const open = document.getElementById("open");
const model = document.getElementById("model");

open.addEventListener("click", () => modal.classList.add("show-modal"));
close.addEventListener("click", () => modal.classList.remove("show-modal"));
