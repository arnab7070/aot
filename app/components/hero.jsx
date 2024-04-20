import React, { useState, useEffect } from "react";
import { Pacifico } from "next/font/google";
import Typewriter from "typewriter-effect";
import Image from "next/image";
const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});
const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(2);

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function parallax() {
    return {
      transform: `translateY(-${scrollPosition * 0.0315}rem)`,
    };
  }

  function titleStyle() {
    return {
      transform: `translateY(${6}rem)`,
    };
  }

  return (
    <>
      <section className="hero" style={parallax()}>
        <video
          aria-describedby="hero-video-description"
          autoPlay="autoplay"
          loop="loop"
          preload="auto"
          poster="https://www.jhu.edu/assets/uploads/2024/02/homepage_loop_102_v2-Original-960x540.jpg"
          muted="muted"
          type="video/mp4"
          src="https://www.jhu.edu/assets/uploads/2024/04/2024-04_homepage_loop_103_-_final-Original.mp4"
        ></video>

        <h1 style={titleStyle()} className="text-center lg:text-left">
          <Typewriter
            options={{
              strings: [
                "Welcome to Academy Of Technology",
                "Where aspirations meet success",
                "Translating visions into reality",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
      </section>
      <section className="content">
        <div className="jhu-block brand-message section brand" role="region">
          <div className="dot-matrix" aria-hidden="true"></div>
          <div className="center force">
            <div className="">
              <h2 className="relative top-12 ">
                <span
                  className={`${pacifico.className} block text-white text-4xl md:text-8xl ml-2 mr-auto md:ml-6 md:mr-auto`}
                >
                  When vision
                </span>
                <br />
                <span
                  className={`${pacifico.className} block text-white text-4xl md:text-8xl ml-8 mr-auto md:ml-56`}
                >
                  meets guidance,
                </span>
                <br />
                <strong className="">
                  <span className="block text-4xl md:text-8xl ml-40 mr-auto md:ml-[50rem] md:mr-auto">
                    <h1 className="close">anything</h1>
                  </span>
                  <br />
                  <span className="block text-4xl md:text-8xl ml-20 mr-auto md:ml-96 md:mr-auto">
                    <h1 className="close">is possible.</h1>
                  </span>
                </strong>
              </h2>

              {/* <p>
                At Johns Hopkins, you can explore ideas that interest you, find
                people who inspire and challenge you, and make discoveries that
                change your life—and the world.
              </p> */}
            </div>
          </div>
        </div>
        <div className="bg-yellow-500 w-full ">Rest of the Homepage UI</div>
        <img src="https://www.jhu.edu/assets/themes/machado/assets/images/textures/footer-texture-blue-ad4fe94a5e.svg" className="w-full"/>
        
      </section>
    </>
  );
};

export default Hero;
