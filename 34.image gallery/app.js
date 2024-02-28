let images = document.querySelectorAll("img");
let wrapper = document.getElementById("wrapper");
let imgwrapper = document.getElementById("fullImg");
let close = document.querySelector("span");

images.forEach((img, index) => {
  img.addEventListener("cilck", () => {
    openModal(`images/img${index}.jpg`);
  });
});

function openModal(pic) {
  wrapper.style.display = "flex";
  imgwrapper.src = pic;
}
