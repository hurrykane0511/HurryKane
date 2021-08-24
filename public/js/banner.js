const banner_text = document.querySelectorAll('.text-banner');
const banner = document.querySelector('.banner');

let width = window.innerWidth;

const bannerMove = function (e) {
    let normalizedPosition = e.clientX - (width / 2);
    banner_text.forEach((span) => {
        span.style.transform = `translate(${normalizedPosition}px)`;
    });
}

banner.addEventListener('mousemove', bannerMove);
window.addEventListener('resize', () => width = this.innerWidth);