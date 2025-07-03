// Animate hero heading
gsap.from(".hero-text h1", {
  y: -50,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});

// Animate hero button
gsap.from(".cta-button", {
  scale: 0.5,
  opacity: 0,
  delay: 0.5,
  duration: 0.8,
  ease: "back.out(1.7)"
});

// Animate feature items on scroll
gsap.utils.toArray(".feature-item").forEach((item, index) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: "top 80%",
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    delay: index * 0.2
  });
});
