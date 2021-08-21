const navlinks = document.querySelectorAll('.nav-link');
const menu = document.querySelector('.menu');
const nav_img = document.querySelectorAll('.img-wrap img');
const hover_tl = gsap.timeline();
const leave_tl = gsap.timeline();
let personal = [];
for (let u = 1; u <= 3; u++) {
    personal.push('./public/images/img' + u + '.jpg');
}
navlinks.forEach(link => {
    link.addEventListener('mouseover', hover);
    link.addEventListener('mouseleave', leave)
})
function hover() {
    leave_tl.clear();
    nav_img.forEach((img, i) => {
        img.src = personal[i];
    })
    hover_tl.fromTo(nav_img,
        {
            y: '100px',
            opacity: 0,
        },
        {
            y: '0',
            opacity: 1,
            stagger: {
                amount: .3
            }
        }
    )
    hover_tl.to(menu,{
        backgroundColor: "#cf9191"
    }, "<")
}
function leave() {
    hover_tl.clear();
    leave_tl.to(
        nav_img,
        {
            y: '100px',
            opacity: 0,
            stagger: {
                amount: 0.25
            }
        }
    )
    leave_tl.to( menu,{
        backgroundColor: "#f2572c"
    }, "<")
}

