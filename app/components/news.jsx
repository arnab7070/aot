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

export function BentoGridDemo() {
  return (
    <div className="max-w-4xl mx-auto font-bold">
      NEWS SECTION
    <BentoGrid className="max-w-4xl mx-auto">
      
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={<Skeleton imageSrc={item.imageSrc} />}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
    </div>
  );
}
const Skeleton = ({ imageSrc }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <Image src={imageSrc} height="9999" width="9999" className="rounded-xl"/>
  </div>
);
const items = [
  {
    title: "Professor of JU visited AOT",
    description: "Dr. Ranjan Ganguly, Jadavpur University, visited on 4th May 2024, appreciated labs, addressed students.",
    // header: <Skeleton />,
    imageSrc: "https://media.licdn.com/dms/image/D4E22AQFIttyLobhh2w/feedshare-shrink_2048_1536/0/1715065222244?e=1718236800&v=beta&t=odhDBGU-vXBluWTIR9DjeMOvS7k-9ItPMqFcC5zYPj0",
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "PCB Design Workshop",
    description: "AOT held a PCB Design workshop by Dipak Chakraborty for EE students on 23rd march, offering practical insights.",
    // header: <Skeleton />,
    imageSrc: "https://media.licdn.com/dms/image/D4E22AQHWpXoPSWZVig/feedshare-shrink_2048_1536/0/1715062904545?e=1718236800&v=beta&t=5QGE5ufpMQ0E7Hr5eYvPoz0hol7wMawC49iVXhMGWd8",
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "An industrial visit to BTPS",
    description: "EE students visited BTPS on 24th April, gaining practical knowledge on theoretical concepts.",
    // header: <Skeleton />,
    imageSrc: "https://media.licdn.com/dms/image/D4E22AQENhSd0bpMpfQ/feedshare-shrink_2048_1536/0/1715063824018?e=1718236800&v=beta&t=zjVJPCZ_cyvRXkMUw2b0NHXB_n4-YuMMzwadJ7nvEOA",
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "AOT and IEEE WIE Kolkata organized seminar on Women in Space Engineering.",
    description: "AOT and IEEE WIE Kolkata jointly hosted a seminar on 'Women in Space Engineering,' showcasing initiatives supporting women in engineering. Dr. Sumitra Mukhopadhyay and Dr. Ankita Pramanik highlighted impactful efforts to empower women, drawing diverse attendees from students to faculty.",
    // header: <Skeleton />,
    imageSrc: "https://media.licdn.com/dms/image/D5622AQFIe7FuwQyw4w/feedshare-shrink_2048_1536/0/1713875963014?e=1718236800&v=beta&t=H3-jClfrMWs5GSGd2pE7FYnNZUx6rbpQ5nNziurIpm0",
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Guardian Interaction: Academic Performance Discussion",
    description: "AOT held a campus session on academic performance and attendance improvement, engaging with guardians and stakeholders interactively.",
    // header: <Skeleton />,
    imageSrc: "https://media.licdn.com/dms/image/D5622AQEdg8a9BzOMlg/feedshare-shrink_2048_1536/0/1713070848206?e=1718236800&v=beta&t=T6K5cAhaW5IrbGNmE5oBgs5l_xk2yEGRTwTOw2xwMgE",
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Space Innovation: Dr. Tapan Misra",
    description: "Dr. Tapan Misra discusses space tech innovation, past achievements, and future prospects.",
    // header: <Skeleton />,
    imageSrc: "https://media.licdn.com/dms/image/D5622AQF8bRwSnaDygw/feedshare-shrink_2048_1536/0/1712984307820?e=1718236800&v=beta&t=3mWle45qrhzFTRcDD0ju88YYlO-FxPNQzKTUlol8wgE",
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Prize-Winning Start-Ups: Special Talk",
    description: "ED-Cell hosts event with successful student entrepreneurs sharing startup journey, challenges, and advice",
    // header: <Skeleton />,
    imageSrc: "https://media.licdn.com/dms/image/D5622AQGFpYcl7apq9g/feedshare-shrink_2048_1536/0/1712983761618?e=1718236800&v=beta&t=Lyvi0NFY7OPFa9KKfnifmltu9Ogkbg3HfaCtdl4p-Rw",
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
];
