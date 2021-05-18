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







$(document).on('click', 'nav ul li', function() {
    $(this).addClass('active').siblings().removeClass('active');

})

var scroll = new SmoothScroll('a[href*="#"]');




$(document).ready(function() {
    $('.toggle').click(function() {
        $('.toggle').toggleClass('active');
    })
});