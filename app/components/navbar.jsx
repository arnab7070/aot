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

          <div className="relative items-center hidden space-x-8 lg:flex ">
           
              <li class="dropdown dropdown-5">
                Academics
                <ul class="dropdown_menu dropdown_menu-5">
                <Link href="/departments">
                  <li class="dropdown_item-1">Departments</li>
                </Link>
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
      )}
    </>
  );
};
export default Navbar;
