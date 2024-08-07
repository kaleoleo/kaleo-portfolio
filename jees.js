// scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").classList.remove("show");
  } else {
    document.getElementById("header").classList.add("show");
  }
  prevScrollpos = currentScrollPos;
};

// scroll gelap
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".text").css({ opacity: "0.4" });
    } else {
      $(".text").css({ opacity: "1", transition: "0.5s" });
    }
  });
});

// class active
const menuNav = document.querySelector(".menu-nav");

// jika diklik
document.querySelector("#meni").onclick = () => {
  menuNav.classList.toggle("active");
};

// tag
document.querySelector("#tag").onclick = () => {
  menuNav.classList.remove("active");
};
