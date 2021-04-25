document.addEventListener("DOMContentLoaded", function (event) {
  window.addEventListener("load", function () {
    gsap.registerPlugin(ScrollTrigger);
    const tl1 = gsap.timeline();
    tl1.to(".box", {
      scale: 2,
      duration: 1.3,
      delay: 0.3
    });
    tl1.from(
      "#headline1",
      {
        y: 250
      },
      "-=0.5"
    );
    tl1.from(
      "#headline2",
      {
        y: 250
      },
      "-=0.3"
    );
    tl1.from(".underline", {
      y: 250
    });

    let container = document.getElementById("viewWrapper");

    gsap.to(container, {
      x: () =>
        -(container.scrollWidth - document.documentElement.clientWidth) + "px",
      ease: "none",
      scrollTrigger: {
        trigger: container,
        invalidateOnRefresh: true,
        pin: true,
        scrub: 1,
        end: () => "+=" + container.offsetWidth
      }
    });
  });
});
