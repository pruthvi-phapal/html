function getTab(el) {
  const active = document.querySelector(".active");
  const visible = document.querySelector(".content-visible");
  const tabContent = document.getElementById(el.href.split("#")[1]);

  active.ClassList.toggle("active");
  visible.ClassList.toggle("content-visible");

  el.ClassList.add("active");
  tabContent.ClassList.add("content-visible");
}

document.addEventListener("click", (el) => {
  if (el.target.matches(".tab-item a")) {
    getTab(e.target);
  }
});
