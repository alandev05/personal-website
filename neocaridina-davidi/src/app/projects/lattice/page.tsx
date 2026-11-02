"use client";
import { useState } from "react";
import Image from "next/image";
import TopNav from "../../components/TopNav";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
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
    src: "https://www.youtube.com/embed/LimHm5GBM9k",
    title: "Lattice demo video",
  },
  {
    type: "image",
    src: "/lattice.png",
    alt: "Lattice flagging mistakes in a homework document",
  },
  {
    type: "image",
    src: "/lattice2.png",
    alt: "Lattice explaining a mistake that follows from an earlier error",
  },
];

const contributors: { name: string; linkedin?: string }[] = [
  { name: "Alan Nguyen", linkedin: "https://www.linkedin.com/in/alandoannguyen" },
  { name: "Eason Pan", linkedin: "https://www.linkedin.com/in/eason-pan-048128260/" },
  { name: "Sissi Zhao", linkedin: "https://www.linkedin.com/in/sissi-zhao-9bb267393/" },
];

export default function LatticePage() {
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
                Lattice -{" "}
              </div>
              <p className="text-raleway text-base leading-relaxed">
                &quot;Grammarly for your reasoning&quot;
              </p>
            </div>
            <p className="text-raleway text-base leading-relaxed">
              A Chrome extension that catches math and logic mistakes as you
              write in Google Docs, Overleaf, and any text field.
            </p>
            {/* Hackathon and Awards */}
            <div className="flex flex-col gap-2 mt-2">
              <p className="text-raleway text-sm text-white/80">
                DS+X Hackathon 2026
              </p>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-white" />
                  <p className="text-raleway text-sm font-semibold text-white">
                    Winner, College Hack #3
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              <a
                href="https://github.com/alandev05/Lattice"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-2 rounded text-sm hover:opacity-80 transition-opacity flex items-center gap-1"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://devpost.com/software/lattice-yonz76"
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
            If Grammarly can catch a typo the instant you make it, why can&apos;t something catch a reasoning mistake? A wrong variance gives a wrong standard deviation, which gives a wrong confidence interval, and by the time you notice, the damage has spread.
          </p>
          <p className="text-raleway text-base leading-relaxed mb-4">
            Lattice flags erroneous statements and every statement built on top of them, so you can trace a failing chain back to its root cause. It gives hints, not answers. Hold Option (⌥) and click any statement to see its reasoning chain and step through it line by line, like a debugger for your reasoning.
          </p>
          <p className="text-raleway text-base leading-relaxed mb-4">
            Under the hood, Lattice treats each document as a program. A DistilBERT model fine-tuned on Microsoft&apos;s Claimify dataset finds the claims locally in about a tenth of a second. An interpreter walks the document top-down with lexical scoping, Claude judges each paragraph against that environment, and every check records its dependencies so edits only rerun what they affect, like a build system.
          </p>
          <p className="text-raleway text-base leading-relaxed mb-4">
            We scrapped our first idea halfway through the hackathon and rebuilt from scratch. It was worth it: Lattice went on to win College Hack #3 at the DS+X Hackathon.
          </p>
        </div>
      </div>
    </div>
  );
}
