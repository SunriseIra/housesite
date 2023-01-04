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
      infinite: true,
  
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