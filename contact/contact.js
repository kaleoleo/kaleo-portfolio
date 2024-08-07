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

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 1000,
  delay: 250,
});

ScrollReveal().reveal(".btn-send", { origin: "top" });
