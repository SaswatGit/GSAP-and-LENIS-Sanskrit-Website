gsap.registerPlugin(ScrollTrigger);

gsap.to("#influence .head h1:nth-child(1)", {y: "700%", scrollTrigger: {
    trigger: "#influence",
    start: "top 100%",
    scrub: 0.5,
}});
gsap.to("#influence .head h1:nth-child(2)", {y: "-700%", scrollTrigger: {
    trigger: "#influence",
    start: "-50% 100%",
    scrub: 0.5,
}});
gsap.from("#influence .para", {x: "50%", duration: 0.5, stagger: 0.5, scrollTrigger: {
    trigger: "#influence",
    start: "-50% 100%",
    scrub: 0.2,
}});
gsap.from("#influence .points", {x: "-40%", duration: 0.5, stagger: 0.5, scrollTrigger: {
    trigger: "#influence",
    start: "-50% bottom",
    scrub: 0.2,
}});


