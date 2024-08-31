document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.hover-image');
    const hoverDelay = 2000;

    images.forEach(image => {
        let hoverTimer;
        image.addEventListener('mouseover', () => {
            hoverTimer = setTimeout(() => {
                image.dataset.originalSrc = image.src;
                image.src = "./schumi.png";
                image.style = "width: 4cm;    display: inherit;"
                image.id = "";
            }, hoverDelay);
        });

        image.addEventListener('mouseout', () => {
            clearTimeout(hoverTimer);
            if (image.dataset.originalSrc) {
                image.src = image.dataset.originalSrc;
                image.style = ""
                image.id = "fotoperfil"
            }
        });
    });
});