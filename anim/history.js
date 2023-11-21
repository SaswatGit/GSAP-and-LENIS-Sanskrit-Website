gsap.registerPlugin(ScrollTrigger);

gsap.from("#history .head .title", {
    x: "80%", duration: 0.5, scrollTrigger: {
        trigger: "#history .head .title",
        start: "top 80%",
        scrub: 0.5,
    }
});

gsap.from("#history .text .ani", {
    x: "100%", opacity: 0, duration: 0.5, stagger: 0.2, scrollTrigger: {
        trigger: "#history .text .ani",
        start: "top 80%",
        scrub: 0.5,
    }
});


