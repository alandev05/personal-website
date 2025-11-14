"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { GraduationCap, Briefcase } from "lucide-react";

type TimelineItem = {
  id: string;
  type: "education" | "experience";
  title: string;
  location: string;
  date: string;
  description: string | string[];
  icon?: React.ReactNode;
};

const timelineItems: TimelineItem[] = [
  {
    id: "1",
    type: "experience",
    title: "Founding Engineer",
    location: "Ceed AI, Cambridge, MA",
    date: "September 2025 - Present",
    description: [
      "Building Ceed AI, a gamified CRM and social platform that unites individuals, non-profits, and brands by transforming one-time donations or volunteer efforts into sustained, purpose-driven communities.",
      "Secured 2 signed Letters of Intent (LOI) with nonprofits, incoming pilot with MIT.",
      "Backed by MIT Sandbox & MTC Startup Pass (Fall 2025).",
    ],
  },
  {
    id: "2",
    type: "experience",
    title: "Software Developer Intern",
    location: "Peer Global Inc, Dover, DE",
    date: "June 2025 - August 2025",
    description: [
      "Architected internal AI testing platform with React, Flask, and MongoDB, featuring 3-tier, multi-persona, modular real-time conversation model for app with over 1.2 million users.",
      "Designed and deployed dynamic prompt engineering system with context depth scaling and placeholder substitution.",
    ],
  },
  {
    id: "3",
    type: "education",
    title: "Northeastern University",
    location: "Boston, MA",
    date: "Fall 2022 - May 2027",
    description:
      "Candidate for a Bachelor of Science in Computer Science. GPA: 3.6/4.0",
  },
];

export default function ExperienceTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!timelineRef.current || !lineRef.current) return;

    const isMobile = window.innerWidth < 768;

    // Animate timeline line growth
    const tl = gsap.timeline();
    // Animate line growth
    tl.to(lineRef.current, {
      height: "100%",
      duration: 1,
      ease: "power2.inOut",
    });

    // Animate timeline items on scroll
    const itemObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.findIndex(
              (ref) => ref === entry.target
            );
            const correspondingNode = nodeRefs.current[index];

            // Animate timeline item - simpler animation for mobile
            gsap.fromTo(
              entry.target,
              {
                opacity: 0,
                y: isMobile ? 30 : 0,
                x: isMobile ? 0 : index % 2 === 0 ? -50 : 50,
              },
              {
                opacity: 1,
                y: 0,
                x: 0,
                duration: 0.6,
                ease: "power2.out",
              }
            );

            // Animate corresponding node icon at the same time
            if (correspondingNode) {
              gsap.to(correspondingNode, {
                opacity: 1,
                duration: 0.6,
                ease: "power2.out",
              });
            }

            itemObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: isMobile ? 0.1 : 0.3 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) itemObserver.observe(ref);
    });

    return () => {
      itemObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={timelineRef}
      className="w-full max-w-[1200px] mx-auto px-4 py-8 md:py-16 relative"
      data-timeline-container
    >
      <div className="relative">
        {/* Vertical timeline line - animated only */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full">
          <div
            ref={lineRef}
            className="absolute top-0 left-0 w-full bg-white h-0 transition-all"
            style={{ height: "0%" }}
          />
        </div>

        {/* Timeline items */}
        <div className="space-y-12 md:space-y-16">
          {timelineItems.map((item, index) => {
            const isLeft = index % 2 === 0;
            const Icon = item.type === "education" ? GraduationCap : Briefcase;

            return (
              <div
                key={item.id}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className={`relative flex items-center ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >
                {/* Timeline node */}
                <div
                  ref={(el) => {
                    nodeRefs.current[index] = el;
                  }}
                  className="absolute left-2.5 md:left-1/2 transform md:-translate-x-1/2 z-10"
                  style={{ opacity: 0 }}
                >
                  <div className="w-4 h-4 bg-white rounded-full border-2 border-gray-400 flex items-center justify-center">
                    <Icon className="w-3 h-3 text-gray-400" />
                  </div>
                </div>

                {/* Date - desktop only (absolute positioned) */}
                <div
                  className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 ${
                    isLeft ? "translate-x-20" : "-translate-x-60"
                  } text-raleway text-sm text-white/80 whitespace-nowrap top-1/2 -translate-y-1/2`}
                >
                  {item.date}
                </div>

                {/* Content box */}
                <div
                  className={`w-[calc(100%-3rem)] md:w-[45%] ml-12 md:ml-0 ${
                    isLeft ? "md:pr-[10%]" : "md:pl-[10%]"
                  }`}
                >
                  <div className="border border-gray-400 rounded-lg p-4 md:p-6 bg-black/50 backdrop-blur-sm">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-raleway text-lg md:text-xl font-bold text-white">
                        {item.title}
                      </h3>
                      {/* Date - mobile only (inside component) */}
                      <p className="text-raleway text-xs text-white/80 md:hidden mt-1">
                        {item.date}
                      </p>
                    </div>
                    <p className="text-raleway text-xs md:text-sm text-white/80 mb-3 md:mb-4">
                      {item.location}
                    </p>
                    {Array.isArray(item.description) ? (
                      <ul className="text-raleway text-sm md:text-base text-white/90 space-y-2 list-disc list-inside">
                        {item.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-raleway text-sm md:text-base text-white/90">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
