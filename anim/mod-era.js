gsap.registerPlugin(ScrollTrigger);

gsap.from("#mod-era .head h1", {y: "-100%", duration: 0.5, scrollTrigger: {
    trigger: "#mod-era .head h1",
    start: "top bottom",
    scrub: 0.5,
}});
gsap.from("#mod-era .para", {x: "30%", scrollTrigger: {
    trigger: "#mod-era",
    start: "-100% center",
    scrub: 0.5,
}});
gsap.from("#mod-era .points", {x: "-30%", stagger: 0.5, scrollTrigger: {
    trigger: "#mod-era",
    start: "-100% center",
    scrub: 0.5,
}});


