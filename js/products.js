let btns = document.querySelectorAll(".thermos_content_image > i");
let img = document.querySelector(".thermos_content_image_container img");
let dots = document.querySelectorAll(".thermos_content_image .dots i");
let leftBtn = btns[0];
let rightBtn = btns[1];
leftBtn.addEventListener("click", () => {
  let imageSrc = img.getAttribute("src");
  let imageNumber = imageSrc[img.getAttribute("src").length - 5];
  if (Number(imageNumber) > 1) {
    imageSrc = imageSrc.replace(imageNumber, Number(imageNumber) - 1 + "");
    img.setAttribute("src", imageSrc);
    activeDot(Number(imageNumber) - 2);
  } else {
    imageSrc = imageSrc.replace(imageNumber, "5");
    img.setAttribute("src", imageSrc);
    activeDot(4);
  }
});

rightBtn.addEventListener("click", () => {
  let imageSrc = img.getAttribute("src");
  let imageNumber = imageSrc[img.getAttribute("src").length - 5];
  if (Number(imageNumber) < 5) {
    imageSrc = imageSrc.replace(imageNumber, Number(imageNumber) + 1 + "");
    img.setAttribute("src", imageSrc);
    activeDot(Number(imageNumber));
  } else {
    imageSrc = imageSrc.replace(imageNumber, "1");
    img.setAttribute("src", imageSrc);
    activeDot(0);
  }
});
function activeDot(number) {
  for (let i = 0; i < dots.length; i++) {
    if (dots[i].classList.contains("active-dot")) {
      dots[i].classList.remove("active-dot");
      break;
    }
  }
  dots[number].classList.add("active-dot");
}
