$("#anim").textillate({ in: { effect: "fadeInOut", delay: 200 } });

const t1 = new gsap.timeline();

t1.from(".lrow a", {
  stagger: 0.2,
  opacity: 0,
  x: 10,
});

t1.from(
  "#playbtn .anm",
  {
    stagger: 0.2,
    opacity: 0,
    x: 10,
  },
  "-=1"
);

t1.from(
  "#hero img",
  {
    opacity: 0,
    y: 20,
    duration: 2,
    ease: "Expo.easeInOut",
  },
  "-=1.5"
);
