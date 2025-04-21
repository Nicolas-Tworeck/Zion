document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".slider").forEach((sliderContainer) => {
        const slider = sliderContainer.querySelector(".slides");
        const slides = slider.querySelectorAll(".slide");
        const totalSlides = slides.length;
        let currentIndex = 0;
        let startX = 0;

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
            const endX = e.changedTouches[0].clientX;
            const diffX = startX - endX;

            if (Math.abs(diffX) > 50) {
                if (diffX > 0) {
                    slideTo(currentIndex + 1);
                } else {
                    slideTo(currentIndex - 1);
                }
            }
        });

        slideTo(currentIndex);
    });
});