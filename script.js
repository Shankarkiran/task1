document.addEventListener("DOMContentLoaded", function () {
  const nav = document.getElementById("nav");


  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      nav.classList.add("nav-scrolled");
    } else {
      nav.classList.remove("nav-scrolled");
    }
  });

  
});
