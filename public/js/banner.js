const banner_text = document.querySelectorAll('.text-banner');
const banner = document.querySelector('.banner');
let width = window.innerWidth;

const bannerMove = function (e) {
    let normalizedPosition = e.clientX / (width / 2) - 1;
    banner_text.forEach((span) => {
        span.style.transform = `translate(${normalizedPosition * 350}px)`;
    });
}

banner.addEventListener('mousemove', bannerMove);
banner.addEventListener('mouseleave', () => { banner_text.forEach(e => { e.removeAttribute('style') }); });
window.addEventListener('resize', () => width = window.innerWidth);