"use client";
import Link from "next/link";
import Image from "next/image";
import TopNav from "../components/TopNav";

type Project = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  path: string;
};

const projects: Project[] = [
  {
    id: "discerio",
    name: "Discer.io",
    tagline: "It's like Scratch, but for AI agents",
    description:
      "An interactive platform that teaches agentic AI with guided experiential learning and a creative multiplayer game.",
    image: "/discerio.png",
    path: "/projects/discerio",
  },
  {
    id: "capitalx",
    name: "capitalX",
    tagline: "AI-powered credit card optimization",
    description:
      "An AI-powered mobile platform that maximizes credit card rewards through intelligent card optimization.",
    image: "/capitalx.png",
    path: "/projects/capitalX",
  },
  {
    id: "donor-uplift",
    name: "Donor Uplift",
    tagline: "",
    description: "",
    image: "/du.png",
    path: "/projects/donor-uplift",
  },
  {
    id: "feelcast",
    name: "FeelCast",
    tagline: "Intelligent employee wellness platform",
    description:
      "An intelligent employee wellness platform that transforms how healthcare organizations monitor staff wellbeing.",
    image: "/feelcast.png",
    path: "/projects/feelcast",
  },
  {
    id: "planningparenthood",
    name: "Planning Parenthood",
    tagline: "AI-powered parenting planner",
    description: "An app to help parents with their personalized journeys.",
    image: "/pp1.PNG",
    path: "/projects/planningparenthood",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
      <TopNav />
      <div className="w-[1200px] max-w-full p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.path}
              className="group relative w-full aspect-[4/3] bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <div className="relative w-full h-full">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:opacity-80 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="text-raleway text-2xl font-bold mb-2">
                    {project.name}
                  </h2>
                  {project.tagline && (
                    <p className="text-raleway text-base text-white/80 mb-2">
                      {project.tagline}
                    </p>
                  )}
                  {project.description && (
                    <p className="text-raleway text-sm text-white/70 line-clamp-2">
                      {project.description}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
