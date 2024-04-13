'use client'
import React, { useState, useEffect } from "react";
import Preloader from "./components/preloader";
import { Button } from "./components/ui/button"
import { NavigationMenuDemo } from "./components/navbar";


const Page = () => {

  return (
    <div>
      <Preloader/>
      <Banner/>
      <div className="flex flex-row mx-auto justify-center text-center">
      <NavigationMenuDemo/>
    </div>
      
    </div>
  );
};

export default Page;
