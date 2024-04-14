import React, { useRef, useEffect } from "react";
import Image from "next/image";
import aot from "../assets/aot-logo.jpg";
import { Courgette } from "next/font/google";
const courgette = Courgette({
  weight: "400",
  subsets: ["latin"],
});
const Banner = ({ setNav }) => {
  const bannerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update nav state based on whether the banner is in viewport
        setNav(entry.isIntersecting);
      },
      { threshold: 0.5 } // Trigger callback when at least 50% of the banner is in viewport
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current);
      }
    };
  }, [setNav]); // Include setNav in the dependency array
  return (
    <div>
      <div className="bg-white border-yellow-400 border-t-8 border-b-8 rounded-md w-full p-4 ">
        <div className="flex flex-row gap-x-3  md:gap-x-12 w-full">
          <div className="mt-[-12px] flex flex-row  items-center">
            <Image src={aot} className=" w-24 h-12" />
          </div>

          <div
            className={`text-blue-950 font-extrabold  text-2xl md:text-5xl
          ${courgette.className} `}
          >
            Academy of Technology
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <span
            className={` text-blue-800 font-thin text-sm mt-1 md:mt-2 ${courgette.className}`}
          >
            ...translating vision into reality
          </span>
        </div>
      </div>
      <div  ref={bannerRef} className="overflow-hidden bg-purple-600 h-[8vh] max-h-[15vh] w-full  nav-background    text-white left-0 flex items-center">This is the normal navbar attached to the banner</div>
    </div>
  );
};

export default Banner;
