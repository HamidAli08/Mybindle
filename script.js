document.addEventListener('DOMContentLoaded', () => {
  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger);

  // Prevent flash of unstyled content
  gsap.set("body", { visibility: "visible" });

  // ========== HEADER ANIMATION ==========
  gsap.from(".header", {
    y: -50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });

  // ========== HERO SECTION ANIMATIONS ==========
  const heroTl = gsap.timeline();
  heroTl
    .from(".hero-text h1", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.2)",
      stagger: 0.1
    })
    .from(".hero-text p", {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.4")
    .from(".cta-button", {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.3")
    .from(".hero-image img", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "elastic.out(1, 0.5)"
    }, "-=0.8")
    .from([".label-top", ".label-bottom"], {
      scale: 0,
      opacity: 0,
      duration: 0.6,
      ease: "back.out(1.7)",
      stagger: 0.2
    }, "-=0.5");

  // Label hover effects
  gsap.to(".label-top, .label-bottom", {
    y: 5,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  // ========== FEATURES SECTION ANIMATIONS ==========
  gsap.from(".features h2, .features p", {
    scrollTrigger: {
      trigger: ".features",
      start: "top 80%"
    },
    y: 50,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2,
    ease: "power2.out"
  });

  gsap.from(".feature-item", {
    scrollTrigger: {
      trigger: ".features-grid",
      start: "top 80%"
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "back.out(1.2)"
  });

  // Feature item hover animations
  document.querySelectorAll(".feature-item").forEach(item => {
    item.addEventListener("mouseenter", () => {
      gsap.to(item, {
        scale: 1.03,
        duration: 0.3,
        ease: "power2.out"
      });
    });
    item.addEventListener("mouseleave", () => {
      gsap.to(item, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  });

  // ========== CONNECTION SECTION ANIMATIONS ==========
  gsap.from(".connection-text h2", {
    scrollTrigger: {
      trigger: ".connection",
      start: "top 80%"
    },
    x: -50,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  });

  gsap.from(".connection-text p", {
    scrollTrigger: {
      trigger: ".connection",
      start: "top 80%"
    },
    x: -50,
    opacity: 0,
    duration: 0.6,
    delay: 0.3,
    ease: "power2.out"
  });

  gsap.from(".phone-left", {
    scrollTrigger: {
      trigger: ".connection",
      start: "top 80%"
    },
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.2)"
  });

  gsap.from(".phone-right", {
    scrollTrigger: {
      trigger: ".connection",
      start: "top 80%"
    },
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.2)"
  });

  gsap.from(".feature-box", {
    scrollTrigger: {
      trigger: ".connection-features",
      start: "top 80%"
    },
    y: 50,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: "back.out(1.2)"
  });

  // Phone float animation
  gsap.to(".phone-left", {
    y: 20,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  gsap.to(".phone-right", {
    y: -20,
    duration: 3.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: 0.5
  });

  // ========== INSTALL SECTION ANIMATIONS ==========
  gsap.from(".install-section h1, .install-section p", {
    scrollTrigger: {
      trigger: ".install-section",
      start: "top 80%"
    },
    y: 40,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2,
    ease: "power2.out"
  });

  gsap.from(".steps-indicator", {
    scrollTrigger: {
      trigger: ".steps-indicator",
      start: "top 80%"
    },
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    ease: "elastic.out(1, 0.5)"
  });

  gsap.from(".card", {
    scrollTrigger: {
      trigger: ".install-cards",
      start: "top 80%"
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "back.out(1.2)"
  });

  // Card hover effects
  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        y: -10,
        boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
        duration: 0.3
      });
    });
    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        y: 0,
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        duration: 0.3
      });
    });
  });

  // ========== DONATION SECTION ANIMATIONS ==========
  gsap.from(".text-content h1", {
    scrollTrigger: {
      trigger: ".donation-hero",
      start: "top 80%"
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    ease: "back.out(1.2)"
  });

  gsap.from(".text-content p, .text-content .cta-button", {
    scrollTrigger: {
      trigger: ".donation-hero",
      start: "top 80%"
    },
    y: 40,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2,
    ease: "power2.out"
  });

  gsap.from(".donate1", {
    scrollTrigger: {
      trigger: ".donation-hero",
      start: "top 80%"
    },
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.2)"
  });

  gsap.from(".donate2", {
    scrollTrigger: {
      trigger: ".donation-hero",
      start: "top 80%"
    },
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.2)"
  });

  // Phone float animation
  gsap.to(".donate1", {
    y: 15,
    duration: 3.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  gsap.to(".donate2", {
    y: -15,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: 0.3
  });

  // ========== TESTIMONIALS SECTION ANIMATIONS ==========
  gsap.from(".testimonials-section h2", {
    scrollTrigger: {
      trigger: ".testimonials-section",
      start: "top 80%"
    },
    y: 50,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out"
  });

  gsap.from(".testimonial-card", {
    scrollTrigger: {
      trigger: ".testimonial-grid",
      start: "top 80%"
    },
    y: 80,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "back.out(1.2)"
  });

  // Testimonial card hover effects
  document.querySelectorAll(".testimonial-card").forEach(card => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        y: -10,
        boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
        duration: 0.3
      });
    });
    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        y: 0,
        boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
        duration: 0.3
      });
    });
  });

  // ========== DOWNLOAD SECTION ANIMATIONS ==========
  gsap.from(".download-text h2, .download-text p", {
    scrollTrigger: {
      trigger: ".download",
      start: "top 80%"
    },
    y: 50,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2,
    ease: "power2.out"
  });

  gsap.from(".store-buttons img", {
    scrollTrigger: {
      trigger: ".download-text",
      start: "top 80%"
    },
    y: 40,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: "back.out(1.2)"
  });

  gsap.from(".phone1", {
    scrollTrigger: {
      trigger: ".download-images",
      start: "top 80%"
    },
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.2)"
  });

  gsap.from(".phone2", {
    scrollTrigger: {
      trigger: ".download-images",
      start: "top 80%"
    },
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.2)"
  });

  // Phone float animation
  gsap.to(".phone1", {
    y: 15,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  gsap.to(".phone2", {
    y: -15,
    duration: 3.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: 0.5
  });

  // ========== BUTTON HOVER EFFECTS ==========
  document.querySelectorAll(".cta-button, .see-more-btn").forEach(button => {
    button.addEventListener("mouseenter", () => {
      gsap.to(button, {
        scale: 1.05,
        duration: 0.2,
        ease: "power2.out"
      });
    });
    button.addEventListener("mouseleave", () => {
      gsap.to(button, {
        scale: 1,
        duration: 0.2,
        ease: "power2.out"
      });
    });
  });
});