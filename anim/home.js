gsap.registerPlugin(ScrollTrigger);


const tl = gsap.timeline();

tl.from("#home h1 span", {opacity: 0, duration: 0.5, stagger: 0.1});
tl.from("#home .text p", {x: "110%", duration: 0.5, stagger: 0.2});

gsap.fromTo("#home h1", {scaleX: "100%", scaleY: "100%"}, {scaleX: "5000%", scaleY: "5000%", scrollTrigger: {
    trigger: "#home",
    pin: "#home h1",
    start: "2% top",
    end: "bottom top",
    scrub: 0.5,
} });

