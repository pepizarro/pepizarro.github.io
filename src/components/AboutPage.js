export class AboutPage extends HTMLElement {
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
            <div id="page-component" class="hidden w-full px-12 mb-40">
                <div id="about-title" class="w-full flex flex-col justify-start mb-14">
                    <h1 class="text-4xl font-bold mt-3" lang-key="about-title"></h1>
                    <p lang-key="about-description" class="text-sm text-gray-500 pt-1"></p>
                </div>

                <div class="mb-20 flex flex-col gap-6" id="about-experience">
                    <h2 lang-key="about-education-title" class="text-2xl font-bold"></h2>

                    <div id="uai-block" class="bg-uaiLightCursorGradient dark:bg-uaiDarkCursorGradient hover:scale-[1.02] transition-transform duration-500 ease-in-out flex flex-col-reverse md:flex-row justify-center items-center gap-12 p-4 border border-gray-200 dark:border-[#202325] min-h-64 rounded-2xl">
                        <div id="image-container" class="max-w-[200px]  bg-black h-[200px] rounded-full flex items-center justify-center">
                            <img class="p-4" src="/assets/uai2.png" alt="uai">
                        </div>
                        <div class="max-w-[236px] flex flex-col gap-2 w-full">
                            <h3 lang-key="about-uai-title" class="text-xl font-bold"></h3>
                            <p class="text-sm font-medium italic text-gray-500 dark:text-gray-600">2021 - 2025</p>
                            <p lang-key="about-uai-description" class="text-sm"></p>
                        </div>
                    </div>

                    <p lang-key="about-uai-caption" class="text-gray-700 dark:text-gray-400 text-pretty"></p>
                    <p lang-key="about-uai-caption2" class="text-gray-700 dark:text-gray-400 text-pretty"></p>
                </div>
                
                <div class="mb-20 flex flex-col gap-6" id="about-experience">
                    <h2 lang-key="about-experience-title" class="text-2xl font-bold "></h2>
                    <div id="leasity-block" class="bg-leasityLightCursorGradient dark:bg-leasityDarkCursorGradient hover:scale-[1.02] transition-transform duration-500 ease-in-out flex flex-col-reverse md:flex-row justify-center items-center gap-12 p-4 border border-gray-200 dark:border-[#202325] min-h-64 rounded-2xl">
                        <div class="max-w-[236px] md:w-[236px] mb-5 flex items-center justify-center">
                            <img src="/assets/leasity.png" alt="leasity">
                        </div>
                        <div class="max-w-[236px] flex flex-col gap-2 w-full">
                            <h3 lang-key="about-leasity-title" class="text-xl font-bold transform-none"></h3>
                            <p lang-key="about-leasity-date" class="text-sm font-medium italic text-gray-500 dark:text-gray-600"></p>
                            <p lang-key="about-leasity-description" class="text-sm"></p>
                            <ul class="list-disc list-inside text-sm">
                                <li class="text-blue-600 dark:text-blue-400 font-medium">Golang</li>
                            </ul>
                        </div>
                    </div>
                    
                    <p lang-key="about-leasity-caption" class="text-gray-700 dark:text-gray-400 text-pretty"></p>
                    <p lang-key="about-leasity-caption2" class="text-gray-700 dark:text-gray-400 text-pretty"></p>
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
