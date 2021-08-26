

const navlinks = document.querySelectorAll('.nav-link'),
    psn = document.querySelectorAll('.personal'),
    pfs = document.querySelectorAll('.professional'),
    vd = document.querySelectorAll('.Video'),
    abm = document.querySelectorAll('.About-me'),
    filter = document.querySelector('svg'),
    noise = document.querySelector('#noise1');

let backgroundColor = ['#e2cfad', '#837877', '#f3abb7', '#b9aca6']
function addFilter() {
    for (let i = 2; i <= 12; i++) {
        let clone = noise.cloneNode(true);
        clone.id = `noise${i}`;
        filter.append(clone);
    }
    const allfilter = document.querySelectorAll('.turbulence');
    let p = 0;
    for (let i = 1; i <= 4; i++) {
        for (let j = 1; j <= 3; j++) {
            allfilter[p].setAttribute('class', `turbulence${i}`);
            p++;
        }
    }

}
addFilter();

navlinks.forEach(link => {
    link.addEventListener('mouseover', function () {
        let current_img = filterLink(link);
        hover(current_img[0], current_img[1]);
    });
    link.addEventListener('mouseleave', function () {
        const current_img = filterLink(link);
        leave(current_img[0], current_img[1]);
    })
})


function filterLink(el) {
    if (el.textContent === 'Personal') {
        return [psn, 1];
    }
    else if (el.textContent === 'Professional') {
        return [pfs, 2];
    }
    else if (el.textContent === 'Video') {
        return [vd, 3];
    }
    else {
        return [abm, 4];
    }
}
function hover(el, filter) {

    gsap.fromTo(el,
        {
            y: '100px',

        },
        {
            x: `${getRandomInt(-100, 100)}px`,
            y: 0,
            rotate: getRandomInt(-15, 15),
            opacity: 1,
            ease: 'Power4.easeOut',
            stagger: {
                amount: .5
            }
        })

    gsap.to(`.turbulence${filter}`, {
        stagger: { amount: .5 },
        attr: { baseFrequency: '0 0' }
    })
    gsap.to(`.menu`,
        {
            backgroundColor: backgroundColor[filter - 1],
            duration: 0.5
        })
}
function leave(el, filter) {

    gsap.to(el,
        {
            y: '100px',
            opacity: 0,
            ease: 'Power4.easeIn',
            stagger: {
                amount: 0.5
            }
        })

    gsap.to(`.turbulence${filter}`, {
        attr: {
            baseFrequency: '0.03 0.04'
        },
        stagger: { amount: .6 }
    })
    gsap.to(`.menu`,
        {
            backgroundColor: '#C9BE62',
            duration: 0.5
        })
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}