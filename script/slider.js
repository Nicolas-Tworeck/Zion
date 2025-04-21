document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slides");
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;
    let currentIndex = 0;
    let startX = 0;
    let endX = 0;

    const slideTo = (index) => {
        if (index < 0) index = 0;
        if (index >= totalSlides) index = totalSlides - 1;
        slider.style.transform = `translateX(-${index * 100}%)`;
        slider.style.transition = "transform 0.3s ease-in-out";
        currentIndex = index;
    };

    slider.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    });

    slider.addEventListener("touchend", (e) => {
        endX = e.changedTouches[0].clientX;
        const deltaX = startX - endX;

        if (Math.abs(deltaX) > 50) {
            if (deltaX > 0) {
                // swipe esquerda
                slideTo(currentIndex + 1);
            } else {
                // swipe direita
                slideTo(currentIndex - 1);
            }
        }
    });

    // inicializar posição
    slideTo(currentIndex);
});