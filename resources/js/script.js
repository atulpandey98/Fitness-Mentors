document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector(".loader").style.visibility = "visible";
  } else {
    document.querySelector(".loader").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
  }
};

$(document).ready(function () {
  // For sticky navigation
  $("nav").removeClass("sticky");
  $(".js--section-features").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "60px",
    }
  );

  // Buttons scroll
  $(".js--scroll-to-plans").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-plans").offset().top },
      1000
    );
  });

  $(".js--scroll-to-start").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-features").offset().top },
      1000
    );
  });

  // Animations on scroll

  $(".js--wp-1").waypoint(
    function (direction) {
      $(".js--wp-1").addClass("animated animate__zoomIn");
    },
    {
      offset: "50%",
    }
  );

  $(".js--wp-2-1").waypoint(
    function (direction) {
      $(".js--wp-2-1").addClass("animated animate__fadeInLeft");
    },
    {
      offset: "50%",
    }
  );

  $(".js--wp-2-2").waypoint(
    function (direction) {
      $(".js--wp-2-2").addClass("animated animate__fadeInRight");
    },
    {
      offset: "50%",
    }
  );

  $(".js--wp-3").waypoint(
    function (direction) {
      $(".js--wp-3").addClass("animated animate__fadeIn");
    },
    {
      offset: "50%",
    }
  );

  $(".js--wp-4").waypoint(
    function (direction) {
      $(".js--wp-4").addClass("animated animate__shakeY");
    },
    {
      offset: "50%",
    }
  );

  // Mobile nav

  $(".js--nav-icon").click(function () {
    var nav = $(".js--main-nav");
    var icon = $(".js--nav-icon");
    nav.slideToggle(200);

    // Toggle nav-icons
    $(".js--nav-icon i .js--navbar-cross").hide();
    $(".js--nav-icon i .js--navbar-lines").show();

    $("i").toggle();
  });
});
