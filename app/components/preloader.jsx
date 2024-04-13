import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const YourComponent = () => {
  // Create refs for React elements
  const gearEmojiRef = useRef(null);
  const loader1ref = useRef(null);
  const loadingscreenref = useRef(null);
  const containerref = useRef(null);
  const loader = useRef(null);
  const logo1ref=useRef(null);

  useEffect(() => {
    // GSAP animation
    const tl = gsap.timeline();

    // Animate loader-1 to compress and expand
    tl.fromTo(
      loader1ref.current,
      { width: 0 }, // Start with width 0
      {
        width: "100%", // Expand to 100% width
        duration: 6, // Adjust duration as needed
        ease: "power2.inOut",
        onComplete: () => {
          // Scale up and move the gear emoji out of the screen
          gsap.to(loadingscreenref.current, {
            opacity: 0,
            duration: 0.5,
            ease: "power1.inOut",
          });
          gsap.to(gearEmojiRef.current, {
            opacity: 0, // Fade out
            scale: 600, // Scale out to 40 times its size
            duration: 2, // Duration for the animation
            ease: "power2.inOut", // Easing function
            onComplete: () => {
              // Hide the gear emoji
              gearEmojiRef.current.style.display = "none";
              logo1ref.current.style.display="none";
              // Fade out the loading screen
              // Decrease z-index of the entire preloader component
              gsap.to([containerref.current, gearEmojiRef.current], {
                zIndex: -1,
              });
            },
          });
        },
      }
    );

    // Rotate the gear emoji
    gsap.to(gearEmojiRef.current, {
      rotation: 360, // Rotate 360 degrees
      duration: 2, // Duration for the rotation
      repeat: -1, // Repeat indefinitely
      ease: "none", // Linear easing
    });

    return () => {
      tl.kill();
    };
  }, []); // Empty dependency array to run only once on component mount

  return (
    <div className="relative z-50" ref={containerref}>
      <div className="loading-screen" ref={loadingscreenref}>
        <div className="loader" ref={loader}>
          <div className="loader-1" ref={loader1ref}></div>
        </div>
      </div>
      <div className="logo">
        <span className="" ref={logo1ref}>
          A
        </span>
        <span ref={gearEmojiRef} className="gear-emoji">
          ⚙️
        </span>
        <span className="" ref={logo1ref}>
          T
        </span>
      </div>
    </div>
  );
};

export default YourComponent;
