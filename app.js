import Router from "./src/services/Router.js";
import { proxiedLang, translatePage } from "./src/services/Lang.js";
import { HomePage } from "./src/components/HomePage.js";
import { AboutPage } from "./src/components/AboutPage.js";
import { loadTranslations } from "./src/services/Translations.js";


window.app = {}
app.lang = proxiedLang;
app.router = Router;


customElements.define('home-page', HomePage);
customElements.define('about-page', AboutPage);

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


// theme change
function changeTheme(){
  console.log("changeTheme");
  const htmltag = document.getElementsByTagName("html")[0];
  htmltag.classList.toggle("dark");
}
document.getElementById("changethemebutton").addEventListener("click", changeTheme);


// temporary function to change language
function changeLang(locale){
  const currentLang = app.lang.locale;
  if (currentLang !== locale){
    console.log("changeLang func", locale);
    app.lang.locale = locale;
  }
}

document.getElementById("change-lang-es").addEventListener("click", () => changeLang("es"));
document.getElementById("change-lang-en").addEventListener("click", () => changeLang("en"));
