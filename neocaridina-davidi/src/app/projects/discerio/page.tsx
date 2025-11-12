"use client";
import { useState } from "react";
import Image from "next/image";
import TopNav from "../../components/TopNav";
import {
  ChevronLeft,
  ChevronRight,
  Github,
  ExternalLink,
  Globe,
  Linkedin,
} from "lucide-react";

type MediaItem = {
  type: "image" | "video";
  src: string;
  alt?: string;
  title?: string;
};

const mediaItems: MediaItem[] = [
  {
    type: "video",
    src: "https://www.youtube.com/embed/0r1ZjDX3WjM",
    title: "Discerio project video",
  },
  {
    type: "image",
    src: "/draft.jpg",
    alt: "Discerio project draft",
  },
];

const contributors = [
  { name: "Alan Nguyen", linkedin: "https://www.linkedin.com/in/alan-nguyen" },
  { name: "Lucas Kim", linkedin: "https://www.linkedin.com/in/lucaskim65/" },
  {
    name: "Roman Slack",
    linkedin: "https://www.linkedin.com/in/roman-slack-a91a6a266/",
  },
  {
    name: "Koushik Sarkar",
    linkedin: "https://www.linkedin.com/in/koushik-sarkar-5280a3253/",
  },
];

export default function DiscerioPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? mediaItems.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === mediaItems.length - 1 ? 0 : prev + 1));
  };

  const currentMedia = mediaItems[currentIndex];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
      <TopNav />
      <div className="w-[1200px] max-w-full p-8">
        {/* Image and text component */}
        <div className="mb-12 flex flex-col md:flex-row gap-8 items-center">
          {/* Carousel on the left */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full aspect-[4/3] bg-gray-800 rounded-lg overflow-hidden">
              {currentMedia.type === "video" ? (
                <iframe
                  key={currentIndex}
                  src={currentMedia.src}
                  title={currentMedia.title || "Video"}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              ) : (
                <Image
                  key={currentIndex}
                  src={currentMedia.src}
                  alt={currentMedia.alt || "Image"}
                  fill
                  className="object-cover"
                />
              )}
            </div>
            {/* Arrow icons below carousel, bottom right */}
            <div className="flex justify-end gap-2 mt-2">
              <button
                onClick={goToPrevious}
                className="text-white hover:opacity-80 transition-opacity cursor-pointer"
                aria-label="Previous"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={goToNext}
                className="text-white hover:opacity-80 transition-opacity cursor-pointer"
                aria-label="Next"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Text on the right */}
          <div className="w-full md:w-1/2 flex flex-col gap-4 justify-center">
            <div className="flex items-baseline gap-2">
              <div className="text-raleway text-2xl font-bold">
                Discer.io -{" "}
              </div>
              <p className="text-raleway text-base leading-relaxed">
                "It's like Scratch, but for AI agents"
              </p>
            </div>
            <p className="text-raleway text-base leading-relaxed">
              An interactive platform that teaches agentic AI with guided
              experiential learning and a creative multiplayer game.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <a
                href="https://github.com/RomanSlack/Discerio"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-2 rounded text-sm hover:opacity-80 transition-opacity flex items-center gap-1"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://devpost.com/software/discer-io"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-2 rounded text-sm hover:opacity-80 transition-opacity flex items-center gap-1"
              >
                <ExternalLink className="w-4 h-4" />
                Devpost
              </a>
              <a
                href="https://www.discerio.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-2 rounded text-sm hover:opacity-80 transition-opacity flex items-center gap-1"
              >
                <Globe className="w-4 h-4" />
                Website
              </a>
            </div>
          </div>
        </div>

        {/* Longer text below */}
        <div>
          {/* Contributors - one line above */}
          <div className="flex justify-end mb-2">
            <div className="text-raleway text-base leading-relaxed flex items-center gap-2 flex-wrap">
              {contributors.map((contributor, index) => (
                <span key={contributor.name}>
                  <a
                    href={contributor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity inline-flex items-center gap-1"
                  >
                    {contributor.name}
                  </a>
                  {index < contributors.length - 1 && <span>,</span>}
                </span>
              ))}
            </div>
          </div>
          {/* Discere text */}
          <p className="text-raleway text-base leading-relaxed mb-4">
            "Discere" - to learn.
          </p>
          <p className="text-raleway text-base leading-relaxed mb-4">
            Agentic AI literacy is broken. Most people have heard of agents but
            few actually understand how to build them. There’s no accessible,
            game-like way to learn how multi-step reasoning, tool orchestration,
            and feedback loops come together to form a working agentic system.
            Current resources are either text-heavy or code-intensive, leaving
            beginners overwhelmed and disengaged.
          </p>
          <p className="text-raleway text-base leading-relaxed mb-4">
            That's why we built Discer.io, an educational MMO sandbox that lets
            players design, orchestrate, and deploy agentic AI workflows using
            drag-and-drop programming blocks and prompt-based commands. Think
            Scratch, but for agentic AI systems. It turns abstract AI workflows
            into tangible, interactive experiences. So Instead of just reading
            about agents or watching demos, you’ll build your own, connect
            tools, set reasoning steps, and see the workflow come alive — all
            without writing a single line of code.
          </p>
          <p className="text-raleway text-base leading-relaxed mb-4">
            We combined Next.js for the frontend, Python for the backend, and a
            custom tick-based simulation environment built using bun, to bring
            agent logic to life. The visual programming was powered by modular
            blocks linked to custom built AI reasoning modules. Also, we
            utilized SnowflakeSQL for robust log and data extraction, and
            deployed the services using Digital Ocean. We used Dedalus Labs for
            our agentic capabilities and MCP server hosting. Our agents may use
            any of a variety of models, including Grok, Gemini, Claude, and GPT.
          </p>
          <p className="text-raleway text-base leading-relaxed mb-4">
            Balancing educational clarity with open-ended creativity was tough.
            We had to design a workflow system that feels like play yet mirrors
            real agentic reasoning. Furthermore, building an entire video game
            as one small component of a larger product, pushed us to think
            outside the box and solve problems with maximal efficiency.
          </p>
          <p className="text-raleway text-base leading-relaxed mb-4">
            We learned how to visualize multi-step reasoning in real time,
            turning invisible thought chains into real, interactive systems.
            Thinking from the lens of an educational product also presented a
            unique opportunity to design an engaging curriculum and develop a
            service for people of all ages and backgrounds.
          </p>
          {/* <p className="text-raleway text-base leading-relaxed">
            Additional paragraphs can be added here to provide even more context
            and detail about the project. This section allows for a
            comprehensive overview of the work, including technical details,
            design decisions, and any other relevant information that would help
            viewers understand the project better.
          </p> */}
        </div>
      </div>
    </div>
  );
}
