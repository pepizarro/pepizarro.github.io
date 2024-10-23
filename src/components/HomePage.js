export class HomePage extends HTMLElement {
  constructor() {
    super();
  }

  // when the component is attached to the DOM
  connectedCallback() {
    this.style.width = "100%";
    this.innerHTML = "";

    this.innerHTML = `
            <div id="page-component" class="hidden w-full max-h-[500px] px-12 grid grid-rows-[112px,80px,_1fr] md:grid-rows-[70px,_1fr,_1fr] grid-cols-[142px,_1fr]">
                <div id="home-image" class="object-cover  w-28 h-28 justify-self-start self-center rounded-full row-start-1 row-span-1 col-span-1 md:row-start-2">
                    <img src="/assets/profile.png" class="rounded-full w-28 h-28" alt="Pedro Pizarro">
                </div>
                <h1 id="home-title" class="text-4xl font-bold justify-self-start self-center row-span-1 col-span-1 md:col-span-2">Pedro Pizarro</h1>
                <div class="row-start-2 self-center flex flex-row md:flex-col gap-4" id="home-links">
                    <a href="https://github.com/pepizarro" target="_blank" class="group w-min">
                        <div class="flex flex-row gap-2">
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_10_79)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4628 0C5.57117 0 0 5.72917 0 12.8169C0 18.4826 3.56964 23.2784 8.52168 24.9758C9.14082 25.1034 9.3676 24.7 9.3676 24.3607C9.3676 24.0635 9.34719 23.0451 9.34719 21.9839C5.88036 22.7479 5.15842 20.456 5.15842 20.456C4.60128 18.9706 3.77577 18.5888 3.77577 18.5888C2.64107 17.8036 3.85842 17.8036 3.85842 17.8036C5.11709 17.8885 5.77755 19.1193 5.77755 19.1193C6.89158 21.0714 8.68673 20.5198 9.40893 20.1802C9.51199 19.3526 9.84235 18.7797 10.1931 18.4615C7.42806 18.1643 4.51888 17.0609 4.51888 12.1378C4.51888 10.7372 5.01378 9.59141 5.79796 8.70026C5.67423 8.38203 5.24082 7.06615 5.92194 5.30495C5.92194 5.30495 6.97423 4.96536 9.34694 6.62057C10.3628 6.34002 11.4104 6.1973 12.4628 6.19609C13.5151 6.19609 14.5878 6.34479 15.5783 6.62057C17.9513 4.96536 19.0036 5.30495 19.0036 5.30495C19.6847 7.06615 19.251 8.38203 19.1273 8.70026C19.9321 9.59141 20.4066 10.7372 20.4066 12.1378C20.4066 17.0609 17.4974 18.143 14.7117 18.4615C15.1658 18.8646 15.5577 19.6284 15.5577 20.838C15.5577 22.5568 15.5372 23.9362 15.5372 24.3604C15.5372 24.7 15.7643 25.1034 16.3832 24.976C21.3352 23.2781 24.9048 18.4826 24.9048 12.8169C24.9253 5.72917 19.3337 0 12.4628 0Z" 
                                    class="fill-gray-500 group-hover:fill-gray-700 dark:group-hover:fill-gray-400"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_10_79">
                                        <rect width="25" height="25" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <p class="font-medium text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-400">Github</p>
                        </div>
                    </a>

                    <a href="https://www.linkedin.com/in/pepizarro" target="_blank" class="group w-min">
                        <div class="flex flex-row gap-2">
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_10_85)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.77778 25H22.2222C23.7563 25 25 23.7563 25 22.2222V2.77778C25 1.24365 23.7563 0 22.2222 0H2.77778C1.24365 0 0 1.24365 0 2.77778V22.2222C0 23.7563 1.24365 25 2.77778 25Z" 
                                    class="fill-gray-500 group-hover:fill-gray-700 dark:group-hover:fill-gray-400"
                                    />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.5278 21.5278H17.8179V15.2091C17.8179 13.4767 17.1597 12.5085 15.7884 12.5085C14.2967 12.5085 13.5174 13.516 13.5174 15.2091V21.5278H9.94214V9.49074H13.5174V11.1121C13.5174 11.1121 14.5924 9.12299 17.1467 9.12299C19.6999 9.12299 21.5278 10.6821 21.5278 13.9067V21.5278ZM5.67686 7.91459C4.45905 7.91459 3.47223 6.92002 3.47223 5.69341C3.47223 4.46679 4.45905 3.47222 5.67686 3.47222C6.89467 3.47222 7.88091 4.46679 7.88091 5.69341C7.88091 6.92002 6.89467 7.91459 5.67686 7.91459ZM3.83075 21.5278H7.55883V9.49074H3.83075V21.5278Z"
                                    class="fill-white dark:fill-black"
                                />
                                </g>
                                <defs>
                                    <clipPath id="clip0_10_85">
                                        <rect width="25" height="25" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <p class="font-medium text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-400">Linkedin</p>
                        </div>
                    </a>
                </div>
                <div id="home-description" class="col-span-2 row-span-1 py-3 md:mt-1">
                    <p lang-key="homepage-text" class="text-pretty  mb-3 text-gray-800 dark:text-gray-300"></p>
                    <a target="_blank" href="/cv-es.pdf" class="flex items-center w-min text-blue-600 dark:text-blue-200 hover:underline">
                        <p class="mr-1">CV</p>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.53033 4.75C4.53033 4.33579 4.86612 4 5.28033 4H11.2907C11.705 4 12.0407 4.33579 12.0407 4.75V10.7604C12.0407 11.1746 11.705 11.5104 11.2907 11.5104C10.8765 11.5104 10.5407 11.1746 10.5407 10.7604V6.56066L5.28033 11.8211C4.98744 12.114 4.51256 12.114 4.21967 11.8211C3.92678 11.5282 3.92678 11.0533 4.21967 10.7604L9.48008 5.5H5.28033C4.86612 5.5 4.53033 5.16421 4.53033 4.75Z"
                                  class="fill-blue-600 dark:fill-blue-200"/>
                        </svg>
                    </a>

                    <h4 lang-key="homepage-skills" class="text-lg font-bold mb-2 mt-3"></h4>
                    <ul class="list-disc flex flex-col gap-2 pl-4">
                        <li class="text-blue-600 dark:text-blue-200">Golang</li>
                        <li class="text-yellow-600 dark:text-yellow-200">JavaScript</li>
                        <li class="">Linux</li>
                    </ul>
                </div>
            </div>
            `;

    const image = this.querySelector("#home-image img");
    const pageComponent = this.querySelector("#page-component");

    // Check if the image is already loaded
    if (image.complete) {
      // If already loaded, remove the hidden class immediately
      pageComponent.classList.remove("hidden");
    } else {
      // Otherwise, wait for it to load
      image.onload = () => {
        pageComponent.classList.remove("hidden");
      };
    }
  }
}
