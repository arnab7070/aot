import React, { useState, useEffect } from "react";

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
        <h1 style={titleStyle()}>Parallax Hero</h1>
      </section>
      <section className="content">
        <div className="jhu-block brand-message section brand" role="region">
          <div className="dot-matrix" aria-hidden="true"></div>
          <div className="center force">
            <div className="">
              <h2 className="relative top-6">
                <span className="">When ambition</span>{" "}<br/>
                <span className="">
                  meets opportunity<span className="">,</span>
                </span>{" "}<br/>
                <strong>
                  <span className="">anything</span>{" "}<br/>
                  <span className="">
                    is possible<span className="">.</span>
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
       
        </section>
    </>
  );
};

export default Hero;
