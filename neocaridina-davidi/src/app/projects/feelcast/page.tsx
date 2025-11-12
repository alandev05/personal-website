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
    src: "https://www.youtube.com/embed/stj7byiwP7k",
    title: "Feelcast project video",
  },
  // {
  //   type: "image",
  //   src: "/draft.jpg",
  //   alt: "Discerio project draft",
  // },
];

const contributors = [
  { name: "Alan Nguyen", linkedin: "https://www.linkedin.com/in/alan-nguyen" },
  { name: "Yash Jain", linkedin: "https://www.linkedin.com/in/yash-jain-mit/" },
  {
    name: "Rashad Haque",
    linkedin: "https://www.linkedin.com/in/rashadhaque/",
  },
  {
    name: "Rupam Kalita",
    linkedin: "https://www.linkedin.com/in/rupam-kalita1/",
  },
  {
    name: "Ramy Solanki",
    linkedin: "https://www.linkedin.com/in/ramysolanki/",
  },
];

export default function FeelCastPage() {
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
                FeelCast
              </div>
            </div>
            <p className="text-raleway text-base leading-relaxed">
              An intelligent employee wellness platform 
              that transforms how healthcare organizations 
              monitor staff wellbeing.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <a
                href="https://github.com/alandev05/FeelCast"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-2 rounded text-sm hover:opacity-80 transition-opacity flex items-center gap-1"
              >
                <Github className="w-4 h-4" />
                GitHub
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
            Healthcare organizations struggle to identify burnout and stress before it's too late. 
            Traditional surveys are time-consuming, lack real-time insights, and fail to capture 
            the emotional nuances that indicate early warning signs. Managers are left reacting to 
            crises rather than preventing them, and employees feel their wellbeing concerns go unnoticed 
            until they reach a breaking point.
          </p>
          <p className="text-raleway text-base leading-relaxed mb-4">
            FeelCast is a proactive wellness check-in system that uses sentiment analysis, video assessments, and 
            predictive analytics to identify burnout risks weeks in advance. Instead of waiting for 
            problems to escalate, managers get real-time insights, trend analysis, and personalized 
            recommendations like smart shift optimizations. Employees earn points for engagement 
            through our gamified system that makes wellness tracking feel rewarding rather than burdensome.
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
