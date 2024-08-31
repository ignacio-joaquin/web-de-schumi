document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.hover-image');
    const hoverDelay = 2000;

    images.forEach(image => {
        let hoverTimer;
        console.log("CACA")
        image.addEventListener('mouseover', () => {
            hoverTimer = setTimeout(() => {
                image.dataset.originalSrc = image.src; // Store the original source
                image.src = "./schumi.png"; // Change to the hover image
            }, hoverDelay);
        });

        image.addEventListener('mouseout', () => {
            clearTimeout(hoverTimer);
            if (image.dataset.originalSrc) {
                image.src = image.dataset.originalSrc; // Revert to the original image
            }
        });
    });
});