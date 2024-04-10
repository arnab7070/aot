'use client'
import React, { useState, useEffect } from "react";

const Page = () => {
  const [showIndex, setShowIndex] = useState(true);

  useEffect(() => {
    // Hide the index.html content after 40ms
    const timer = setTimeout(() => {
      setShowIndex(false);
    }, 8000);

    // Clear the timer on component unmount to prevent memory leaks
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  return (
    <div>
      {showIndex ? (
        // Render the index.html content
        <iframe title="index" src="/index.html" style={{ width: "100%", height: "100vh", border: "none" }} />
      ) : (
        // Render the usual page content
        <div>Usual page content
         
        </div>
      )}
    </div>
  );
};

export default Page;
