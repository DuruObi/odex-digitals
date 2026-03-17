console.log("OEDX DIGITALS website loaded");

const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 768 && nav) {
    nav.classList.remove("active");
  }
});