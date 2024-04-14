"use client";
import React, { useState, useEffect } from "react";
import Preloader from "./components/preloader";
import { Button } from "./components/ui/button";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import Hero from "./components/hero.jsx";
const Page = () => {
  const [nav, setNav] = useState(true);
  return (
    <div>
      <Preloader />
      <Banner setNav={setNav} />
      <Navbar nav={nav} />
      <Hero />
    </div>
  );
};

export default Page;
