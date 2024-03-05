function toggleMobileMenu() {
  let topMenuNav = document.getElementById("topMenuNav");
  topMenuNav.classList.toggle("active");
}

document
  .getElementById("topMenuNav")
  .addEventListener("click", toggleMobileMenu);

document
  .getElementById("mobileMenuIcon")
  .addEventListener("click", toggleMobileMenu);
