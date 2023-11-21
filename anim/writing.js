gsap.registerPlugin(ScrollTrigger);

gsap.from("#writing .head h1", {y: "-100%", duration: 0.5, scrollTrigger: {
    trigger: "#writing .head h1",
    start: "-50% bottom",
    scrub: 0.5,
}});
gsap.from("#writing .ani", {x: "-50%", scrollTrigger: {
    trigger: "#writing .ani",
    start: "top 80%",
    scrub: 0.2,
}});


