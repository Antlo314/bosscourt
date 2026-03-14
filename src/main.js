import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Handle sticky header on scroll
const header = document.querySelector('.main-header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href').length > 1) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for header
                    behavior: 'smooth'
                });
            }
        }
    });
});

// GSAP Animations
document.addEventListener("DOMContentLoaded", (event) => {
  // Hero Entrance Timeline
  const heroTl = gsap.timeline();
  
  heroTl.from(".main-header", { 
    y: -100, 
    opacity: 0, 
    duration: 1, 
    ease: "power3.out" 
  })
  .from(".hero-subtitle", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  }, "-=0.5")
  .from(".hero-title", {
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  }, "-=0.6")
  .from(".hero-description", {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  }, "-=0.7")
  .from(".hero-actions", {
    scale: 0.9,
    opacity: 0,
    duration: 0.6,
    ease: "back.out(1.5)"
  }, "-=0.5");

  // Scroll Animations for Sections
  
  // About Section
  const aboutTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
    }
  });

  aboutTl.from("#about .section-title, #about .title-separator", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out"
  })
  .from("#about .section-text", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out"
  }, "-=0.4")
  .from("#about .image-card", {
    x: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  }, "-=0.8");

  // Casting Section
  const castingTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#casting",
      start: "top 75%",
    }
  });

  castingTl.from(".casting-header", {
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  })
  .from(".casting-poster", {
    scale: 0.9,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  }, "-=0.4")
  .from(".casting-info", {
    x: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  }, "-=0.6")
  .from(".step", {
    x: 20,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
    ease: "power1.out"
  }, "-=0.2");

  // Banner Image Reveal
  gsap.from(".banner-image-section", {
    scrollTrigger: {
      trigger: ".banner-image-section",
      start: "top 85%",
    },
    scale: 1.1,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out"
  });

  // Footer fade up
  gsap.from(".gs-fade-up", {
    scrollTrigger: {
      trigger: ".main-footer",
      start: "top 95%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });
});
