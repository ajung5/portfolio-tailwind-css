// untuk bagian hamburger
const hamburger = document.querySelector("#hamburger"); // memanggil nama #id

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
});

//navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header"); // langsung memanggil nama element "header"
  const fixedNav = header.offsetTop; // mengambil jarak dari posisi header terhadap top nya

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};
