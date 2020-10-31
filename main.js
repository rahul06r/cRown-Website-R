let navbar = document.querySelector("#nav");
var tl = new TimelineMax();


tl
    .from("#nav", { duration: 3, y: "-100%", ease: "power1.out" }, "-=1")
    .to("#nav", { y: 0 })
    .from(".logo", { duration: 3, x: "-150%", ease: "power1.out", opacity: 0 }, "-=1")
    .to(".logo", { x: "0%", opacity: 1 })

.from("ul", { duration: 2, opacity: 0, ease: "power1.out", stagger: 1 },
        "=-2")
    .to("ul", { opacity: 1 })
    .from(".first", { duration: 4, opacity: 0, stagger: 1, ease: "slow(0.7, 0.7, false)" })
    .to(".first", { opacity: 1 })
    .from(".about", { duration: 4, opacity: 0, stagger: 1, ease: "bounce.out" }, "-=2")
    .to(".about", { opacity: 1 })
    .from(".social-menu", { duration: 6, stagger: 1, opacity: 0 }, "-=6")
    .to(".social-menu", { opacity: 1 })
    .from(".services", { duration: 2, opacity: 0, ease: "bounce.out", stagger: 1 }, "-=3")
    .to(".services", { opacity: 1 })
    .from(".contact ,.footer", { duration: 2, opacity: 0, ease: "steps(8)", stagger: 1 }, "=-2")
    .to(".contact ,.footer", { opacity: 1 })



// intersection oberver
let boxContent1 = document.querySelector(".box-content-1");
let boxContent2 = document.querySelector(".box-content-2");
let boxContent3 = document.querySelector(".box-content-3");

let Options = {
    threshold: 1,
    rootMargin: "-150px 0px 100px 0px",
}
const box1observer = new IntersectionObserver(function(entries, box1observer) {
    entries.forEach(entry => {
        // console.log(entry.target);
        if (!entry.isIntersecting) {
            entry.target.classList.add("blured");
            entry.target.classList.remove("hovering");
            return;
        } else {
            entry.target.classList.remove("blured");
            entry.target.classList.add("hovering");
        }
    })
}, Options);
const box2observer = new IntersectionObserver(function(entries, box2observer) {
    entries.forEach(entry => {
        // console.log(entry.target);
        if (!entry.isIntersecting) {
            entry.target.classList.add("blured");
            entry.target.classList.remove("hovering");
            return;
        } else {
            entry.target.classList.remove("blured");
            entry.target.classList.add("hovering");
        }
    })
}, Options);
const box3observer = new IntersectionObserver(function(entries, box3observer) {
    entries.forEach(entry => {
        // console.log(entry.target);
        if (!entry.isIntersecting) {
            entry.target.classList.add("blured");
            entry.target.classList.remove("hovering");
            return;
        } else {
            entry.target.classList.remove("blured");
            entry.target.classList.add("hovering");
        }
    })
}, Options);

box1observer.observe(boxContent1)
box2observer.observe(boxContent2)
box3observer.observe(boxContent3)



$(document).on('click', 'nav ul li', function() {
    $(this).addClass('active').siblings().removeClass('active');

})

var scroll = new SmoothScroll('a[href*="#"]');




$(document).ready(function() {
    $('.toggle').click(function() {
        $('.toggle').toggleClass('active');
    })
});