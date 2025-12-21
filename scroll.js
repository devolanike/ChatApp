const elements = document.querySelectorAll(
  ".div1b, .logo, .nav-features, .material-symbols-outlined"
);

window.addEventListener("scroll", () => {
  elements.forEach((el) => {
    el.classList.toggle("scrolled", window.scrollY > 520);
  });
});

const element2 = document.querySelectorAll(
  ".div1b"
);

window.addEventListener("scroll", () => {
  element2.forEach((el) => {
    el.classList.toggle("OpacityScrolled", window.scrollY > 50);
  });
});
AOS.init();
