"use client";
import React from "react";
import { useState, useEffect } from "react";
import MEnews from "../components/CSEnews";
import Carousel from "../components/ui/carousal";
import Events from "../components/MEevents";
import Announcement from "../components/MEannouncement";
import Banner from "../components/banner1";
import Navbar from "../components/navbar1";
import Footer from "../components/footer";
const CSE = () => {
  const [nav, setNav] = useState(true);
  const newsItems = MEnews();

  return (
    <div>
      <Banner setNav={setNav} />
      <Navbar nav={nav} />
      <div className="w-full h-auto bg-gray-500 text-black font-bold px-5 @lg:px-12 lg:px-20 py-10">
        <section className="flex flex-col lg:flex-row h-auto w-full my-20">
          <div className="md:mt-0 mt-20 w-full lg:w-1/2">
            <h1 className="mx-20 text-3xl md:text-4xl lg:text-4xl font-semibold text-white max-w-m">
              Discover and Master the World of{" "}
              <span className="text-lime-500">Computer Science</span>
            </h1>
            <p className="text-white text-lg lg:text-base mt-5">
              Get started with the most comprehensive and cutting-edge
              curriculum to learn and excel in Computer Science and Engineering.
              Start your journey today and become proficient in the latest
              technologies and innovations in the field!
            </p>
            <div className="mt-10 h-12 flex items-center justify-start gap-3">
              <button className="px-6 py-1.5 h-12 text-white bg-lime-500 rounded-lg hover:opacity-75 transition-all duration-300">
                Explore now
              </button>
              <button className="px-3 py-1.5 text-white  rounded-lg hover:opacity-75 transition-all duration-300">
                Learn more
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-10 w-full h-auto gap-4 md:gap-2 lg:divide-x-[1px] place-content-center">
              <div className="w-full md:w-auto h-24 md:h-20 px-5 flex md:flex-col items-center justify-center">
                <h2 className="text-4xl md:text-5xl font-bold text-lime-500">
                40<span className="text-white">+</span>
                </h2>
                <h3 className="text-gray-300 text-sm md:text-base mt-2">
                  Students
                </h3>
              </div>
              <div className="w-full md:w-auto h-24 md:h-20 px-5 flex md:flex-col items-center justify-center">
                <h2 className="text-4xl md:text-5xl font-bold text-lime-500">
                  8<span className="text-white">+</span>
                </h2>
                <h3 className="text-gray-300 text-sm md:text-base mt-2">
                  Faculty
                </h3>
              </div>
              <div className="w-full md:w-auto h-24 md:h-20 px-5 flex md:flex-col items-center justify-center">
                <h2 className="text-4xl md:text-5xl font-bold text-lime-500">
                1
                </h2>
                <h3 className="text-gray-300 text-sm md:text-base mt-2">
                  Journals
                </h3>
              </div>
            </div>
          </div>
          <div className=" relative   w-full lg:w-1/2 lg:px-10 flex justify-center ">
            <div className="absolute left-10 top-20 h-[30%] w-[30%] bg-emerald-300 blur-[130px]"></div>

            <img
              src="https://i.pinimg.com/564x/3a/50/b0/3a50b0d9e6a302dae6047bb30f1f1ad8.jpg"
              alt=""
              className="h-auto w-full md:w-[70%] rounded-3xl"
            />

          </div>
        </section>
      </div>
      <div className="">
      <p className="text-center text-3xl font-bold mt-10">NEWS BULLETIN</p>
        <Carousel items={newsItems} />
        <div className="flex justify-end mr-10 mt-0"></div>
      </div>
      <Events />
      <Announcement />
      <Footer />
    </div>
  );
};

export default CSE;
