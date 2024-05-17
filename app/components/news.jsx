// import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";


// import {
//   IconArrowWaveRightUp,
//   IconBoxAlignRightFilled,
//   IconBoxAlignTopLeft,
//   IconClipboardCopy,
//   IconFileBroken,
//   IconSignature,
//   IconTableColumn,
// } from "@tabler/icons-react";
import Image from "next/image";

export default function BentoGridDemo() {
  return (
    <div className=" font-bold">
      <p className="font-bold text-3xl text-center p-10">ANNOUNCEMENT</p>
    <BentoGrid className="">
      
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={<Skeleton imageSrc={item.imageSrc} />}
          icon={item.icon}
          className={i === 3 || i === 6 ? "" : ""}
        />
      ))}
    </BentoGrid>
    </div>
  );
}
const Skeleton = ({ imageSrc }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <img src={imageSrc} height="9999" width="9999" className="rounded-xl"/>
  </div>
);
const items = [
  {
    title: "Odd Semester results out",
    description: "All students are informed that their odd semester results are out.",
    // header: <Skeleton />,
    imageSrc: "https://media.istockphoto.com/id/1086860354/photo/the-word-results-appearing-behind-torn-green-paper.jpg?s=1024x1024&w=is&k=20&c=PqeGy60zQtUNZ8k6uMytyfQS4uIt4XD3pi49oTBplhY=",
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Upcoming Exam Schedule",
    description: "Final exams for the Spring semester will be held from June 10th to June 28th. Please check the exam timetable on the student portal for specific dates and locations.",
    // header: <Skeleton />,
    imageSrc: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: " Prize Distribution Ceremony for Recent Games Event",
    description: "Join us for the Prize Distribution Ceremony celebrating our recent games event winners and participants!",
    // header: <Skeleton />,
    imageSrc: "https://media.istockphoto.com/id/1296652620/photo/golden-trophy-cup-on-gold-background-copy-space-for-text-3d-rendering.jpg?s=2048x2048&w=is&k=20&c=DQVG4uvkE3wQxsTMAikEoTPMfgQfSkECpT7UFmo-yRo=",
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Celebrating Alumni Success",
    description: "We are proud to announce that our distinguished alumnus, Mr. Yogesh Yogendra, has been recruited by Amazon as SDE.",
    // header: <Skeleton />,
    imageSrc: "https://i.pinimg.com/564x/89/c5/3a/89c53a2a8ef25c033b3bee95992541ee.jpg",
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Exciting Internship Opportunities",
    description: "Exciting internships available with Cognizant and Wipro. Apply by June 15th! Check student portal.",
    // header: <Skeleton />,
    imageSrc: "https://i.pinimg.com/564x/c4/90/81/c4908193ecd4e2e463dd155ac07dde53.jpg",
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Holiday for Exam Preparation",
    description: "We are pleased to announce a one-month holiday for exam preparation starting May 1st. Use this time wisely to prepare for your exams. Good luck to all students!",
    // header: <Skeleton />,
    imageSrc: "https://i.pinimg.com/564x/a0/ea/9c/a0ea9cd104422e34a63d66d1d6c7c92d.jpg",
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Campus Renovation Updates",
    description: "The library will be closed for renovations from July 1st to August 15th. Alternative study spaces will be available in the Student Center.",
    // header: <Skeleton />,
    imageSrc: "https://i.pinimg.com/564x/2e/86/e0/2e86e02d376ff6a99b6ecc71885a5b55.jpg",
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
];
