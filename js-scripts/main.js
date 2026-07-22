const cursorLight = document.querySelector(".cursor-light");

if (cursorLight) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let lightX = mouseX;
    let lightY = mouseY;

    document.addEventListener("mousemove", (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
    });

    function animateCursorLight() {
        lightX += (mouseX - lightX) * 0.12;
        lightY += (mouseY - lightY) * 0.12;

        cursorLight.style.left = `${lightX}px`;
        cursorLight.style.top = `${lightY}px`;

        requestAnimationFrame(animateCursorLight);
    }

    animateCursorLight();
}