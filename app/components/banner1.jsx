"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import aot from "../assets/aot-logo.jpg";
import { Courgette } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import Hamburger from "./hamburger";

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
      <div
        className="border-yellow-400 border-t-8 border-b-8 rounded-md w-full p-4 fixed top-0 bg-white/80
        backdrop-blur-md shadow-md z-[999] md:static md:bg-white"
      >
        <div>
          <div className="flex flex-row gap-x-3 md:gap-x-12 w-full">
            <div className="mt-[-12px] flex flex-row items-center">
              <Image src={aot} className="w-24 h-12" />
            </div>
            <div
              className={`text-blue-950 font-extrabold text-2xl md:text-5xl ${courgette.className}`}
            >
              Academy of Technology
            </div>
            <div className="block md:hidden z-[9999]">
              <Hamburger />
            </div>
          </div>
          <div className="flex flex-row justify-center">
            <span
              className={`text-blue-800 font-thin text-sm mt-1 md:mt-2 ${courgette.className}`}
            >
              ...translating vision into reality
            </span>
          </div>
        </div>
      </div>

      <nav
        ref={bannerRef}
        className="justify-around py-4 bg-white/80 backdrop-blur-md shadow-md w-full hidden md:flex"
      >
        <div className="relative items-center hidden space-x-8 lg:flex">
          <Link href="/">
            <li className="dropdown dropdown-5">Home</li>
          </Link>

          <li className="dropdown dropdown-5">
            People
            <ul className="dropdown_menu dropdown_menu-5">
              <Link href="/faculty">
                <li className="dropdown_item-1">Faculty Members</li>
              </Link>
              <Link href="/faculty">
                <li className="dropdown_item-2">Staff Members</li>
              </Link>
            </ul>
          </li>

          <li className="dropdown dropdown-5">
            Students
            <ul className="dropdown_menu dropdown_menu-5">
              <Link href="/placement">
                <li className="dropdown_item-1">Placement</li>
              </Link>
              <Link href="/student-activities">
                <li className="dropdown_item-2">Student Activities</li>
              </Link>
              <Link href="/life-at-aot">
                <li className="dropdown_item-3">Life@AOT_Dept</li>
              </Link>
              <Link href="/newsletter">
                <li className="dropdown_item-4">Departmental Newsletter</li>
              </Link>
            </ul>
          </li>

          <li className="dropdown dropdown-5">
            Academics
            <ul className="dropdown_menu dropdown_menu-5">
              <Link href="/ug-program">
                <li className="dropdown_item-1">UG Program</li>
              </Link>
              <Link href="/pg-program">
                <li className="dropdown_item-2">PG Program</li>
              </Link>
            </ul>
          </li>

          <li className="dropdown dropdown-5">
            Research
            <ul className="dropdown_menu dropdown_menu-5">
              <Link href="/current-research">
                <li className="dropdown_item-1">Current Research</li>
              </Link>
              <Link href="/past-research">
                <li className="dropdown_item-2">Past Research</li>
              </Link>
              <Link href="/research-facilities">
                <li className="dropdown_item-3">Research Facilities</li>
              </Link>
            </ul>
          </li>

          <li className="dropdown dropdown-5">
            Achievements & Events
            <ul className="dropdown_menu dropdown_menu-5">
              <Link href="/achievements">
                <li className="dropdown_item-1">Achievements</li>
              </Link>
              <Link href="/events">
                <li className="dropdown_item-2">Events</li>
              </Link>
            </ul>
          </li>

          <li className="dropdown dropdown-5">
            Join Us
            <ul className="dropdown_menu dropdown_menu-5">
              <Link href="/faculty-vacancies">
                <li className="dropdown_item-1">Faculty Vacancies</li>
              </Link>
            </ul>
          </li>

          <Link href="/contact">
            <li className="dropdown dropdown-5">Contact</li>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Banner;
