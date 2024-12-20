// import Lenis from "lenis";

// // Even faster scrolling option
// const lenis = new Lenis({
//   duration: 0.4,
//   easing: (t) => t, // Linear easing for immediate response
//   smoothWheel: true,
//   smoothTouch: false,
//   wheelMultiplier: 1.5,
// });

// //   // Or for medium speed
// //   const lenis = new Lenis({
// //     duration: 0.8,
// //     easing: (t) => 1 - (1 - t) * (1 - t),  // Ease-out quad
// //     smoothWheel: true,
// //     smoothTouch: false,
// //     wheelMultiplier: 1.3,
// //   });

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
