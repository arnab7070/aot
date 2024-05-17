import React, { useState, useEffect, useCallback } from "react";
import aot from "../assets/aot-logo-removebg-preview.png";
import Image from "next/image";
import Link from "next/link";
const Navbar = ({ nav }) => {
  return (
    <>
      {!nav && (
        <nav
          className=" justify-around py-4 bg-white/80
        backdrop-blur-md shadow-md w-full
        fixed top-0 left-0 right-0 z-[50] hidden md:flex"
        >
          <div className="relative flex items-center ">
            <a className="cursor-pointer">
              <h3 className="text-2xl font-medium text-blue-500">
                <Image
                  className="h-12 object-cover bg-transparent"
                  src={aot}
                  alt="Store Logo"
                />
              </h3>
            </a>
          </div>

          <div className="relative items-center hidden space-x-8 lg:flex">
            <Link href="/home">
              <li className="dropdown dropdown-5">Home</li>
            </Link>
            
            <li className="dropdown dropdown-5">
              People
              <ul className="dropdown_menu dropdown_menu-5">
                <Link href="/faculty">
                  <li className="dropdown_item-1">Faculty Members</li>
                </Link>
                <Link href="/staff">
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
      )}
    </>
  );
};
export default Navbar;
