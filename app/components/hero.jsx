"use client";
import React, { useState, useEffect } from "react";
import { Pacifico } from "next/font/google";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import Footer from "../components/footer";
import Carousel from "./ui/carousal";
import { Button } from "./ui/button";
import BentoGridDemo from "../components/news";
import EventSection from "../components/events";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});
const carouselItems = [
  {
    number: "01",
    title: "G.I. Joe: Retaliation",
    subtitle:
      "The G.I. Joes are not only fighting their mortal enemy Cobra; they are forced to contend with threats from within the government that jeopardize their very existence.",
    image: "https://i.imgur.com/gIxOPCD.jpg",
    link: "#",
  },
  {
    number: "02",
    title: "Red Notice",
    subtitle:
      "An Interpol agent successfully tracks down the world's most wanted art thief with help from a rival thief. But nothing is as it seems as a series of double-crosses ensues.",
    image: "https://i.imgur.com/2V1lJy4.jpg",
    link: "#",
  },
  {
    number: "03",
    title: "Battleship",
    subtitle:
      "A fleet of ships is forced to do battle with an armada of unknown origins in order to discover and thwart their destructive goals.",
    image: "https://i.imgur.com/3tlt7BS.jpg",
    link: "#",
  },
  {
    number: "04",
    title: "London Has Fallen",
    subtitle:
      "In London for the Prime Minister's funeral, Mike Banning is caught up in a plot to assassinate all the attending world leaders.",
    image: "https://i.imgur.com/2Y4s19s.jpg",
    link: "#",
  },
  {
    number: "05",
    title: "The Dark Knight",
    subtitle:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    image: "https://i.imgur.com/VCcLrQU.jpg",
    link: "#",
  },
  {
    number: "06",
    title: "Inception",
    subtitle:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    image: "https://i.imgur.com/eeOTF3W.jpg",
    link: "#",
  },
];

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
          autoPlay
          loop
          muted
          preload="auto"
          style={{ width: '100%', height: 'auto' }}
        >
          <source
            src="/hero_video.mp4" // Ensure this path is correct
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

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

              <p>
                At Aot, you can explore ideas that interest you, find
                people who inspire and challenge you, and make discoveries that
                change your life—and the world.
              </p>
            </div>
          </div>
        </div>
        <div className=" ">
          <Carousel items={carouselItems} />
          <div className="flex justify-end mr-10 mt-0">
            <Button className="carousel-button rounded-full bg-black h-10 w-30 text-white">
              View All
            </Button>{" "}
            {/* New Button */}images.unsplash.com
          </div>
        </div>
        <BentoGridDemo />
        <EventSection />
        <Footer />
        <img
          src="https://www.jhu.edu/assets/themes/machado/assets/images/textures/footer-texture-blue-ad4fe94a5e.svg"
          className="w-full"
        />
      </section>
    </>
  );
};

export default Hero;
