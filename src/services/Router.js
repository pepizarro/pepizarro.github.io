// We can make the router reusable by making it receive a collection

import { translatePage } from "./Lang.js";

// of routes and their corresponding components. 
const Router = {
    init: () => {
        document.querySelectorAll("a.navlink").forEach(a => {
            a.addEventListener("click", event => {
                event.preventDefault();
                const url = event.target.getAttribute("href");
                Router.go(url);
            })
        })

        // Event handler for URL changes
        window.addEventListener("popstate", event => {
            Router.go(event.state.path, false);
        });

        // Check the initial URL
        Router.go(location.pathname); 
    },

    go: (path, addToHistory = true) => {
        // console.log('Router.go', path);

        if (addToHistory) {
            history.pushState({ path }, "", path);
        }

        let page = null
        switch (path) {
            case "/":
                page = document.createElement("home-page");
                break;

            case "/about":
                page = document.createElement("about-page");
                break;

            default:
                page = null;
        }

        let main = document.querySelector("main");
        // console.log("page: ", page);
        if (page) {
            // document.querySelector("main").children[0].remove();
            main.innerHTML = "";
            main.appendChild(page);
            console.log("translating page from router")
            translatePage();
        } else {
            // Here we can display a 404 page
        }
        window.scrollX = 0;
        window.scrollY = 0;

    }
}

export default Router;