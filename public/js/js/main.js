new WOW().init();

$(function () {
  var s, e;
  (s = $(".open-nav-btn")),
    (e = $(".header-nav")),
    s.on("click", function () {
      e.toggleClass("show"),
        $(this).toggleClass("active"),
        $(".overlay").toggleClass("show"),
        $("body").toggleClass("no-scroll"),
        $("html").toggleClass("no-scroll");
    }),
    $(".scroll-to-section").on("click", function (s) {
      s.preventDefault();
      var e = $(this).attr("href"),
        o = $(e).offset().top;
      $("body,html").animate({ scrollTop: o - 250 }, 1e3);
    }),
    $(".nav-drop-item").on("click", function () {
      var s = $(this).attr("href"),
        e = $(s).offset().top;
      $("body,html").animate({ scrollTop: e - 250 }, 1e3);
    }),
    $(window).outerWidth() > 1199 &&
      $(".nav-drop-list a").hover(function (s) {}),
    $(".sub-menu-open").on("click", function (s) {
      s.preventDefault(), $(".sub-menu-holder").slideToggle();
    }),
    // $(window).outerWidth() > 767 &&
    //   $(".text-scroll").mCustomScrollbar({ theme: "dark-thin" }),
    // $(".partners-slider").slick({
    //   dots: !1,
    //   speed: 600,
    //   infinite: !0,
    //   slidesToShow: 6,
    //   slidesToScroll: 1,
    //   arrows: !0,
    //   prevArrow:
    //     '<button class="partners-slider-prev"><i class="fas fa-chevron-left"></i></button>',
    //   nextArrow:
    //     '<button class="partners-slider-next"><i class="fas fa-chevron-right"></i></button>',
    //   autoplay: !1,
    //   responsive: [
    //     { breakpoint: 1200, settings: { slidesToShow: 3 } },
    //     { breakpoint: 992, settings: { slidesToShow: 2 } },
    //     { breakpoint: 576, settings: { slidesToShow: 1 } },
    //   ],
    // }),
    // $(".blog-slider").slick({
    //   dots: !1,
    //   speed: 600,
    //   infinite: !0,
    //   slidesToShow: 2,
    //   slidesToScroll: 1,
    //   arrows: !0,
    //   prevArrow:
    //     '<button class="blog-slider-prev"><i class="fas fa-chevron-left"></i></button>',
    //   nextArrow:
    //     '<button class="blog-slider-next"><i class="fas fa-chevron-right"></i></button>',
    //   autoplay: !1,
    //   responsive: [{ breakpoint: 992, settings: { slidesToShow: 1 } }],
    // }),
    // $(".reviews-slider").slick({
    //   dots: !1,
    //   speed: 600,
    //   infinite: !0,
    //   slidesToShow: 3,
    //   slidesToScroll: 1,
    //   arrows: !0,
    //   prevArrow:
    //     '<button class="reviews-slider-prev"><i class="fas fa-chevron-left"></i></button>',
    //   nextArrow:
    //     '<button class="reviews-slider-next"><i class="fas fa-chevron-right"></i></button>',
    //   autoplay: !1,
    //   responsive: [
    //     { breakpoint: 1200, settings: { slidesToShow: 2 } },
    //     { breakpoint: 992, settings: { slidesToShow: 1 } },
    //   ],
    // }),
    // $(".accreditation-slider").slick({
    //   dots: !1,
    //   speed: 600,
    //   infinite: !0,
    //   slidesToShow: 4,
    //   slidesToScroll: 1,
    //   arrows: !0,
    //   prevArrow:
    //     '<button class="accreditation-slider-prev"><i class="fas fa-chevron-left"></i></button>',
    //   nextArrow:
    //     '<button class="accreditation-slider-next"><i class="fas fa-chevron-right"></i></button>',
    //   autoplay: !1,
    //   responsive: [
    //     { breakpoint: 1200, settings: { slidesToShow: 3 } },
    //     { breakpoint: 992, settings: { slidesToShow: 2 } },
    //     { breakpoint: 576, settings: { slidesToShow: 1 } },
    //   ],
    // }),
    // $(".footer-social").slick({
    //   dots: !1,
    //   speed: 600,
    //   infinite: !0,
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   arrows: !0,
    //   prevArrow: $(".slick-prev"),
    //   nextArrow: $(".slick-next"),
    //   autoplay: !1,
    // }),
    $(".read-more-link").click(function () {
      "Read More" == $(this).text()
        ? $(".read-more-link").text("Read Less")
        : $(".read-more-link").text("Read More"),
        $(".text-scroll-content").toggleClass("show");
    });
});

// $(window).load(function () {
//   $(".text-scroll").mCustomScrollbar({
//     theme: "dark-3",
//     scrollButtons: { enable: false },
//     // autoHideScrollbar: "true",
//     // alwaysShowScrollbar : 0
//   });
// });
