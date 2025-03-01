document.addEventListener("DOMContentLoaded", function () {
    let lightbox = document.getElementById("lightbox");
    let lightboxImg = document.getElementById("lightbox-img");

    document.querySelectorAll(".carousel img").forEach(img => {
        img.addEventListener("click", function (event) {
            event.preventDefault();
            lightbox.style.display = "flex";
            lightboxImg.src = this.src;
        });
    });

    document.querySelectorAll(".clickable-img").forEach(img => {
        img.addEventListener("click", function (event) {
            event.preventDefault();
            lightbox.style.display = "flex";
            lightboxImg.src = this.src;
        });
    });

    lightbox.addEventListener("click", function () {
        lightbox.style.display = "none";
    });
});
