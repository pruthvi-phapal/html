const inputfield = document.getElementById("input-field");
const outputfield = document.getElementById("output-field");
const button = document.querySelectorAll("button");

inputfield.addEventListener(
  "keyup",
  () => (outputfield.innerHTML = inputfield.value)
);

button.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("uppercase")) {
      outputfield.innerHTML = outputfield.innerHTML.toUpperCase();
    } else if (btn.classList.contains("lowercase")) {
      outputfield.innerHTML = outputfield.innerHTML.toLowerCase();
    } else if (btn.classList.contains("capitalize")) {
      outputfield.innerHTML =
        outputfield.innerHTML.charAt(0).toUpperCase() +
        outputfield.innerHTML.slice(1).toLowerCase();
    } else if (btn.classList.contains("bold")) {
      outputfield.style.fontWeight = "900";
    } else if (btn.classList.contains("italic")) {
      outputfield.style.fontStyle = "italic";
    } else if (btn.classList.contains("underline")) {
      outputfield.style.textDecoration = "underline";
    }
  });
});
