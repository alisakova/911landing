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
          dots: true,
        }
      }
    ]
  });
  $(".coffee-slider").slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 700,
    centerPadding: '440px',
    centerMode: true,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          centerPadding: "350px"
        }
      },
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
          adaptiveHeight: true,
          dots: true,
        }
      }
    ]
  });
});

$(window).resize(function() {
  $(".reviews-slider").slick("resize");
  $(".coffee-slider").slick("resize");
});

$('.coffee-slider__slide').click(function(e) {
  var clickedSlide = $(this);
  changeSlide(clickedSlide);
});

$('.reviews-slider__slide').click(function(e) {
  var clickedSlide = $(this);
  changeSlide(clickedSlide);
});

var changeSlide = function(clickedSlide) {
  var slider = clickedSlide.closest('.slick-slider');
  var currentSlide = slider.find('.slick-current');
  var currentSlideIndex = currentSlide.data('slick-index');
  var clickedSlideIndex = clickedSlide.data('slick-index');
  if (clickedSlideIndex < currentSlideIndex) {
    slider.slick('slickPrev');
  } else {
    slider.slick('slickNext');
  }
};

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
