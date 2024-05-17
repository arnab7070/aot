"use client";
import React from "react";
import { useState, useEffect } from "react";
import Banner from "../components/banner1";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
const CSE = () => {
  const [nav, setNav] = useState(true);
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  // Function to calculate the time remaining
  function calculateTimeRemaining() {
    const endTime = new Date("May 18, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const timeRemaining = Math.max(0, endTime - now); // Ensure time remaining is non-negative
    return timeRemaining;
  }

  // Function to format time
  function formatTime(ms) {
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }

  // Update time remaining every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        const updatedTimeRemaining = Math.max(0, prev - 1000);
        if (updatedTimeRemaining === 0) clearInterval(interval); // Stop interval when countdown ends
        return updatedTimeRemaining;
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);
  return (
    <div>
      <Banner setNav={setNav} />
      <Navbar nav={nav} />
      <div className="w-full h-auto bg-gray-500 text-black font-bold px-5 @lg:px-12 lg:px-20 py-10">
        <section className="flex flex-col lg:flex-row h-auto w-full my-20">
          <div className="  w-full lg:w-1/2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white max-w-sm [object Object]">
              Discover and Collect The Best? NFTs{" "}
              <span className="text-lime-500">Digital Art.</span>
            </h1>
            <p className="text-white text-lg lg:text-base mt-5">
              Get started with the easiest and most secure platform to buy and
              trade digital ART and NFT's. Start exploring the world of digital
              art and NFTs today and take control of your digital assets with
              confidence!
            </p>
            <div className="mt-10 h-12 flex items-center justify-start gap-3">
              <button className="px-6 py-1.5 h-12 text-white bg-lime-500 rounded-lg hover:opacity-75 transition-all duration-300">
                Explore now
              </button>
              <button className="px-3 py-1.5 text-white  rounded-lg hover:opacity-75 transition-all duration-300">
                Learn more
              </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 w-full h-auto gap-2 lg:divide-x-[1px] place-content-center">
              <div className="w-full h-20  px-5  flex lg:block items-center justify-center">
                <h2 className=" text-5xl font-bold text-lime-500 ">
                  65<span className="[object Object] text-white">K</span>
                </h2>
                <h3 className="text-gray-300 text-sm mt-2 ">Students</h3>
              </div>
              <div className="w-full h-20  px-5  flex lg:block items-center justify-center">
                <h2 className=" text-5xl font-bold text-lime-500 ">
                  1.7<span className="[object Object] text-white">K</span>
                </h2>
                <h3 className="text-gray-300 text-sm mt-2 ">Faculty</h3>
              </div>
              <div className="w-full h-20  px-5  flex lg:block items-center justify-center">
                <h2 className=" text-5xl font-bold text-lime-500 ">
                  75<span className="[object Object] text-white">K</span>
                </h2>
                <h3 className="text-gray-300 text-sm mt-2 ">Journals</h3>
              </div>
            </div>
          </div>
          <div className=" relative   w-full lg:w-1/2 lg:px-10 flex justify-center ">
            <div className="absolute left-10 top-20 h-[30%] w-[30%] bg-emerald-300 blur-[130px]"></div>

            <img
              src="https://utfs.io/f/f1494cc9-99a0-472c-ae73-3de00d15e91f-df0jcn.jpg"
              alt=""
              className="h-auto w-full md:w-[70%] rounded-3xl"
            />

            <div className="absolute w-full lg:w-[50%] bg-slate-900 border-t border-lime-500 rounded-xl bottom-0 translate-y-1/2 right-0 lg:right-10 z-10 h-auto p-5">
              <div className="flex flex-col lg:flex-row items-center justify-between mb-5">
                <div className="mb-3 lg:mb-0 lg:mr-5">
                  <p className="text-sm text-lime-500">Hackathon Countdown</p>
                  <div className="text-lg text-white font-bold">
                    {formatTime(timeRemaining)}
                  </div>
                </div>
                <div className="">
                  <p className="text-sm text-lime-500">Top Project</p>
                  <p className="text-lg text-white font-bold">
                    AI-Powered Chatbot
                  </p>
                </div>
              </div>
              <button className="px-3 py-1.5 w-full lg:w-auto text-white bg-lime-500 border border-lime-500 rounded-lg hover:opacity-75 transition-all duration-300">
                Join the Innovation!
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default CSE;
