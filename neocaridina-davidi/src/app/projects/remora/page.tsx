"use client";
import { useState } from "react";
import Image from "next/image";
import TopNav from "../../components/TopNav";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Globe,
  Trophy,
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
    src: "https://www.youtube.com/embed/lMPWQxQqZMs",
    title: "Remora demo video",
  },
];

const contributors = [
  { name: "Alan Nguyen", linkedin: "https://www.linkedin.com/in/alandoannguyen" },
  { name: "Sai Nellutla", linkedin: "https://www.linkedin.com/in/saikn/" },
  { name: "Maximus Rome", linkedin: "https://www.linkedin.com/in/maximusrome/" },
  { name: "Gigi Liu", linkedin: "https://www.linkedin.com/in/gigiliuxiaoqing/" },
  { name: "Khai Xin Kuan", linkedin: "https://www.linkedin.com/in/khaixinkuan/" },
];

export default function RemoraPage() {
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
            {mediaItems.length > 1 && (
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
            )}
          </div>

          {/* Text on the right */}
          <div className="w-full md:w-1/2 flex flex-col gap-4 justify-center">
            <div className="flex items-baseline gap-2">
              <div className="text-raleway text-2xl font-bold">
                Remora -{" "}
              </div>
              <p className="text-raleway text-base leading-relaxed">
                &quot;The solution to technical debt&quot;
              </p>
            </div>
            <p className="text-raleway text-base leading-relaxed">
              A codebase-driven learning tool that turns any GitHub repository,
              public or private, into a structured and interactive curriculum.
            </p>
            {/* Hackathon and Awards */}
            <div className="flex flex-col gap-2 mt-2">
              <p className="text-raleway text-sm text-white/80">
                Google DeepMind x Breakthrough Ventures Hackathon at MIT
              </p>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-white" />
                  <p className="text-raleway text-sm font-semibold text-white">
                    1st Place
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              <a
                href="https://remoralabs.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-2 rounded text-sm hover:opacity-80 transition-opacity flex items-center gap-1"
              >
                <Globe className="w-4 h-4" />
                Website
              </a>
              <a
                href="https://www.youtube.com/watch?v=lMPWQxQqZMs"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-2 rounded text-sm hover:opacity-80 transition-opacity flex items-center gap-1"
              >
                <ExternalLink className="w-4 h-4" />
                Demo
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
                  {contributor.linkedin ? (
                    <a
                      href={contributor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-opacity inline-flex items-center gap-1"
                    >
                      {contributor.name}
                    </a>
                  ) : (
                    <span>{contributor.name}</span>
                  )}
                  {index < contributors.length - 1 && <span>,</span>}
                </span>
              ))}
            </div>
          </div>
          <p className="text-raleway text-base leading-relaxed mb-4">
            AI makes you fast. Remora makes you good.
          </p>
          <p className="text-raleway text-base leading-relaxed mb-4">
            Remora generates learning modules and quiz cards derived from real
            source code files tailored to the user&apos;s learning goals and style,
            allowing users to actually build a genuine understanding of a
            codebase through hands-on experience.
          </p>
          <p className="text-raleway text-base leading-relaxed mb-4">
            Users can practice relevant, dynamically generated Leetcode-style
            questions, complete with problem statement, input/output,
            constraints, test cases, and an option to either write syntactically
            correct code or pseudocode that contains correct intuition.
          </p>
          <p className="text-raleway text-base leading-relaxed mb-4">
            Our highly optimized search and summarization algorithms leverage
            parallel Gemini calls to analyze and categorize the largest
            open-source repositories (Linux, Chromium, TensorFlow, etc.) in
            seconds, not minutes, and any repository is fair game.
          </p>
          <p className="text-raleway text-base leading-relaxed mb-4">
            We had just about 8 hours to work on this, but we completed an MVP,
            demoed it on the biggest repos in the world, and already had
            customers by the end of the day.
          </p>
        </div>
      </div>
    </div>
  );
}
