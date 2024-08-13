// We can make the router reusable by making it receive a collection

import { addEffects } from "./Effects.js";
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
            // add it to the child also
            // a.children[0].addEventListener("click", event => {
            //     event.preventDefault();
            //     const url = event.target.getAttribute("href");
            //     Router.go(url);
            // })
        })

        // Event handler for URL changes
        window.addEventListener("popstate", event => {
            Router.go(event.state.path, false);
        });

        // Check the initial URL
        Router.go(location.pathname);
    },

    go: (path, addToHistory = true) => {
        console.log('Router.go', path);

        document.querySelectorAll("a.navlink").forEach(a => {
            a.classList.remove("bg-[#dee2e6]", "dark:bg-[#2e2e2e]", "rounded-md", "!text-black", "dark:!text-white");
        })

        if (addToHistory) {
            history.pushState({ path }, "", path);
        }

        let page = null
        switch (path) {
            case "/":
                page = document.createElement("home-page");
                break;

            case "/about":
                document.getElementById("about").classList.add("bg-[#dee2e6]", "dark:bg-[#2e2e2e]", "rounded-md", "!text-black", "dark:!text-white");
                page = document.createElement("about-page");
                break;

            case "/projects":
                document.getElementById("projects").classList.add("bg-[#dee2e6]", "dark:bg-[#2e2e2e]", "rounded-md", "!text-black", "dark:!text-white");
                page = document.createElement("projects-page");
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
            if (path = "/about") {
                addEffects();
            }
        } else {
            // Here we can display a 404 page
        }
        window.scrollX = 0;
        window.scrollY = 0;

    }
}

export default Router;
