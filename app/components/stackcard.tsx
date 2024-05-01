"use client";
import { CardStack } from "../components/ui/card-stack";
import { cn } from "../utils/cn";
export function FacultyStack() {
  return (
    <div className="h-[15rem] flex items-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-yellow-100 text-yellow-500 dark:bg-yellow-700/[0.2] dark:text-yellow-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Prof. Dilip Bhattacharya",
    designation: "Professor & Director",
    content: (
      <p>
        Embrace every challenge as an opportunity for growth, <Highlight>for it is in overcoming obstacles that we truly flourish</Highlight>.
      </p>
    ),
  },
  {
    id: 1,
    name: "Prof.Sripati Mukhopadhyay",
    designation: "Professor",
    content: (
      <p>
        Success is not merely about reaching the destination, but <Highlight>cherishing the journey and the lessons learned along the way</Highlight>.
      </p>
    ),
  },
  {
    id: 2,
    name: "Prof.Dilip Kumar Maity",
    designation: "Professor & Principal",
    content: (
      <p>
        Believe in the power of perseverance, <Highlight>for consistent effort yields remarkable results</Highlight> in the pursuit of excellence.
      </p>
    ),
  }  
];
