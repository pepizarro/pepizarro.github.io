import Router from "./src/services/Router.js";
import { proxiedLang, translatePage } from "./src/services/Lang.js";
import { HomePage } from "./src/components/HomePage.js";
import { AboutPage } from "./src/components/AboutPage.js";
import { loadTranslations } from "./src/services/Translations.js";
import { ProjectsPage } from "./src/components/ProjectsPage.js";


window.app = {}
app.lang = proxiedLang;
app.router = Router;


customElements.define('home-page', HomePage);
customElements.define('about-page', AboutPage);
customElements.define('projects-page', ProjectsPage);



window.addEventListener("DOMContentLoaded", async () => {
  // setLocale();
  // loadTranslations();
  await loadTranslations();
  app.router.init();

  console.log("DOM fully loaded and parsed");
});

window.addEventListener("applangchange", () => {
  console.log("EVENT Lang changed", app.lang.locale);
  translatePage();
});

window.addEventListener("apptranslationschange", () => {
  console.log("EVENT Translations changed", app.lang.translations);
  translatePage();
});


function showDropdownMenu() {
  document.getElementById("config-menu").classList.toggle("hidden");
}
document.getElementById("config-menu-icon").addEventListener("click", showDropdownMenu);

// theme change
function changeTheme() {
  console.log("changeTheme");
  const htmltag = document.getElementsByTagName("html")[0];
  htmltag.classList.toggle("dark");
}
document.getElementById("changethemebutton").addEventListener("click", changeTheme);


// temporary function to change language
function changeLang(locale) {
  const buttonStyles = ["bg-[#dee2e6]", "dark:bg-gray-800", "text-gray-950", "dark:text-gray-200"];
  document.querySelectorAll(".change-lang").forEach(button => {
    button.classList.remove(...buttonStyles);
  });

  const currentLang = app.lang.locale;
  if (currentLang !== locale) {
    document.getElementById(`change-lang-${locale}`).classList.add(...buttonStyles);
    console.log("changeLang func", locale);
    app.lang.locale = locale;
  }
}

document.addEventListener("click", (event) => {
  let configMenu = document.getElementById("config-menu");
  let configMenuIcon = document.getElementById("config-menu-icon");
  if (!configMenu.contains(event.target) && !configMenuIcon.contains(event.target)) {
    configMenu.classList.add("hidden");
  }
})



document.getElementById("change-lang-es").addEventListener("click", () => changeLang("es"));
document.getElementById("change-lang-en").addEventListener("click", () => changeLang("en"));
