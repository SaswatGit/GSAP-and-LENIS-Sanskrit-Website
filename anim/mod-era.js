gsap.registerPlugin(ScrollTrigger);

gsap.from("#mod-era .head h1", {y: "-100%", duration: 0.5, scrollTrigger: {
    trigger: "#mod-era .head h1",
    start: "top bottom",
    scrub: 0.5,
}});
gsap.from("#mod-era .ani", {x: "-100%", scrollTrigger: {
    trigger: "#mod-era .ani",
    start: "top 80%",
    scrub: 0.5,
}});



