let open = false;
const toggleMenu = e => {
  e.stopPropagation();
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.toggle("menu--open");
  if (open === false) {
    open = true;
    menu.style.animation = "slidein  0.5s linear";
  } else {
    open = false;
    menu.style.animation = "slideout  0.5s linear";
  }
};

const altToggleMenu = () => {
  if (menu.classList.contains("menu--open")) {
    open = false;
    menu.classList.toggle("menu--open");
    menu.style.animation = "slideout  0.5s linear";
  }
};

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");
// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", toggleMenu, false);
document.addEventListener("click", altToggleMenu, false);
