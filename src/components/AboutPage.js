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
    connectedCallback(){
        this.innerHTML = "";
        
        this.innerHTML = `
            <div class="">
                <h1 class="text-4xl font-bold mt-3" lang-key="about-title"></h1>
                <p lang-key="about-description"></p>
            </div>
        `;
    }
}
