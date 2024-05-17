"use client";
import React from "react";
import { LayoutGrid } from "../components/ui/layout-grid";
import image1 from '../assets/techfiesta.png'

// Skeleton components
const SkeletonCard = ({ title, description }) => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">{title}</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        {description}
      </p>
    </div>
  );
};

// Card data
const cards = [
  {
    id: 1,
    content: <SkeletonCard title="Techfest 2024" description="Techfiesta 2024 is a two day long technical festival organised by the student's of Academy of Technology. It offers various events on software & hardware technology domain. Participants will take part based on their skillset and preferences. " />,
    className: "md:col-span-2",
    thumbnail: image1,
  },
  {
    id: 2,
    content: <SkeletonCard title="Games Meet" description="Where the Academy of Technology transforms into a playground where games like football, volleyball, and more come alive." />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1601564350184-9e93c13df688?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    content: <SkeletonCard title="Workshops in AOT" description="At the Academy of Technology, innovation takes center stage with workshops on the product design lifecycle, Git & GitHub mastery, frontend business logic, backend deployment strategies, and CAD design, shaping tomorrow's tech leaders." />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    content: <SkeletonCard title="Arcadia 2023" description="Experience the ultimate college extravaganza at Arcadia, a two-day fest filled with boundless fun and entertainment, featuring electrifying performances by renowned singers that will captivate and delight students throughout." />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1583681758134-3ea2709d2e23?q=80&w=1852&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function EventSection() {
  return (
    <main>
      <p className='text-4xl font-semibold ml-5 mt-10'>Events</p>
      <div className="h-screen py-16 w-full">
        <LayoutGrid cards={cards} />
      </div>
    </main>
  );
}
