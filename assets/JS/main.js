var picNum = 0;
var count_slide = $('#carouselExampleFade .carousel-item').length - 1;

$(".carousel-control-next").click(function() {
  $("#ed-body").removeClass("bg-img" + picNum);
    picNum++;
    if (picNum > count_slide) {
      picNum = 0;
    }
  $("#ed-body").addClass("bg-img" + picNum);
});

$(".carousel-control-prev").click(function() {
  $("#ed-body").removeClass("bg-img" + picNum);
    picNum--;
    if (picNum < 0) {
      picNum = count_slide;
    }
  $("#ed-body").addClass("bg-img" + picNum);
});