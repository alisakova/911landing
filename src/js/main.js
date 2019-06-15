$(document).ready(function() {
  $(".reviews-slider").slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    centerPadding: "382px",
    centerMode: true,
    responsive: [
      {
        breakpoint: 1330,
        settings: {
          centerPadding: "250px"
        }
      },
      {
        breakpoint: 992,
        settings: {
          centerPadding: "150px"
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "100px"
        }
      },
      {
        breakpoint: 640,
        settings: {
          autoplay: false,
          centerMode: false,
          adaptiveHeight: true,
        }
      }
    ]
  });
  $(".coffee-slider").slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    centerPadding: '440px',
    centerMode: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          centerPadding: "250px"
        }
      },
      {
        breakpoint: 992,
        settings: {
          centerPadding: "150px"
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "100px"
        }
      },
      {
        breakpoint: 640,
        settings: {
          autoplay: false,
          centerMode: false,
        }
      }
    ]
  });
});

$(window).resize(function() {
  $(".reviews-slider").slick("resize");
  $(".coffee-slider").slick("resize");
});

var toTopBtn = document.querySelector(".btn-up");
var scrollAnimation;

if (toTopBtn) {
  window.onscroll = function() {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      toTopBtn.classList.add("active");
    } else {
      toTopBtn.classList.remove("active");
    }
  }

  function scrollToTop() {
    var position =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (position) {
      window.scrollBy(0, -Math.max(10, Math.floor(position / 10)));
      scrollAnimation = setTimeout("scrollToTop()", 10);
    } else clearTimeout(scrollAnimation);
  }
}
