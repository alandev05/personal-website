"use client";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ProjectsSectionProps = {
  onClose: (direction?: "left" | "right") => void;
};

export default function ProjectsSection({ onClose }: ProjectsSectionProps) {
  const projects = [
    {
      name: "feelcast",
      path: "/projects/feelcast",
      awards: "Finalist - Dream AI Hackathon by Founder Institute",
    },
    {
      name: "capitalx",
      path: "/projects/capitalX",
      awards: "Best Use of Expo, Best Use of LLMs - HackPrinceton Spring 2025",
    },
    {
      name: "discer.io",
      path: "/projects/discerio",
      awards:
        "Best Use of Dedalus, YC x HackPrinceton Challenge - HackPrinceton Fall 2025",
    },
    {
      name: "donor-uplift",
      path: "/projects/donor-uplift",
      awards: "1st Place - Highest Operating Surplus - SAS Hackathon 2025",
    },
    {
      name: "pparent",
      path: "/projects/planningparenthood",
      awards: undefined,
    },
  ];

  return (
    <div className="w-[1200px] flex items-center justify-between relative">
      <button
        onClick={() => onClose("left")}
        className="absolute left-0 text-white hover:opacity-80 transition-opacity cursor-pointer"
        aria-label="Close projects"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <div className="flex items-center justify-evenly flex-1">
        {projects.map((project) => {
          let textSize = "text-3xl"; // Default: feelcast, pparent
          if (project.name === "discer.io") {
            textSize = "text-4xl"; // Largest
          } else if (
            project.name === "capitalx" ||
            project.name === "donor-uplift"
          ) {
            textSize = "text-[2rem]"; // Medium (between 3xl and 4xl)
          }

          return (
            <div
              key={project.name}
              className="group relative flex flex-col items-center"
            >
              <Link
                href={project.path}
                className={`text-raleway ${textSize} text-white hover:opacity-80 transition-opacity cursor-pointer`}
                onClick={() => onClose("left")}
              >
                {project.name}
              </Link>
              {/* Awards text - appears below on hover */}
              {project.awards && (
                <div className="absolute top-full mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
                  <p className="text-raleway text-xs text-white bg-black/90 px-2 py-1 rounded whitespace-nowrap">
                    {project.awards}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <button
        onClick={() => onClose("right")}
        className="absolute right-0 text-white hover:opacity-80 transition-opacity cursor-pointer"
        aria-label="Close projects"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      {/* <button
        onClick={onClose}
        className="text-white hover:opacity-80 transition-opacity cursor-pointer ml-2"
        aria-label="Close projects"
      >
        <X className="w-6 h-6" />
      </button> */}
    </div>
  );
}
