import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

export default function BentoGridDemo({ dept="ece" }) {
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
    {
      title: "Prize Distribution Ceremony for Recent Games Event",
      description: "Join us for the Prize Distribution Ceremony celebrating our recent games event winners and participants!",
      imageSrc: "https://media.istockphoto.com/id/1296652620/photo/golden-trophy-cup-on-gold-background-copy-space-for-text-3d-rendering.jpg?s=2048x2048&w=is&k=20&c=DQVG4uvkE3wQxsTMAikEoTPMfgQfSkECpT7UFmo-yRo=",
      dept: "cse"
    },
    {
      title: "Celebrating Alumni Success",
      description: "We are proud to announce that our distinguished alumnus, Mr. Yogesh Yogendra, has been recruited by Amazon as SDE.",
      imageSrc: "https://i.pinimg.com/564x/89/c5/3a/89c53a2a8ef25c033b3bee95992541ee.jpg",
      dept: "csbs"
    },
    {
      title: "Exciting Internship Opportunities",
      description: "Exciting internships available with Cognizant and Wipro. Apply by June 15th! Check student portal.",
      imageSrc: "https://i.pinimg.com/564x/c4/90/81/c4908193ecd4e2e463dd155ac07dde53.jpg",
      dept: "ece"
    },
    {
      title: "Holiday for Exam Preparation",
      description: "We're pleased to announce a one-month exam preparation holiday starting May 1st. Use this time wisely. Good luck, everyone!",
      imageSrc: "https://i.pinimg.com/564x/a0/ea/9c/a0ea9cd104422e34a63d66d1d6c7c92d.jpg",
      dept: "cse"
    },
    {
      title: "Campus Renovation Updates",
      description: "The library will be closed for renovations from July 1st to August 15th. Alternative study spaces will be available in the Student Center.",
      imageSrc: "https://i.pinimg.com/564x/2e/86/e0/2e86e02d376ff6a99b6ecc71885a5b55.jpg",
      dept: "csbs"
    },
  ];
  
  // Filter announcements based on department
  const filteredItems = items.filter(item => item.dept === dept);

  return (
    <div className="font-bold mb-10">
      <p className="font-bold text-3xl text-center p-10">NOTICE</p>
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
