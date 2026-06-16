$().on("", function(){
    
})




// 목업
$(window).on("scroll", function () {
  // 스크롤값
  let scrollTop = $(window).scrollTop();
  // console.log(scrollTop);

  // con02의 위치값
  let con02Top = $(".con02").offset().top;
  // console.log(con02Top);
  base = -300;
  if (scrollTop >= con02Top + base) {
    $(".box .folio").addClass("active");
  } else {
    $(".box .folio").removeClass("active");
  }
});

// con03
$(window).on("scroll", function () {
  // 스크롤값
  let scrollTop = $(window).scrollTop();
  // console.log(scrollTop);

  // con03의 위치값
  let con03Top = $(".con03").offset().top;
  // console.log(con03Top);
  base = -300;
  if (scrollTop >= con03Top + base) {
    $(".con03 .folio_1").addClass("active_1");
  } else {
    $(".con03 .folio_1").removeClass("active_1");
  }
});

// header

$(function () {
  $(".bar").on("click", function (e) {
    e.preventDefault();

    console.log("클릭!");

    $("header ul").toggleClass("on");
  });
});
