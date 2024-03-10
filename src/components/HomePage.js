export class HomePage extends HTMLElement {
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
    connectedCallback(){
        this.innerHTML = "";
        
        this.innerHTML = `
            <div class="">
                <h1 class="text-4xl font-inter font-bold mt-3">Pedro Pizarro</h1>
                <p lang-key="homepage-description"></p>
            </div>
        `;

        // window.addEventListener('appmenuchange', () => {
        //     this.render();
        // });
    }
}
