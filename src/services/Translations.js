import API from "./API.js";

export async function loadTranslations() {
    app.lang.translations = await API.fetchTranslations();
}