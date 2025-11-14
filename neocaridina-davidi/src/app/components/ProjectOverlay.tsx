"use client";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Github,
  ExternalLink,
  Globe,
  Trophy,
} from "lucide-react";
import { ProjectData } from "../data/projects";

type ProjectOverlayProps = {
  project: ProjectData | null;
  onClose: () => void;
};

export default function ProjectOverlay({
  project,
  onClose,
}: ProjectOverlayProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClosing, setIsClosing] = useState(false);
  const [displayProject, setDisplayProject] = useState<ProjectData | null>(
    null
  );
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      project &&
      overlayRef.current &&
      contentRef.current &&
      backdropRef.current
    ) {
      setIsClosing(false);
      setDisplayProject(project);
      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        if (overlayRef.current && contentRef.current && backdropRef.current) {
          // Slide in from right
          gsap.set(overlayRef.current, { x: "100%" });
          gsap.set(contentRef.current, { opacity: 0 });
          gsap.set(backdropRef.current, { opacity: 0 });

          const tl = gsap.timeline();
          tl.to(backdropRef.current, {
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
          })
            .to(
              overlayRef.current,
              {
                x: 0,
                duration: 0.35,
                ease: "power2.out",
              },
              "-=0.2"
            )
            .to(
              contentRef.current,
              {
                opacity: 1,
                duration: 0.3,
                ease: "power2.out",
              },
              "-=0.2"
            );
        }
      });
    } else if (
      !project &&
      displayProject &&
      overlayRef.current &&
      contentRef.current &&
      backdropRef.current &&
      !isClosing
    ) {
      // Slide out to right with fade
      setIsClosing(true);
      const tl = gsap.timeline({
        onComplete: () => {
          setCurrentIndex(0);
          setIsClosing(false);
          setDisplayProject(null);
        },
      });
      tl.to(contentRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
      })
        .to(
          overlayRef.current,
          {
            x: "100%",
            duration: 0.35,
            ease: "power2.in",
          },
          "-=0.1"
        )
        .to(
          backdropRef.current,
          {
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
          },
          "-=0.3"
        );
    }
  }, [project, displayProject, isClosing]);

  // Render if project is set (opening) or displayProject exists (open/closing)
  if (!project && !displayProject && !isClosing) return null;

  // Use displayProject which persists during closing animation, fallback to project
  const activeProject = displayProject || project;
  const currentMedia = activeProject?.mediaItems[currentIndex];

  const goToPrevious = () => {
    if (activeProject) {
      setCurrentIndex((prev) =>
        prev === 0 ? activeProject.mediaItems.length - 1 : prev - 1
      );
    }
  };

  const goToNext = () => {
    if (activeProject) {
      setCurrentIndex((prev) =>
        prev === activeProject.mediaItems.length - 1 ? 0 : prev + 1
      );
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        ref={backdropRef}
        className="fixed inset-0 bg-black/50 z-[100]"
        onClick={onClose}
      />

      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed top-0 right-0 h-full w-full md:w-[600px] lg:w-[800px] bg-black z-[101] overflow-y-auto"
      >
        <div ref={contentRef} className="p-8">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:opacity-80 transition-opacity z-10 cursor-pointer"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Content */}
          {activeProject && (
            <div className="max-w-[1200px] mx-auto">
              {/* Title */}
              <h1 className="text-raleway text-3xl md:text-4xl font-bold mb-2">
                {activeProject.name}
              </h1>
              {activeProject.tagline && (
                <p className="text-raleway text-lg text-white/80 mb-6">
                  {activeProject.tagline}
                </p>
              )}

              {/* Carousel */}
              <div className="mb-8">
                <div className="relative w-full aspect-[4/3] bg-gray-800 rounded-lg overflow-hidden">
                  {currentMedia && currentMedia.type === "video" ? (
                    <iframe
                      key={currentIndex}
                      src={currentMedia.src}
                      title={currentMedia.title || "Video"}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  ) : currentMedia ? (
                    <Image
                      key={currentIndex}
                      src={currentMedia.src}
                      alt={currentMedia.alt || "Image"}
                      fill
                      className="object-cover"
                    />
                  ) : null}
                </div>
                {/* Navigation arrows */}
                {activeProject.mediaItems.length > 1 && (
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

              {/* Description */}
              <div className="mb-8">
                <p className="text-raleway text-base leading-relaxed text-white/90">
                  {activeProject.description}
                </p>
              </div>

              {/* Awards */}
              {activeProject.awards && (
                <div className="mb-8 flex items-start gap-3">
                  <Trophy className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <p className="text-raleway text-base text-white/80">
                    {activeProject.awards}
                  </p>
                </div>
              )}

              {/* Links */}
              {activeProject.links && (
                <div className="mb-8 flex flex-wrap gap-4">
                  {activeProject.links.github && (
                    <a
                      href={activeProject.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-raleway text-base text-white hover:opacity-80 transition-opacity"
                    >
                      <Github className="w-5 h-5" />
                      GitHub
                    </a>
                  )}
                  {activeProject.links.demo && (
                    <a
                      href={activeProject.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-raleway text-base text-white hover:opacity-80 transition-opacity"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Demo
                    </a>
                  )}
                  {activeProject.links.website && (
                    <a
                      href={activeProject.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-raleway text-base text-white hover:opacity-80 transition-opacity"
                    >
                      <Globe className="w-5 h-5" />
                      Website
                    </a>
                  )}
                </div>
              )}

              {/* Contributors */}
              {activeProject.contributors &&
                activeProject.contributors.length > 0 && (
                  <div className="mb-8">
                    <h2 className="text-raleway text-xl font-bold mb-4">
                      Contributors
                    </h2>
                    <div className="flex flex-wrap gap-4">
                      {activeProject.contributors.map((contributor, index) => (
                        <div key={index}>
                          {contributor.linkedin ? (
                            <a
                              href={contributor.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-raleway text-base text-white hover:opacity-80 transition-opacity underline"
                            >
                              {contributor.name}
                            </a>
                          ) : (
                            <span className="text-raleway text-base text-white">
                              {contributor.name}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {/* Direct link to full page */}
              <div className="pt-4 border-t border-gray-700">
                <a
                  href={`/projects/${
                    activeProject.name === "discer.io"
                      ? "discerio"
                      : activeProject.name === "capitalx"
                      ? "capitalX"
                      : activeProject.name === "donor-uplift"
                      ? "donor-uplift"
                      : activeProject.name === "feelcast"
                      ? "feelcast"
                      : activeProject.name === "pparent"
                      ? "planningparenthood"
                      : activeProject.name.toLowerCase().replace(/\s+/g, "")
                  }`}
                  className="text-raleway text-sm text-white/60 hover:text-white/80 transition-colors underline"
                >
                  View full page →
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
