import React, { useRef, useEffect } from "react";
import Image from "next/image";
import aot from "../assets/aot-logo.jpg";
import { Courgette } from "next/font/google";
import Link from "next/link";
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
     
      <nav   ref={bannerRef}
        className="flex justify-around py-4 bg-white/80
        backdrop-blur-md shadow-md w-full
     "
      >
        

        <div className="relative items-center hidden space-x-8 lg:flex ">
          <li class="dropdown dropdown-5">
            Academics
            <ul class="dropdown_menu dropdown_menu-5">
              <li class="dropdown_item-1"> Department</li>
              <li class="dropdown_item-2">UG Programs</li>
              <li class="dropdown_item-3">PG Programs</li>
              <li class="dropdown_item-4">Program Structure</li>
              <li class="dropdown_item-5">Regulations</li>
              <li class="dropdown_item-5"> Curriculum</li>
            </ul>
          </li>
          <li class="dropdown dropdown-5">
            Resources
            <ul class="dropdown_menu dropdown_menu-5">
              <li class="dropdown_item-1">Library</li>
              <li class="dropdown_item-2">Moodle</li>
            </ul>
          </li>

          <li class="dropdown dropdown-5">
            Admissions
            <ul class="dropdown_menu dropdown_menu-5">
              <li class="dropdown_item-1">UG Admission</li>
              <li class="dropdown_item-2">PG Admission</li>
            </ul>
          </li>

          <li class="dropdown dropdown-5">
            Research
            <ul class="dropdown_menu dropdown_menu-5">
              <li class="dropdown_item-1">Current Research</li>
              <li class="dropdown_item-2">Past Research</li>
              <li class="dropdown_item-3"> Research Facilities</li>
            </ul>
          </li>

          <li class="dropdown dropdown-5">
            Students
            <ul class="dropdown_menu dropdown_menu-5">
              <li class="dropdown_item-1">Life@AOT</li>
              <li class="dropdown_item-2">Campus Facilities</li>
              <li class="dropdown_item-3">Career Services</li>
              <li class="dropdown_item-3">Events</li>
            </ul>
          </li>

          <li class="dropdown dropdown-5">
            Faculty
            <ul class="dropdown_menu dropdown_menu-5">
              <Link href="/faculty">
                <li class="dropdown_item-1">Faculty List</li>
              </Link>
              <Link href="/faculty">
                <li class="dropdown_item-2">Faculty Positions</li>
              </Link>
              <Link href="/faculty">
                <li class="dropdown_item-3">Career Benefits@AOT</li>
              </Link>
            </ul>
          </li>
        </div>
      </nav>
    </div>
  );
};

export default Banner;
