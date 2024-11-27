// ハンバーガーメニュー
$(function () {
    $(".toggle-btn").on("click", function () {
      $("header").toggleClass("open");
    });
  });

  $(".mask").on("click", function () {
    $("header").removeClass("open");
  });

  $(".menu a").on("click", function () {
    $("header").removeClass("open");
  });
    

// slick
$('.slide-items ul').slick({
  autoplay: true,
  autoplaySpeed: 800,
  arrows: false,
  dots: false,
  infinite: true,
  slidesToShow: 4,
  centerMode: true,
  centerPadding: '7%',
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});

// フェードイン
$(window).scroll(function () {
  // fadeinクラスに対して順に処理を行う
  $(".fadein").each(function () {
    // スクロールした距離
    let scroll = $(window).scrollTop();
    // fadeinクラスの要素までの距離
    let target = $(this).offset().top;
    // 画面の高さ
    let windowHeight = $(window).height();
    // fadeinクラスの要素が画面下にきてから200px通過した
    // したタイミングで要素を表示
    if (scroll > target - windowHeight + 200) {
      $(this).css("opacity", "1");
      $(this).css("transform", "translateY(0)");
    }
  });
});