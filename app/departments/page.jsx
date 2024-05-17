"use client";
import { useState } from "react";
import React from "react";
import Banner from "../components/banner";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../departments/card.css";
import Link from 'next/link';
import { Courgette } from "next/font/google";
const courgette = Courgette({
  weight: "400",
  subsets: ["latin"],
});
const departments = [
  {
    title: "Computer Science and Engineering",
    text: "Explore the world of computing with CSE.",
    imageUrl: "https://picsum.photos/500/300/?image=10",
    btnText: "Read More",
    link: 'cse'
  },
  {
    title: "Computer Science and Business Systems",
    text: "Integrate technology with business using CSBS.",
    imageUrl: "https://picsum.photos/500/300/?image=5",
    btnText: "Read More",
    link: 'csbs'
  },
  {
    title: "Electrical and Electronics Engineering",
    text: "Power up your knowledge in EEE.",
    imageUrl: "https://picsum.photos/500/300/?image=11",
    btnText: "Read More",
    link: 'eee'
  },
  {
    title: "Electronics and Communication Engineering",
    text: "Communicate the future with ECE.",
    imageUrl: "https://picsum.photos/500/300/?image=14",
    btnText: "Read More",
    link: 'ece'
  },
  {
    title: "Electrical Engineering",
    text: "Master the flow of electricity with EE.",
    imageUrl: "https://picsum.photos/500/300/?image=17",
    btnText: "Read More",
    link: 'ee'
  },
  {
    title: "Mechanical Engineering",
    text: "Engineer the world with ME.",
    imageUrl: "https://picsum.photos/500/300/?image=2",
    btnText: "Read More",
    link: 'me'
  },
];

const Page = () => {
  const [nav, setNav] = useState(true);

  return (
    <>
      <Banner setNav={setNav} />
      <Navbar nav={nav} />
      <div className="main">
        <h1 className={`${courgette.className} z-[-9] text-6xl md:text-8xl mt-52 md:mt-5 relative font-bold text-center mb-6`}>Departments</h1>
        <ul className="cards">
          {departments.map((dept, index) => (
            <li key={index} className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img src={dept.imageUrl} alt={dept.title} />
                </div>
                <div className="card_content">
                  <h2 className="card_title">{dept.title}</h2>
                  <p className="card_text">{dept.text}</p>
                  <Link href={dept.link}>
                    <button className="btn card_btn">{dept.btnText}</button>
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <Footer />
    </>
  );
};

export default Page;
