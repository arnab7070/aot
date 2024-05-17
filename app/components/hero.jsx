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
    title: "Prize-Winning Start-Ups: Special Talk",
    subtitle:
      "ED-Cell hosts event with successful student entrepreneurs sharing startup journey, challenges, and advice",
    // header: <Skeleton />,
    imageSrc:
      "https://media.licdn.com/dms/image/D5622AQGFpYcl7apq9g/feedshare-shrink_2048_1536/0/1712983761618?e=1718236800&v=beta&t=Lyvi0NFY7OPFa9KKfnifmltu9Ogkbg3HfaCtdl4p-Rw",
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    link: "#",
  },
  {
    number: "02",
    title: "Space Innovation: Dr. Tapan Misra",
    subtitle:
      "Dr. Tapan Misra discusses space tech innovation, past achievements, and future prospects.",
    // header: <Skeleton />,
    imageSrc:
      "https://media.licdn.com/dms/image/D5622AQF8bRwSnaDygw/feedshare-shrink_2048_1536/0/1712984307820?e=1718236800&v=beta&t=3mWle45qrhzFTRcDD0ju88YYlO-FxPNQzKTUlol8wgE",
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    link: "#",
  },
  {
    number: "03",

    title: "Guardian Interaction: Academic Performance Discussion",
    subtitle:
      "AOT held a campus session on academic performance and attendance improvement, engaging with guardians and stakeholders interactively.",
    // header: <Skeleton />,
    imageSrc:
      "https://media.licdn.com/dms/image/D5622AQEdg8a9BzOMlg/feedshare-shrink_2048_1536/0/1713070848206?e=1718236800&v=beta&t=T6K5cAhaW5IrbGNmE5oBgs5l_xk2yEGRTwTOw2xwMgE",
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    link: "#",
  },
  {
    number: "04",
    title:
      "AOT and IEEE WIE Kolkata organized seminar on Women in Space Engineering.",
    subtitle:
      "AOT & IEEE WIE Kolkata co-hosted a seminar on 'Women in Space Engineering,' showcasing Dr. Sumitra Mukhopadhyay and Dr. Ankita Pramanik's efforts for women empowerment.",
    // header: <Skeleton />,
    imageSrc:
      "https://media.licdn.com/dms/image/D5622AQFIe7FuwQyw4w/feedshare-shrink_2048_1536/0/1713875963014?e=1718236800&v=beta&t=H3-jClfrMWs5GSGd2pE7FYnNZUx6rbpQ5nNziurIpm0",
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    link: "#",
  },
  {
    number: "05",
    title: "An industrial visit to BTPS",
    subtitle:
      "EE students visited BTPS on 24th April, gaining practical knowledge on theoretical concepts.",
    // header: <Skeleton />,
    imageSrc:
      "https://media.licdn.com/dms/image/D4E22AQENhSd0bpMpfQ/feedshare-shrink_2048_1536/0/1715063824018?e=1718236800&v=beta&t=zjVJPCZ_cyvRXkMUw2b0NHXB_n4-YuMMzwadJ7nvEOA",
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    link: "#",
  },
  {
    number: "06",
    title: "Professor of JU visited AOT",
    subtitle:
      "Dr. Ranjan Ganguly, Jadavpur University, visited on 4th May 2024, appreciated labs, addressed students.",
    // header: <Skeleton />,
    imageSrc:
      "https://media.licdn.com/dms/image/D4E22AQFIttyLobhh2w/feedshare-shrink_2048_1536/0/1715065222244?e=1718236800&v=beta&t=odhDBGU-vXBluWTIR9DjeMOvS7k-9ItPMqFcC5zYPj0",
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
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
          style={{ width: "100%", height: "60%" }}
        >
          <source
            src="/hero_video.mp4" // Ensure this path is correct
            type="video/mp4"
          />
        </video>

        <h1 style={titleStyle()} className="text-center lg:text-left ">
          <div className="glow-text">
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
          </div>
        </h1>
      </section>
      <section className="content">
        <div className="jhu-block brand-message section brand" role="region">
          <div className="dot-matrix" aria-hidden="true"></div>
          <div className="center force">
            <div className="">
              <h2 className="relative top-12 ">
                <span
                  className={`${pacifico.className} block text-white text-5xl md:text-8xl ml-2 mr-auto md:ml-6 md:mr-auto`}
                >
                  When vision
                </span>
                <br />
                <span
                  className={`${pacifico.className} block text-white text-5xl md:text-8xl ml-8 mr-auto md:ml-56`}
                >
                  meets guidance,
                </span>
                <br />
                <strong className="">
                  <span className="block text-5xl md:text-8xl ml-40 mr-auto md:ml-[50rem] md:mr-auto">
                    <h1 className="close">anything</h1>
                  </span>
                  <br />
                  <span className="block text-5xl md:text-8xl ml-20 mr-auto md:ml-96 md:mr-auto">
                    <h1 className="close">is possible.</h1>
                  </span>
                </strong>
              </h2>

             
            </div>
          </div>
        </div>
        <div className=" ">
          <Carousel items={carouselItems} />
          <div className="flex justify-end mr-10 mt-0"></div>
        </div>

        <EventSection/>
        <br/>
        <br/>
        <br/>
        <Footer />
        
      </section>
    </>
  );
};

export default Hero;
