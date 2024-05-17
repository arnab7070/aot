'use client';
import React, { useState } from "react";
import { LayoutGrid } from "./ui/layout-grid";

// Sample events data
const eventsData = [
    {
        id: 1,
        title: "Techfest 2024",
        date: "2024-05-20",
        time: "10:00 AM",
        location: "A Block",
        description: "Techfiesta 2024 is a two day long technical festival organised by the student's of Academy of Technology. It offers various events on software & hardware technology domain. Participants will take part based on their skillset and preferences.",
        category: "workshops",
        image: "https://images.unsplash.com/photo-1601564350184-9e93c13df688?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        dept: "cse"
      },
      {
        id: 2,
        title: "Games Meet",
        date: "2024-05-25",
        time: "2:00 PM",
        location: "AOT Playground",
        description: "Experience the dynamic transformation of the Academy of Technology into a lively playground, where the air is filled with the excitement of football, volleyball, and a variety of other engaging activities. So, guys stay tuned.",
        category: "sports",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        dept: "ece"
      },
      {
        id: 3,
        title: "Workshops in AOT",
        date: "2024-06-01",
        time: "9:00 AM",
        location: "D Block",
        description: "At the Academy of Technology, innovation takes center stage with workshops on the product design lifecycle, Git & GitHub mastery, frontend business logic, backend deployment strategies, and CAD design, shaping tomorrow's tech leaders.",
        category: "workshops",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        dept: "csbs"
      },
      {
        id: 4,
        title: "Arcadia 2023",
        date: "2024-06-10",
        time: "6:00 PM",
        location: "E Block",
        description: "Experience the ultimate college extravaganza at Arcadia, a two-day fest filled with boundless fun and entertainment, featuring electrifying performances by renowned singers that will captivate and delight students throughout.",
        category: "music",
        image: "https://images.unsplash.com/photo-1583681758134-3ea2709d2e23?q=80&w=1852&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        dept: "cse"
      },
      {
        id: 5,
        title: "Literary Fest 2024",
        date: "2024-06-15",
        time: "10:00 AM",
        location: "Library",
        description: "Immerse yourself in a world of words at the Literary Fest 2024, where poetry, prose, and storytelling take center stage. Join us for insightful discussions, captivating readings, and a celebration of literature's timeless beauty.",
        category: "workshops",
        image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da",
        dept: "ece"
    },
    {
        id: 6,
        title: "Science Fair 2024",
        date: "2024-07-01",
        time: "9:00 AM",
        location: "D Block",
        description: "Embark on a journey of discovery at the Science Fair 2024, where innovation meets experimentation. From cutting-edge research to hands-on demonstrations, explore the wonders of science and technology with us.",
        category: "workshops",
        image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31",
        dept: "csbs"
    }
];

export default function EventSection() {
  const [selectedDept, setSelectedDept] = useState('ece'); // Initial department

  // Filter events based on selected department
  const filteredEvents = eventsData.filter(event => event.dept === selectedDept);

  return (
    <main>
      <p className='text-4xl font-semibold ml-5 mt-10 text-center'>UPCOMING EVENTS</p>
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filteredEvents.map(event => (
            <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
              <img src={event.image} alt={event.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
                <p className="text-gray-600 mb-2">{event.date} - {event.time}</p>
                <p className="text-gray-600 mb-2">{event.location}</p>
                <p className="text-gray-800">{event.description}</p>
                <a href="#" className="mt-4 inline-block px-4 py-2 bg-gradient-to-r transition duration-300 ease-in-out transform hover:scale-110 from-gray-800 to-slate-400 text-white font-semibold rounded-md hover:from-gray-900 hover:to-gray-600 hover:text-white hover:shadow-lg">More Details</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
