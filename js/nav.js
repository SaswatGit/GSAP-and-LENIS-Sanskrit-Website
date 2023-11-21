gsap.registerPlugin(ScrollTrigger);

const menu = document.querySelector("#menu");
const svg = document.querySelector(".svg-container svg");

gsap.set("#navbar", { x: "100%" });


menu.addEventListener("click", function () {
    gsap.to("#navbar", { x: 0, duration: 1, ease: "back" });
});

svg.addEventListener("click", function () {
    gsap.to("#navbar", { x: "100%", duration: 0.5 });
});


document.querySelector("#navbar").addEventListener("click", function () {
    gsap.to("#navbar", { x: "100%", duration: 0.5 });
});

window.addEventListener("scroll", function () {
    if (window.scrollY >= 10) {
        gsap.to(".site-top", { backgroundColor: "rgb(0, 0, 0, 0.2)", duration: 0.5 });
    } else if (window.scrollY < 10) {
        gsap.to(".site-top", { backgroundColor: "transparent", duration: 0.5 });
    }
})

gsap.to(".dot1", {x: 50, duration: 1, yoyo: true,repeat: -1})
gsap.to(".dot3", {x: -50, duration: 1, yoyo: true,repeat: -1})