document.addEventListener("DOMContentLoaded", function () {
  // Select the HTML element where you want to display the emoji
  const gearEmoji = document.querySelector(".gear-emoji");

  // Use GSAP to animate the rotation of the emoji
  gsap.to(gearEmoji, {
    rotation: 360, // Rotate 360 degrees
    duration: 2, // Duration for the rotation
    repeat: -1, // Repeat indefinitely
    ease: "none" // Linear easing
  });

  // Animate opacity and scale after a certain delay
  gsap.to(gearEmoji, {
    opacity: 0, // Fade out
    scale: 600, // Scale out to 40 times its size
    duration: 2, // Duration for the animation
    delay: 7, // Delay before starting the animation
    ease: "power2.inOut", // Easing function
    onComplete: function () {
      gearEmoji.style.display = "none"; // Hide the element after animation completes
    }
  });


});

gsap.to(".digit", {
  top: "-150px",
  stagger: {
    amount: 0.25,
  },
  delay: 6,
  duration: 1,
  ease: "power4.inOut",
});

gsap.from(".loader-1", {
  width: 0,
  duration: 6,
  ease: "power2.inOut",
});

gsap.from(".loader-2", {
  width: 0,
  duration: 6,
  delay: 1.9,
  ease: "power2.inOut",
});

gsap.to(".loader", {
  background: "none",
  delay: 6,
  duration: 0.1,
});

// gsap.to(".loader-1", {
//   rotate: 90,
//   y: -50,
//   duration: 0.5,
//   delay: 6,
// });

// gsap.to(
//   ".loader-2",
//   {
//     x: -75,
//     y: 75,
//     duration: 0.5,
//   },
//   "<"
// );

// gsap.to(".loader", {
//   scale: 40,
//   duration: 1,
//   delay: 7,
//   ease: "power2.inOut",
// });

// gsap.to(".gear-emoji", {
//   rotate: 45,
//   y: 500,
//   x: 2000,
//   duration: 1,
//   delay: 7,
//   ease: "power2.inOut",
// });
// gsap.to(".loader", {
//   rotate: 45,
//   y: 500,
//   x: 2000,
//   duration: 1,
//   delay: 7,
//   ease: "power2.inOut",
// });

gsap.to(".loading-screen", {
  opacity: 0,
  duration: 0.5,
  delay: 7.5,
  ease: "power1.inOut",
});

gsap.to("h1", 1.5, {
  delay: 7,
  y: -80,
  ease: "power4.inOut",
  stagger: {
    amount: 0.1,
  },
});
