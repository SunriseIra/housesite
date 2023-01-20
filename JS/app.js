$(document).ready(function () {
  $(".findetheplace_foto_slider").slick({
    arrows: true,
    slidesToScroll: 1,
    // dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    variableWidth: true,
  });

  $(".slick_carousel").slick({
    infinite: false,
    speed: 50,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: ".slick_prev_arrow.slick-arrow",
    nextArrow: ".slick_next_arrow.slick-arrow",
  });

  $(".filter button").on("click", function () {
    var filter = $(this).data("filter");

    $(".slick_carousel").slick("slickUnfilter");

    if (filter == "villa") {
      $(".slick_carousel").slick("slickFilter", ".villa");
    } else if (filter == "apartment") {
      $(".slick_carousel").slick("slickFilter", ".apartment");
    } else if (filter == "house") {
      $(".slick_carousel").slick("slickUnfilter");
    }
  });

  $(".review_slider").slick({
    centerMode: true,
    infinite: true,
    arrows: false,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 410,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1,
        },
      },
    ],
  });
});

let butHouse = document.querySelectorAll(".button_filter_vil");
let buttonHouse = Array.from(butHouse);
// console.log(buttonHouse);
buttonHouse.forEach((elem) => {
  elem.addEventListener("click", function () {
    // console.log(elem);
    buttonHouse.forEach((elem) => {
      elem.classList.remove("activeS");
    });
    elem.classList.add("activeS");
  });
});

let sarrow = document.querySelectorAll(".slick-arrow");
let arrow = Array.from(sarrow);

arrow.forEach((elem) => {
  elem.addEventListener("click", function () {
    arrow.forEach((elem) => {
      elem.classList.remove("arrowActive");
    });
    elem.classList.add("arrowActive");
  });
});

///pop up
let popupLink = document.querySelectorAll(".popup-link");
let closePopup = document.querySelector(".popup_close");
let popup = document.querySelector(".popup");
let popupBody = document.querySelector(".popup_body");
let videoElem = document.querySelector(".video-container video");

if (popupLink.length > 0) {
  for (let i = 0; i < popupLink.length; i++) {
    let popupLinks = popupLink[i];
    popupLinks.addEventListener("click", (e) => {
      e.preventDefault();
      popup.classList.add("active");
    });
  }
}

closePopup.addEventListener("click", (e) => {
  e.preventDefault();
  videoElem.pause();
  videoElem.currentTime = 0;
  popup.classList.remove("active");
});

popup.addEventListener("click", (e) => {
  if (!e.target.closest(".popup_content")) {
    videoElem.pause();
    videoElem.currentTime = 0;
    popup.classList.remove("active");
  }
});

// function toggle() {
//   trailerElem.classList.add("active");
//   videoElem.play();
//   videoElem.currentTime = 0;
// }

// function close() {
//   trailerElem.classList.remove("active");
//   videoElem.pause();
//   videoElem.currentTime = 0;
// }
