

export function addEffects() {
    let uai = document.getElementById("uai-block");
    let leasity = document.getElementById("leasity-block");

    [uai, leasity].forEach(element => {
        element.addEventListener("click", () => {
            console.log("clicked", element.id);
        });
        element.onmousemove = (e) => {
            let x = e.clientX - element.getBoundingClientRect().left;
            let y = e.clientY - element.getBoundingClientRect().top;
            element.style.setProperty("--x", x + "px");
            element.style.setProperty("--y", y + "px");
        };
    });

}
