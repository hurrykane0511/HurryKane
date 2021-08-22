const navlinks = document.querySelectorAll('.nav-link'),
    menu = document.querySelector('.menu'),
    psn = document.querySelectorAll('.personal'),
    pfs = document.querySelectorAll('.professional'),
    vd = document.querySelectorAll('.Video'),
    abm = document.querySelectorAll('.About-me'),
    filter = document.querySelector('svg')
    


navlinks.forEach(link => {
    link.addEventListener('mouseover', function () {
        const current_img = filterLink(link);
        hover(current_img);
    });
    link.addEventListener('mouseleave', function () {
        const current_img = filterLink(link);
        leave(current_img);
    })
})
function createFilter() {
    for (let i = 1; i < 12; i++) {

    }
}
function filterLink(el) {
    if (el.textContent === 'Personal') {
        return psn;
    }
    else if (el.textContent === 'Professional') {
        return pfs;
    }
    else if (el.textContent === 'Video') {
        return vd;
    }
    else {
        return abm;
    }
}
function hover(el) {

    gsap.fromTo(el,
        {
            y: '100px',
            opacity: 0,
        },
        {
            y: '0',
            opacity: 1,
            ease: Power4.easeOut,
            stagger: {
                amount: 0.5
            }
        })
    let t = gsap.to(turbulence, {

        stagger: { amount: .5 },
        attr: { baseFrequency: '0 0' }
    })
}
function leave(el) {

    gsap.to(el,
        {
            y: '100px',
            opacity: 0,
            ease: Power4.easeOut,
            stagger: {
                amount: 0.5
            }
        })
    
    gsap.to(turbulence, {
        attr: {
            baseFrequency: '0.02 0.03'
        },
        stagger: { amount: 0.5 }
    })
}

