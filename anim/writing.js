gsap.registerPlugin(ScrollTrigger);

gsap.from("#writing .head h1", {y: "-100%", duration: 0.5, scrollTrigger: {
    trigger: "#writing .head h1",
    start: "-50% bottom",
    scrub: 0.5,
}});
gsap.from("#writing .para", {x: "30%", duration: 0.5, stagger: 0.5, scrollTrigger: {
    trigger: "#writing",
    start: "-50% center",
    scrub: 0.2,
}});
gsap.from("#writing .points", {x: "-20%", duration: 0.5, stagger: 0.5, scrollTrigger: {
    trigger: "#writing",
    start: "-50% center",
    scrub: 0.2,
}});


