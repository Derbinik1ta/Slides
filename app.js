function slidesPlagin(activeSlide = 0) {
    const slides = document.querySelectorAll('.slide')

    slides[activeSlide].classList.add('active')

    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearActiveClassers()
            slide.classList.add('active')
        })
    }

    function clearActiveClassers() {
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    }
}

slidesPlagin(2)