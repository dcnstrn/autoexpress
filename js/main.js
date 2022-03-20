$(function () {
  $(".carusel__inner").slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 841,
        settings: {
          // arrows: false,
          // dots: true,
          slidesToShow: 2,
          // slidesToScroll: 1,
          // infinite: true,
          // speed: 800,
          // autoplay: true,
          // autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
