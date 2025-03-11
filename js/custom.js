$(document).ready(function () {
  $(document).on("click", ".hamburg", function (e) {
      e.stopPropagation();
      $(".navigation-row2").toggleClass("open");
      $(".header-widget").toggleClass("active-nav");
      $("body").toggleClass("overHdn");
  });
  $(document).on("click", ".close-nav", function (e) {
    e.stopPropagation();
    $(".navigation-row2.open").removeClass("open");
    $(".header-widget.active-nav").removeClass("active-nav");
    $("body").removeClass("overHdn");
  });
  $(document).on("click", ".navigation-row2", function (e) {
    e.stopPropagation();
  });
  $(document).click(function () {
    $(".navigation-row2.open").removeClass("open");
    $(".header-widget.active-nav").removeClass("active-nav");
    $("body").removeClass("overHdn");
  });
});

//////////////////////////////////////////////////////////////////

