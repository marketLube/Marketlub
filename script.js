// import Lenis from "lenis";

// const lenis = new Lenis({
//   duration: 1.3, // Adjust for smoothness
//   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
//   smoothWheel: true, // Enable smooth scroll on wheel events
//   smoothTouch: false, // Disable smooth scrolling on touch devices
// });

// // Force the browser to recalculate sticky positioning
// lenis.on("scroll", () => {
//   document.querySelectorAll('[style*="sticky"]').forEach((el) => {
//     el.style.transform = "translateZ(0)";
//   });
// });

// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);
