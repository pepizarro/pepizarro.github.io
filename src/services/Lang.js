
const Lang = {
    locale: "en",
    translations: {}
}

export const proxiedLang = new Proxy(Lang, {
    set(target, property, value) {
        if (property === "locale") {
            if (value !== "en" && value !== "es") {
                value = "en"
            }
            target[property] = value;
            window.dispatchEvent(new CustomEvent("applangchange"))
        }

        if (property === "translations") {
            target[property] = value;
            window.dispatchEvent(new CustomEvent("apptranslationschange"))
            // translatePage();
        }

        return true;
    },
    get(target, property) {
        return target[property];
    }
});

export function translatePage(translations) {
    translations = app.lang.translations;
    // console.log('translatePage: ', translations);
    document
        .querySelectorAll("[lang-key]")
        .forEach(element => translateElement(element, translations[app.lang.locale]));
}

function translateElement(element, translations) {
    const key = element.getAttribute("lang-key");
    // console.log('translateElement: ', element, key, translations);
    const translation = translations[key];
    element.innerText = translation;
}
