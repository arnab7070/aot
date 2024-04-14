import React, { useState, useEffect, useCallback } from "react";
import { debounce } from "../utilities/helpers";
const Navbar = ({ nav }) => {
  const [previousScroll, setPreviousScroll] = useState(0);
  const [show, setShow] = useState(true);

  const handleNav = debounce(() => {
    const currentScroll = window.scrollY;
    setShow(
      (previousScroll > currentScroll && previousScroll - currentScroll > 70) ||
        currentScroll < 10
    );
    setPreviousScroll(currentScroll);
  }, 40);

  useEffect(() => {
    window.addEventListener("scroll", handleNav);

    return () => window.removeEventListener("scroll", handleNav);
  }, [previousScroll, show, handleNav]);
  useEffect(() => {
    console.log(nav);
  }, [nav]);
  return (
    <div
      className={`overflow-hidden bg-purple-600 h-[8vh] max-h-[15vh] w-full nav-background fixed left-0 items-center ${nav ? "hidden" : ""}`}
      style={{ top: show ? "0px" : "-1000px" }}
    ></div>
  );
};
export default Navbar;
