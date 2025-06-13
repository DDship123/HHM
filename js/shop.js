let btns = document.querySelectorAll(".thermos_image > i");
let img = document.querySelector(".thermos_image_container img");
let dots = document.querySelectorAll(".thermos_image .dots i");
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

let cartBtn = document.querySelector(".cart");
let cartBoard = document.querySelector(".cart_board");
let cartItems = document.querySelectorAll(".cart_board_list_item");
let cartBoardList = document.querySelector(".cart_board_list");
cartBtn.addEventListener("click", () => {
  cartBoard.classList.toggle("active_cart_board");
});

let buyThermosBtn = document.querySelector(".thermos_content_button");
buyThermosBtn.addEventListener("click", () => {
  let thermosImage = buyThermosBtn.parentElement.parentElement.querySelector(
    ".thermos_image_container img"
  );

  let imageNumber =
    thermosImage.getAttribute("src")[
      thermosImage.getAttribute("src").length - 5
    ];
  let thermosName;

  switch (imageNumber) {
    case "1":
      thermosName = "Green Thermos";
      break;
    case "2":
      thermosName = "Orange Thermos";
      break;
    case "3":
      thermosName = "Blue Thermos";
      break;
    case "4":
      thermosName = "Black Thermos";
      break;
    default:
      thermosName = "Gray Thermos";
  }

  let cartItem = document.createElement("div");
  cartItem.classList.add("cart_board_list_item");
  cartItem.innerHTML = `<div class="cart_board_list_item_content">
            <img src="${thermosImage.getAttribute("src")}" alt="" />
            <div class="cart_board_list_item_content_text ff_Open_Sans">
              <h2>${thermosName}</h2>
              <p>
                $15
                <span class="freeShip ff_Open_Sans"
                  >FREE SHIPPING ON ORDERS OVER $75</span
                >
              </p>
              <div class="cart_board_list_item_content_text_quantity">
                <i class="fa-solid fa-plus"></i>
                <span>1</span>
                <i class="fa-solid fa-minus"></i>
              </div>
            </div>
          </div>`;
  let plus = cartItem.querySelector(
    ".cart_board_list_item_content_text_quantity .fa-plus"
  );
  plus.addEventListener("click", () => {
    let itemQuantity = cartItem.querySelector(
      ".cart_board_list_item_content_text_quantity span"
    );
    itemQuantity.innerHTML = Number(itemQuantity.innerHTML) + 1;
  });
  let minus = cartItem.querySelector(
    ".cart_board_list_item_content_text_quantity .fa-minus"
  );
  minus.addEventListener("click", () => {
    let itemQuantity = cartItem.querySelector(
      ".cart_board_list_item_content_text_quantity span"
    );
    if (Number(itemQuantity.innerHTML) < 2) {
      cartBoardList.removeChild(cartItem);
      document.querySelector(".cart span").innerHTML =
        cartBoardList.childElementCount - 1;
    } else {
      itemQuantity.innerHTML = Number(itemQuantity.innerHTML) - 1;
    }
  });
  addCartItem(cartItem);
});

function addCartItem(cartItem) {
  cartItems = document.querySelectorAll(".cart_board_list_item");

  let cartItemImage = cartItem.querySelector("img").getAttribute("src");
  if (cartItems.length == 0) {
    cartBoardList.appendChild(cartItem);
  } else {
    let isAppear = false;
    cartItems.forEach((item) => {
      let itemImage = item.querySelector("img").getAttribute("src");
      console.log(cartItemImage, itemImage);
      if (cartItemImage === itemImage) {
        let itemQuantity = item.querySelector(
          ".cart_board_list_item_content_text_quantity span"
        );
        itemQuantity.innerHTML = Number(itemQuantity.innerHTML) + 1;
        isAppear = true;
      }
      if (isAppear == false) {
        cartBoardList.appendChild(cartItem);
      }
    });
  }
  document.querySelector(".cart span").innerHTML =
    cartBoardList.childElementCount - 1;
}

let buyClothBag = document.querySelector(".clothBag_content_button");
buyClothBag.addEventListener("click", () => {
  let clothBagImage = buyClothBag.parentElement.parentElement.querySelector(
    ".clothBag_image img"
  );
  let cartItem = document.createElement("div");
  cartItem.classList.add("cart_board_list_item");
  cartItem.innerHTML = `<div class="cart_board_list_item_content">
            <img src="${clothBagImage.getAttribute("src")}" alt="" />
            <div class="cart_board_list_item_content_text ff_Open_Sans">
              <h2>Zeniva EcoBag</h2>
              <p>
                $4
                <span class="freeShip ff_Open_Sans"
                  >FREE SHIPPING ON ORDERS OVER $75</span
                >
              </p>
              <div class="cart_board_list_item_content_text_quantity">
                <i class="fa-solid fa-plus"></i>
                <span>1</span>
                <i class="fa-solid fa-minus"></i>
              </div>
            </div>
          </div>`;
  let plus = cartItem.querySelector(
    ".cart_board_list_item_content_text_quantity .fa-plus"
  );
  plus.addEventListener("click", () => {
    let itemQuantity = cartItem.querySelector(
      ".cart_board_list_item_content_text_quantity span"
    );
    itemQuantity.innerHTML = Number(itemQuantity.innerHTML) + 1;
  });
  let minus = cartItem.querySelector(
    ".cart_board_list_item_content_text_quantity .fa-minus"
  );
  minus.addEventListener("click", () => {
    let itemQuantity = cartItem.querySelector(
      ".cart_board_list_item_content_text_quantity span"
    );
    if (Number(itemQuantity.innerHTML) < 2) {
      cartBoardList.removeChild(cartItem);
      document.querySelector(".cart span").innerHTML =
        cartBoardList.childElementCount - 1;
    } else {
      itemQuantity.innerHTML = Number(itemQuantity.innerHTML) - 1;
    }
  });
  addCartItem(cartItem);
});
