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

// sr
ScrollReveal({
  reset: "",
  distance: "90px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".appdev", { origin: "left" });
ScrollReveal().reveal(".webdev", { origin: "right" });

ScrollReveal({
  reset: "",
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".wrapper-de", { origin: "bottom" });
