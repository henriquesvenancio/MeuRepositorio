document.addEventListener("DOMContentLoaded", function () {

  const btn = document.getElementById("menuBtn");
  const menu = document.getElementById("menu");
  const links = menu.querySelectorAll("a");

  btn.addEventListener("click", function () {
    menu.classList.toggle("active");

    btn.innerHTML = menu.classList.contains("active") ? "✖" : "☰";
  });

  // FECHAR MENU AO CLICAR NUM LINK
  links.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      btn.innerHTML = "☰";
    });
  });
  
  
  window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    menu.classList.add("scrolled");
  } else {
    menu.classList.remove("scrolled");
  }
});

});