const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", function(e){
    gsap.to(cursor, {x: e.pageX+10, y:e.pageY, duration: 1, ease: "elastic"});
});