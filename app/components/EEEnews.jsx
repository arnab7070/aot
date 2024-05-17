// components/computer-science-news.js
import React from "react";

const EEENews = () => {
  const department = "eee";

  const carouselItems = [
    {
      title: "Prize-Winning Start-Ups: Special Talk",
      subtitle:
        "ED-Cell hosts event with successful student entrepreneurs sharing startup journey, challenges, and advice",
      department: ["ece","me","eee","ee"],
      imageSrc:
        "https://media.licdn.com/dms/image/D5622AQGFpYcl7apq9g/feedshare-shrink_2048_1536/0/1712983761618?e=1718236800&v=beta&t=Lyvi0NFY7OPFa9KKfnifmltu9Ogkbg3HfaCtdl4p-Rw",
      link: "#",
    },
    {
      title: "Space Innovation: Dr. Tapan Misra",
      subtitle:
        "Dr. Tapan Misra discusses space tech innovation, past achievements, and future prospects.",
      department: ["cse","csbs"],
      imageSrc:
        "https://media.licdn.com/dms/image/D5622AQF8bRwSnaDygw/feedshare-shrink_2048_1536/0/1712984307820?e=1718236800&v=beta&t=3mWle45qrhzFTRcDD0ju88YYlO-FxPNQzKTUlol8wgE",
      link: "#",
    },
    {
      title: "Guardian Interaction: Academic Performance Discussion",
      subtitle:
        "AOT held a campus session on academic performance and attendance improvement, engaging with guardians and stakeholders interactively.",
      department:["cse","csbs","eee","ece","ee","me"],
      imageSrc:
        "https://media.licdn.com/dms/image/D5622AQEdg8a9BzOMlg/feedshare-shrink_2048_1536/0/1713070848206?e=1718236800&v=beta&t=T6K5cAhaW5IrbGNmE5oBgs5l_xk2yEGRTwTOw2xwMgE",
      link: "#",
    },
    {
      title:
        "AOT and IEEE WIE Kolkata organized seminar on Women in Space Engineering.",
      subtitle:
        "AOT & IEEE WIE Kolkata co-hosted a seminar on 'Women in Space Engineering,' showcasing Dr. Sumitra Mukhopadhyay and Dr. Ankita Pramanik's efforts for women empowerment.",
      department: ["eee","ee"],
      imageSrc:
        "https://media.licdn.com/dms/image/D5622AQFIe7FuwQyw4w/feedshare-shrink_2048_1536/0/1713875963014?e=1718236800&v=beta&t=H3-jClfrMWs5GSGd2pE7FYnNZUx6rbpQ5nNziurIpm0",
      link: "#",
    },
    {
      title: "An industrial visit to BTPS",
      subtitle:
        "EE students visited BTPS on 24th April, gaining practical knowledge on theoretical concepts.",
      department: ["ee","eee"],
      imageSrc:
        "https://media.licdn.com/dms/image/D4E22AQENhSd0bpMpfQ/feedshare-shrink_2048_1536/0/1715063824018?e=1718236800&v=beta&t=zjVJPCZ_cyvRXkMUw2b0NHXB_n4-YuMMzwadJ7nvEOA",
      link: "#",
    },
    {
      title: "Professor of JU visited AOT",
      subtitle:
        "Dr. Ranjan Ganguly, Jadavpur University, visited on 4th May 2024, appreciated labs, addressed students.",
      department: ["cse","csbs","eee","ece","ee","me"],
      imageSrc:
        "https://media.licdn.com/dms/image/D4E22AQFIttyLobhh2w/feedshare-shrink_2048_1536/0/1715065222244?e=1718236800&v=beta&t=odhDBGU-vXBluWTIR9DjeMOvS7k-9ItPMqFcC5zYPj0",
      link: "#",
    },
  ];

  const filteredItems = carouselItems.filter((item) =>
    item.department.includes(department)
  );
  
  return filteredItems;
};

export default EEENews;
