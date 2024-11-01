export class ProjectsPage extends HTMLElement {
  constructor() {
    super();

    // const styles = document.createElement('style');
    // this.root.appendChild(styles);

    // async function loadCSS() {
    //     const request = await fetch("/components/MenuPage.css");
    //     styles.textContent = await request.text();
    // }
    // loadCSS();
  }

  // when the component is attached to the DOM
  connectedCallback() {
    this.style.width = "100%";
    this.innerHTML = "";

    this.innerHTML = `
            <div id="page-component" class="hidden w-full px-12 mb-28">
                <div class="w-full flex flex-col justify-start mb-10">
                    <h1 class="text-4xl font-bold mt-3" id="projects-title" lang-key="projects-title"></h1>
                    <p lang-key="projects-description" id="projects-description" class="text-gray-800 dark:text-gray-400 pt-1"></p>
                </div>

                
                <div class="flex flex-col gap-8">
                    <div id="projects-current">
                        <h2 lang-key="projects-current-title" class="text-lg font-semibold mb-3"></h2>
                        <ul class="list-disc list-inside text-gray-800 dark:text-gray-400 text-pretty">
                            <li lang-key="projects-current-1" class="text-black dark:text-white font-semibold  text-pretty"></li>
                            <p lang-key="projects-current-1-description" class="pl-3 mb-2 text-gray-800 dark:text-gray-400 text-pretty "></p>
                            <li lang-key="projects-current-2" class="text-black dark:text-white font-semibold  text-pretty"></li>
                            <p lang-key="projects-current-2-description" class="pl-3 mb-2 text-gray-800 dark:text-gray-400 text-pretty"></p>
                        </ul>
                    </div>

                    <div id="project-separator" class="border-b border-gray-300 dark:border-gray-800 opacity-70"></div>

                    <div id="project-redis">
                        <div class="flex flex-row gap-4 items-center mb-8">
                            <div id="image-container">
                                <img src="/assets/redis.svg" class="w-auto h-[86px]" alt="Redis Logo">
                            </div>
                            <div class="flex flex-col items-start">
                                <h2 lang-key="redis-title" class="text-xl font-medium"></h2>
                                <a lang-key="code" href="https://github.com/pepizarro/redis-go" target="_blank" class="text-gray-500 hover:underline"></a>
                            </div>
                        </div>

                        <p lang-key="redis-description" class="text-gray-800 dark:text-gray-400 text-pretty text-justify"></p>
                        <p lang-key="redis-codecrafters1" class="text-gray-800 dark:text-gray-400 text-pretty text-justify inline-block"></p>
                        <a href="https://codecrafters.io" target="_blank" class="text-blue-700 dark:text-blue-400">CodeCrafters</a>
                        <p lang-key="redis-codecrafters2" class="text-gray-800 dark:text-gray-400 text-pretty text-justify inline-block"></p>
                    </div>

                    <div id="project-separator" class="border-b border-gray-300 dark:border-gray-800 opacity-70"></div>

                    <div id="project-interny">
                        <div class="flex flex-row gap-4 items-center mb-8">
                            <svg width="72" height="72" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M23.0796 3.19686C23.6651 2.93438 24.3349 2.93438 24.9204 3.19686L46.6704 12.9469C47.4795 13.3095 48 14.1134 48 15C48 15.8866 47.4795 16.6905 46.6704 17.0531L39 20.4916V28.875C39 31.9467 36.5682 34.122 34.0218 35.3952C31.3407 36.7359 27.7944 37.5 24 37.5C23.1661 37.5 22.3477 37.4631 21.5505 37.3923C20.3127 37.2819 19.3987 36.1893 19.5089 34.9515C19.6191 33.7137 20.7118 32.7996 21.9495 32.91C22.6131 32.9691 23.2984 33 24 33C27.2473 33 30.0759 32.337 32.0094 31.3704C34.0776 30.3363 34.5 29.324 34.5 28.875V22.5088L24.9204 26.8031C24.3349 27.0656 23.6651 27.0656 23.0796 26.8031L12 21.8364V26.825C12.8881 27.141 13.7243 27.6518 14.4348 28.3622C15.7492 29.6767 16.5 31.5384 16.5 33.75V42.75C16.5 43.347 16.2629 43.9191 15.841 44.3412C15.419 44.763 14.8467 45.0003 14.2499 45L5.24991 44.9997C4.00731 44.9997 3 43.9923 3 42.7497V33.7497C3 31.5384 3.75081 29.6765 5.06529 28.362C5.77572 27.6516 6.61188 27.1409 7.5 26.825V19.8192L1.32962 17.0531C0.520623 16.6905 0 15.8866 0 15C0 14.1134 0.520623 13.3095 1.32962 12.9469L23.0796 3.19686ZM7.75047 15L24 22.2843L40.2495 15L24 7.71573L7.75047 15ZM7.5 33.7497C7.5 32.5863 7.87419 31.917 8.24721 31.5441C8.64141 31.1499 9.18153 30.9375 9.74997 30.9375C10.3184 30.9375 10.8585 31.1499 11.2527 31.5441C11.6258 31.9173 12 32.5866 12 33.75V40.5H7.5V33.7497Z" 
                                    class="fill-black dark:fill-gray-300"
                                />
                            </svg>
                            <div class="flex flex-col items-start">
                                <h2 lang-key="interny-title" class="text-xl font-medium"></h2>
                                <h3 lang-key="interny-subtitle" class="font-medium text-gray-800 dark:text-gray-400"></h3>
                                <a lang-key="code" href="https://github.com/pepizarro/interny" target="_blank" class="text-gray-500 hover:underline"></a>
                            </div>
                        </div>

                        <div class="flex flex-col gap-6 items-center justify-center">
                            <p lang-key="interny-description1" class="text-gray-800 dark:text-gray-400 text-pretty text-justify"></p>
                            <div class="w-[90%] h-auto rounded-md border-2 dark:border-gray-600 overflow-hidden hover:cursor-zoom-in">
                                <img class="object-cover" src="/assets/interny1.png" class="w-full h-auto" alt="Interny">
                            </div>
                            <div class="w-[90%] h-auto rounded-md border-2 dark:border-gray-600 overflow-hidden hover:cursor-zoom-in">
                                <img class="object-cover" src="/assets/interny2.png" class="w-full h-auto" alt="Interny">
                            </div>
                            <p lang-key="interny-description2" class="text-gray-800 dark:text-gray-400 text-pretty text-justify"></p>
                            <div class="w-[90%] h-auto rounded-md border-2 dark:border-gray-600 overflow-hidden hover:cursor-zoom-in">
                                <img class="object-cover" src="/assets/interny3.png" class="w-full h-auto" alt="Interny">
                            </div>
                            <p lang-key="interny-description3" class="text-gray-800 dark:text-gray-400 text-pretty text-justify"></p>
                            <p lang-key="interny-description4" class="text-gray-800 dark:text-gray-400 text-pretty text-justify"></p>
                        </div>
                    </div>

                    <div id="project-separator" class="border-b border-gray-300 dark:border-gray-800 opacity-70"></div>


                    <div id="project-portfolio">
                        <div class="flex flex-row gap-4 items-center mb-8">
                            <div id="image-container">
                                <img src="/assets/js.png" class="w-auto h-[76px]" alt="Redis Logo">
                            </div>
                            <div class="flex flex-col items-start">
                                <h2 lang-key="portfolio-title" class="text-xl font-medium"></h2>
                                <a lang-key="code" href="https://github.com/pepizarro/pepizarro.github.io" target="_blank" class="text-gray-500 hover:underline"></a>
                            </div>
                        </div>

                        <p lang-key="portfolio-description" class="text-gray-800 dark:text-gray-400 text-pretty text-justify"></p>
                    </div>

                </div>
            </div>
        `;

    const image = this.querySelector("#image-container img");
    const pageComponent = this.querySelector("#page-component");

    if (image.complete) {
      pageComponent.classList.remove("hidden");
    } else {
      image.onload = () => {
        pageComponent.classList.remove("hidden");
      };
    }
  }
}
