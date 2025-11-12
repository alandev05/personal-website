"use client";
import { useState } from "react";
import Image from "next/image";
import TopNav from "../../components/TopNav";
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react";

type MediaItem = {
  type: "image" | "video";
  src: string;
  alt?: string;
  title?: string;
};

const mediaItems: MediaItem[] = [
  {
    type: "image",
    src: "/pp1.png",
    alt: "Img1",
  },
  {
    type: "image",
    src: "/pp2.png",
    alt: "Img2",
  },
];

const contributors = [
  { name: "Alan Nguyen", linkedin: "https://www.linkedin.com/in/alan-nguyen" },
  { name: "Vivian Zou", linkedin: "https://www.linkedin.com/in/vivianzou1/" },
  {
    name: "Sydney Du",
    linkedin: "https://www.linkedin.com/in/sydney-du-1ab7b635b/",
  },
  {
    name: "Meryl Zhang",
  },
];

export default function PlanningParenthoodPage() {
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
                  className="object-contain"
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
                Planning Parenthood
              </div>
            </div>
            <p className="text-raleway text-base leading-relaxed">
              An app to help parents with their personalized journeys.
            </p>
            {/* Hackathon and Awards */}
            <div className="flex flex-col gap-2 mt-2">
              <p className="text-raleway text-sm text-white/80">HackMIT</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              <a
                href="https://github.com/alandev05/PlanningParenthood"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-2 rounded text-sm hover:opacity-80 transition-opacity flex items-center gap-1"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://plume.hackmit.org/project/bxbve-fqwex-bxdav-osimy"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-2 rounded text-sm hover:opacity-80 transition-opacity flex items-center gap-1"
              >
                <ExternalLink className="w-4 h-4" />
                Plume
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
            While many education apps focus on directly helping kids learn, we
            recognize that the largest influence on a child&apos;s growth is
            their parents. However, many first-time or even multiple-time
            parents often struggle with how to be an effective parent... and we
            don&apos;t blame them! The demands of children can create time
            pressures, stress, and uncertainty. That’s why we created Planning
            Parenthood, an AI-powered parenting planner that transforms your
            family’s goals, budget, schedule, and location into a personalized
            activity plan—giving parents clarity, confidence, and actionable
            ways to nurture their children.
          </p>
          <p className="text-raleway text-base leading-relaxed mb-4">
            Planning Parenthood is a React Native app that provides AI
            recommended, personalized parenting advice and helps parents
            discover inspiring role models, with features including a kid
            personality quiz, conversational AI assistant, and an agentic
            extraordinary people search functionality.
          </p>
          <p className="text-raleway text-base leading-relaxed mb-4">
            We built PlanningParenthood using React Native with Expo for
            cross-platform mobile development, a Flask backend with Firebase for
            data storage, integrated Cerebras AI for conversational parenting
            advice, and implemented a personality quiz system that personalizes
            recommendations based on each child&apos;s unique traits. The
            recommendations are generated using Anthropic&apos;s Claude. The
            extraordinary people search functionality is a Claude powered agent
            that can interprets the user&apos;s search desire and searches the
            web independently to find people that match the description the user
            is looking for.
          </p>
          <p className="text-raleway text-base leading-relaxed mb-4">
            We faced difficulties integrating multiple AI services, handling
            real-time data synchronization between the personality quiz and chat
            system, resolving merge conflicts in our codebase, and ensuring
            smooth navigation flows across different app screens.
          </p>
          <p className="text-raleway text-base leading-relaxed mb-4">
            We successfully created a fully functional parenting app with
            personalized AI conversations, built a comprehensive personality
            assessment system that actually influences AI responses, and
            integrated multiple complex features, including role model discovery
            and real-time chat functionality.
          </p>
          <p className="text-raleway text-base leading-relaxed mb-4">
            We learned how to integrate AI APIs effectively, manage state across
            complex React Native applications, implement real-time data
            synchronization, and, most importantly, how thoughtful UX design can
            make technology truly helpful for parents.
          </p>
          <p className="text-raleway text-base leading-relaxed mb-4">
            Given more time, we would add community features for parents to
            connect, expand the role model database with more diverse
            backgrounds, implement push notifications for daily parenting tips,
            add multi-child support for families, and integrate with wearable
            devices to track family activities and suggest personalized bonding
            experiences.
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
