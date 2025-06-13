let menuBtn = document.querySelector(".header_right .fa-bars");
let menu = document.querySelector(".header_left_tags");
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active_header_left_tags");
});
