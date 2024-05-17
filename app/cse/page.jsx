'use client';
import React from 'react'
import { useState, useEffect } from "react";
import Banner from '../components/banner';

const CSE = () => {
    const [nav, setNav] = useState(true);
  return (
    <div>
        <Banner setNav={setNav} />
    </div>
  )
}

export default CSE