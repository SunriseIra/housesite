$(document).ready(function () {
  // findetheplace_foto_slider
  $(".findetheplace_foto_slider").slick({
    arrows: true,
    slidesToScroll: 1,
    // dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    variableWidth: true,
  });

  // slick_carousel_filtering
  $(".slick_carousel").slick({
    infinite: false,
    speed: 50,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: ".slick_prev_arrow",
    nextArrow: ".slick_next_arrow",
    responsive: [
      {
        breakpoint: 770,
        settings: {
          arrows: true,
          prevArrow: ".slick_prev_arrow",
          nextArrow: ".slick_next_arrow",
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          prevArrow: ".slick_prev_arrow",
          nextArrow: ".slick_next_arrow",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  // slick_carousel_filtering filter
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

  // review_slider_inner
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

// slick_carousel_filtering filter button_filter
let butHouse = document.querySelectorAll(".button_filter_vil");
let buttonHouse = Array.from(butHouse);
buttonHouse.forEach((elem) => {
  elem.addEventListener("click", function () {
    buttonHouse.forEach((elem) => {
      elem.classList.remove("activeS");
    });
    elem.classList.add("activeS");
  });
});

// slick-arrow
let sarrow = document.querySelectorAll(".slick-arrow");
let arrow = Array.from(sarrow);

arrow.forEach((elem) => {
  elem.addEventListener("click", function () {
    console.log(elem);
    arrow.forEach((elem) => {
      elem.classList.remove("arrowActive");
    });
    elem.classList.add("arrowActive");
  });
});

///pop up +  video pause
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

// / Stop the form from submitting when a button is pressed
let form = document.querySelector(".sectsubscribe");
let emailInput = document.querySelector(".subscribesect_input");
let submitBtn = document.querySelector(".subscribesect_btn");
let savedmail = document.querySelector(".sectsubscribe_form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let err = validateInput();

  if (err == 0) {
    console.log("Your email has been saved");
    localStorage.setItem("email", JSON.stringify(emailInput.value));
    form.reset();
    emailInput.classList.add("activeRed");
  }
});

function validateInput() {
  let regEmail =
    /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
  return validate(regEmail, emailInput);
}

function validate(regex, elem) {
  let i = 0;
  if (regex.test(elem.value)) {
    emailInput.classList.remove("activeRed");
  } else {
    emailInput.classList.add("activeRed");
    i++;
  }
  return i;
}

let StorEmail = localStorage.getItem("email");

if (StorEmail !== null) {

  form.classList.add("active");
  savedmail.textContent = "Your email has been saved!";
} else {
  form.classList.remove("active");
}

