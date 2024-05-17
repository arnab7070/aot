import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

export default function BentoGridDemo({ dept="cse" }) {
  // Sample events data
  const items = [
    {
      title: "Odd Semester results out",
      description: "All students are informed that their odd semester results are out.",
      imageSrc: "https://media.istockphoto.com/id/1086860354/photo/the-word-results-appearing-behind-torn-green-paper.jpg?s=1024x1024&w=is&k=20&c=PqeGy60zQtUNZ8k6uMytyfQS4uIt4XD3pi49oTBplhY=",
      dept: "cse"
    },
    {
      title: "Upcoming Exam Schedule",
      description: "Final exams for the Spring semester will be held from June 10th to June 28th. Please check the exam timetable on the student portal for specific dates and locations.",
      imageSrc: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      dept: "ece"
    },
    // Add more announcement objects here
  ];

  // Filter announcements based on department
  const filteredItems = items.filter(item => item.dept === dept);

  return (
    <div className="font-bold">
      <p className="font-bold text-3xl text-center p-10">ANNOUNCEMENT</p>
      <BentoGrid className="">
        {filteredItems.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={<img src={item.imageSrc} alt={item.title} className="w-full h-40 object-cover rounded-xl" />}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
