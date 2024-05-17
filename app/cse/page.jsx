'use client';
import React from 'react'
import { useState, useEffect } from "react";
import Banner from '../components/banner1';
import Hero from '../components/hero1'
const CSE = () => {
    const [nav, setNav] = useState(true);
  return (
    <div>
        <Banner setNav={setNav} />
        <Hero />
    </div>
  )
}

export default CSE