"use client";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

type ProjectsSectionProps = {
  onClose: (direction?: "left" | "right" | "up" | "down") => void;
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
    <div className="w-full max-w-[1200px] flex flex-col md:flex-row items-center justify-between relative px-4 min-h-[200px] md:min-h-0">
      {/* Mobile: Chevron Up */}
      <button
        onClick={() => onClose("up")}
        className="md:hidden absolute top-0 text-white hover:opacity-80 transition-opacity cursor-pointer z-10"
        aria-label="Close projects"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
      {/* Desktop: Chevron Left */}
      <button
        onClick={() => onClose("left")}
        className="hidden md:flex absolute left-0 text-white hover:opacity-80 transition-opacity cursor-pointer z-10"
        aria-label="Close projects"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <div className="flex flex-col md:flex-row items-center justify-center md:justify-evenly flex-1 gap-4 md:gap-0 overflow-y-auto md:overflow-x-auto py-8 md:py-0 max-h-[70vh] md:max-h-none">
        {projects.map((project) => {
          let textSize = "text-base sm:text-xl md:text-3xl"; // Default: feelcast, pparent
          if (project.name === "discer.io") {
            textSize = "text-lg sm:text-2xl md:text-4xl"; // Largest
          } else if (
            project.name === "capitalx" ||
            project.name === "donor-uplift"
          ) {
            textSize = "text-base sm:text-xl md:text-[2rem]"; // Medium (between 3xl and 4xl)
          }

          return (
            <div
              key={project.name}
              className="group relative flex flex-col items-center"
            >
              <Link
                href={project.path}
                className={`text-raleway ${textSize} text-white hover:opacity-80 transition-opacity cursor-pointer whitespace-nowrap`}
                onClick={(e) => {
                  const isMobile =
                    typeof window !== "undefined" && window.innerWidth < 768;
                  onClose(isMobile ? "up" : "left");
                }}
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

      {/* Mobile: Chevron Down */}
      <button
        onClick={() => onClose("down")}
        className="md:hidden absolute bottom-0 text-white hover:opacity-80 transition-opacity cursor-pointer z-10"
        aria-label="Close projects"
      >
        <ChevronDown className="w-5 h-5" />
      </button>
      {/* Desktop: Chevron Right */}
      <button
        onClick={() => onClose("right")}
        className="hidden md:flex absolute right-0 text-white hover:opacity-80 transition-opacity cursor-pointer z-10"
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
