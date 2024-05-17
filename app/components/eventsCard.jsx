'use client'
import { useState } from 'react';

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
    className: "md:col-span-2",
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
    className: "col-span-1",
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
    className: "col-span-1",
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
    className: "md:col-span-2",
  },
];

const Events = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [filteredEvents, setFilteredEvents] = useState(eventsData);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    filterEvents(event.target.value, categoryFilter);
  };

  const handleCategoryFilter = (event) => {
    setCategoryFilter(event.target.value);
    filterEvents(searchTerm, event.target.value);
  };

  const filterEvents = (searchTerm, category) => {
    const filtered = eventsData.filter(event =>
      (event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       event.location.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (category === '' || event.category === category)
    );
    setFilteredEvents(filtered);
  };
  

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Events</h1>

      {/* Search and Filter */}
      <div className="mb-8 flex flex-wrap gap-4">
        <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search events..." className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400 flex-grow" />
        <select value={categoryFilter} onChange={handleCategoryFilter} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400">
          <option value="">All Categories</option>
          <option value="workshops">Workshops</option>
          <option value="music">Music</option>
          <option value="music">Sports</option>
          {/* Add more options as needed */}
        </select>
      </div>

      {/* Event Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
  );
};

export default Events;
