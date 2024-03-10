const API = {
    languages: ["en", "es"],

    fetchTranslations: async () => {
        let translations = {};
        for (let lang of API.languages) {
            const response = await fetch(`src/lang/${lang}.json`);
            translations[lang] = await response.json();
        }
        return translations;
    }


}

export default API;