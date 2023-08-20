import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: "1",
    proName: "TravelNest",
    proDescription:
      "An online hotel reservation platform called travelNest enables users to reserve rooms at a variety of opulent hotels in India. The website provides an interface for Searching, Filtering and Booking a hotel.",
    techStack: ["react.png", "tailwindCss.jpg"],
    gitHub: "https://github.com/manojmanu5401/hotel-booking",
    demo: "https://travelnest-five.vercel.app/",
    image: "travelNestweb.png",
    reverse: false,
  },
  {
    id: "2",
    proName: "NYT Cafe",
    proDescription:
      "The UI design for NYT Cafe's online meal delivery platform has been thoughtfully created to offer users a smooth and enjoyable experience.",
    techStack: ["figma.png"],
    demo: "https://www.figma.com/file/dTcJ699vTVeKVCwxM5WQr1/NytCafe?type=design&node-id=0%3A1&mode=design&t=nIL9oakRF78HQ1XO-1",
    image: "nytcafe.jpg",
    reverse: true,
  },
];

export default function Project() {
  return (
    <>
      <section className="mx-auto max-w-7xl pt-44 py-4 px-4 sm:px-6 lg:px-8"  id="project"> 
        <div className="mx-5 xl:mx-24">
          <h1 className="relative text-3xl font-bold lg:text-start text-center">
            Protfolio
          </h1>
          <h6 className="text-[#F3A3A5] font-medium mt-2 lg:text-start text-center ">
            Most recent work
          </h6>
          <div className="cards mt-10">
            {projects.map((project) => {
              return <ProjectCard data={project} key={project.id}/>;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
