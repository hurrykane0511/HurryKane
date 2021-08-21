const menu_start = gsap.timeline();
const menu_stop = gsap.timeline();
const nav_btn = document.querySelector('.btn-nav');
const myname = document.querySelector('.myname');
let str = myname.textContent.split('');
myname.innerHTML = '';
str.forEach(e => {
    myname.innerHTML += '<span>' + e + '</span>';
});

nav_btn.addEventListener('click', function () {
    this.classList.toggle('active');

    if (this.classList.contains('active')) {
        menu_stop.clear();
        menuActive();
    }
    else {
        menu_start.clear();
        menuStop();
    }
})

function menuActive() {
    menu_start.to('.menu',
        {
            y: '0',
            duration: .5,
            ease: 'Power4.easeIn',
        }
    )
    menu_start.fromTo('.nav-link',
        {
            x: '-100px',
            opacity: 0,
            stagger: {
                amount: .25
            }
        },
        {
            x: '0',
            opacity: 1,
            stagger: {
                amount: .25
            }
        })
    menu_start.fromTo('.myname span',
        {
            y: 0,
            x: '-100%',
            opacity: 0,
        }
        ,
        {
            x: '0',
            opacity: 1,
            stagger: .25,
            ease: Bounce.easeOut,
        }, "<")

}
function menuStop() {
    menu_stop.to('.nav-link', {
        x: '100px',
        opacity: 0,
        stagger: {
            amount: .25
        },
    })
    menu_stop.to('.myname span', {
        x: '100%',
        ease: 'Power0.easeIn',
        stagger: -.2,
        opacity: 0,

    }, "<")
    menu_stop.to('.menu',
        {
            y: '-100%',
            ease: 'Power4.easeIn',
            duration: .5,
        }
        , "-=0.5"
    )
}