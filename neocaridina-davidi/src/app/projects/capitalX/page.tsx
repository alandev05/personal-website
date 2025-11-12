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
    src: "https://www.youtube.com/embed/w17OE9qXFHc",
    title: "capitalX project video",
  },
  // {
  //   type: "image",
  //   src: "/draft.jpg",
  //   alt: "Discerio project draft",
  // },
];

const contributors = [
  { name: "Alan Nguyen", linkedin: "https://www.linkedin.com/in/alan-nguyen" },
  { name: "Lucas Kim", linkedin: "https://www.linkedin.com/in/lucaskim65/" },
  {
    name: "Aarush Japtap",
    linkedin: "https://www.linkedin.com/in/aarushj/",
  },
  {
    name: "Aadit Krishna",
    linkedin: "https://www.linkedin.com/in/aaditkrishna/",
  },
];

export default function CapitalXPage() {
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
              <div className="text-raleway text-2xl font-bold">capitalX</div>
            </div>
            <p className="text-raleway text-base leading-relaxed">
              An AI-powered mobile platform that maximizes credit card rewards
              through intelligent card optimization.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <a
                href="https://github.com/ajagtapdev/capitalx"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-2 rounded text-sm hover:opacity-80 transition-opacity flex items-center gap-1"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://devpost.com/software/capitalx"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-2 rounded text-sm hover:opacity-80 transition-opacity flex items-center gap-1"
              >
                <ExternalLink className="w-4 h-4" />
                Devpost
              </a>
              <a
                href="https://capitalxtra.tech/"
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
            Credit card optimization is tedious. Many people juggle multiple
            cards but have no systematic way to maximize rewards, cashback, and
            benefits for each purchase. They&apos;re left manually comparing
            cards, missing out on optimal rewards, and making suboptimal
            financial decisions. But what if there was an easy way?
          </p>
          <p className="text-raleway text-base leading-relaxed mb-4">
            So we built CapitalX, its an AI-driven mobile platform that
            intelligently optimizes every credit card transaction. It scans your
            cards, analyzes their benefits, and automatically recommends the
            best card for every purchase. Instead of manually comparing rewards
            or guessing which card to use, simply take a photo of your card
            which is stored securely in our app, then shop normally. You can let
            our fine-tuned Gemma-27B model ensure every swipe maximizes your
            financial returns.
          </p>
          <p className="text-raleway text-base leading-relaxed mb-4">
            To build this, we combined React Native and Expo for a seamless
            cross-platform mobile experience, Flask for a robust Python backend,
            and Google&apos;s Gemini AI models (Gemini 1.5 Flash, Gemini 2.0
            Flash with Google Search) to power intelligent card identification
            and recommendation. The vision capabilities leverage Google Cloud
            Vision API for secure card scanning and digitization. We also
            integrated Supabase for secure user authentication and card storage,
            Knot TransactionLink API for seamless payment processing, and
            deployed our backend services on Render.
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
