// código js de mi sitio web que actúa sobre el menu
const change_view = window.matchMedia("screen and (max-width:767px)");

const menu_prop = document.querySelector(".menu");

const icon_menu = document.querySelector("#burger_icon");

change_view.addListener(validation);

function validation(event) {
  if (event.matches) {
    icon_menu.addEventListener("click", watchButton);
  } else {
    icon_menu.removeEventListener("click", watchButton);
  }
}

validation(change_view);

function watchButton() {
  if (menu_prop.classList.contains("menu_active")) {
    menu_prop.classList.remove("menu_active");
  } else {
    menu_prop.classList.add("menu_active");
  }
}
// menu_prop.classList.add("menu_active");
