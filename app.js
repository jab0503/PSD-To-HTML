var mixer = mixitup(".mixItUp");

// stop warning
console.warn = "";

function openMenu(self) {
  var nav = document.querySelector("#hamburger");
  nav.classList.add("animate__fadeInLeft");
  nav.style.display = "block";
  self.style.display = "none";
}
function closeMenu() {
  document.querySelector("#hamburger").style.display = "none";
  document.querySelector(".hamburger-ico").style.display = "block";
}

$(function () {
  $.scrollify({
    section: ".scrollify",
    setHeights: false,
    updateHash: false,
  });
});

document.querySelectorAll('.menu-items a[href^="#"]').forEach((e) => {
  e.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
