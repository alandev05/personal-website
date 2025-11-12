"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import type { LucideIcon } from "lucide-react";
import { Linkedin, Github, Mail, Phone, FileUser } from "lucide-react";
import Aquascape from "./components/Aquascape";
import NameSection from "./components/NameSection";
import ProjectsSection from "./components/ProjectsSection";

type IconKey = "Linkedin" | "Github" | "Mail" | "Phone" | "FileUser";

type IconItem = {
  key: IconKey;
  icon: LucideIcon;
  color?: string;
  size?: string;
  ariaLabel: string;
};

const ICON_LINKS: Record<IconKey, { href: string; download?: string }> = {
  Linkedin: { href: "https://www.linkedin.com/in/alandoannguyen/" },
  Github: { href: "https://github.com/alandev05" },
  Mail: { href: "mailto:nguyen.ala@northeastern.edu" },
  Phone: { href: "tel:+15086854361" },
  FileUser: {
    href: "/files/alan_nguyen_resume.pdf",
    download: "alan_nguyen_resume.pdf",
  },
};

// Easy-to-modify icon list (style per icon if you want)
const ICON_LIST: IconItem[] = [
  { key: "Linkedin", icon: Linkedin, ariaLabel: "my linkedin" },
  { key: "Github", icon: Github, ariaLabel: "my github" },
  { key: "FileUser", icon: FileUser, ariaLabel: "download resume" },
  {
    key: "Mail",
    icon: Mail,
    color: "text-theme-gray",
    ariaLabel: "send email",
  },
  {
    key: "Phone",
    icon: Phone,
    color: "text-theme-gray",
    ariaLabel: "call me",
  },
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showProjects, setShowProjects] = useState(false);
  const nameRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const loadingNameRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleLoadingClick = () => {
    // Disable pointer events immediately to prevent blocking clicks
    if (loadingNameRef.current?.parentElement) {
      loadingNameRef.current.parentElement.style.pointerEvents = "none";
    }

    // Fade out loading screen
    if (loadingNameRef.current) {
      gsap.to(loadingNameRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => {
          setIsLoading(false);
          // Fade in main content and name with smooth animation
          const tl = gsap.timeline();

          if (contentRef.current) {
            gsap.set(contentRef.current, { opacity: 0 });
            tl.to(contentRef.current, {
              opacity: 1,
              duration: 0.8,
              ease: "power2.out",
            });
          }

          if (nameRef.current) {
            gsap.set(nameRef.current, { opacity: 0 });
            tl.to(
              nameRef.current,
              {
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
              },
              0
            );
          }

          // Fade in mobile icons
          const mobileIcons = document.querySelector(
            '[class*="flex md:hidden flex-row gap-3"]'
          );
          if (mobileIcons) {
            gsap.set(mobileIcons, { opacity: 0 });
            tl.to(
              mobileIcons,
              {
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
              },
              "-=0.6"
            );
          }
        },
      });
    } else {
      setIsLoading(false);
      // Fade in main content and name with smooth animation
      const tl = gsap.timeline();

      if (contentRef.current) {
        gsap.set(contentRef.current, { opacity: 0 });
        tl.to(contentRef.current, {
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        });
      }

      if (nameRef.current) {
        gsap.set(nameRef.current, { opacity: 0 });
        tl.to(
          nameRef.current,
          {
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          0
        );
      }

      // Fade in mobile icons
      const mobileIcons = document.querySelector(
        '[class*="flex md:hidden flex-row gap-3"]'
      );
      if (mobileIcons) {
        gsap.set(mobileIcons, { opacity: 0 });
        tl.to(
          mobileIcons,
          {
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.6"
        );
      }
    }
  };

  useEffect(() => {
    if (isLoading) return; // Don't start audio until loading is done

    // Play ambient audio after loading
    // Place your audio file at: /public/sounds/intro.mp3
    const audio = new Audio("/sounds/intro.mp3");
    audio.autoplay = true;
    audio.muted = false;
    audio.loop = true;
    audio.volume = 0.1; // Set volume directly, no fade
    audioRef.current = audio; // Store in ref for cleanup

    audio.play().catch(() => console.log("Autoplay blocked"));

    // Animate dots after content is shown
    setTimeout(() => {
      const dotContainers = document.querySelectorAll(
        '[aria-hidden="true"][class*="inline-block"]'
      );

      dotContainers.forEach((container) => {
        const dots = container.querySelectorAll("span");
        if (dots.length === 0) return;

        const tl = gsap.timeline({ repeat: -1 });

        tl.to(dots, {
          opacity: 0,
          duration: 0.3,
          stagger: 0.2,
          ease: "power2.inOut",
        }).to(dots, {
          opacity: 1,
          duration: 0.3,
          stagger: 0.2,
          ease: "power2.inOut",
        });
      });
    }, 500);

    // Cleanup function
    return () => {
      gsap.killTweensOf('[aria-hidden="true"][class*="inline-block"] span');
      // Cleanup audio on unmount
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
        audioRef.current = null;
      }
    };
  }, [isLoading]);

  const handleProjectsClick = () => {
    setShowProjects(true);
    // Wait for DOM to update, then animate
    setTimeout(() => {
      if (nameRef.current && projectsRef.current) {
        // Set initial position for ProjectsSection
        gsap.set(projectsRef.current, { x: 1200, opacity: 0 });

        const tl = gsap.timeline();
        tl.to(nameRef.current, {
          x: -1200,
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
        }).to(
          projectsRef.current,
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.inOut",
          },
          0
        );
      }
    }, 0);
  };

  const handleProjectsClose = (direction: "left" | "right" = "left") => {
    if (nameRef.current && projectsRef.current) {
      if (direction === "left") {
        // Animate: slide ProjectsSection out to right, NameSection in from left
        gsap.set(nameRef.current, { x: -1200, opacity: 0 });

        const tl = gsap.timeline({
          onComplete: () => {
            setShowProjects(false);
            if (nameRef.current) {
              gsap.set(nameRef.current, { x: 0 });
            }
          },
        });
        tl.to(projectsRef.current, {
          x: 1200,
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
        }).to(
          nameRef.current,
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.inOut",
          },
          0
        );
      } else {
        // Animate: slide ProjectsSection out to left, NameSection in from right
        gsap.set(nameRef.current, { x: 1200, opacity: 0 });

        const tl = gsap.timeline({
          onComplete: () => {
            setShowProjects(false);
            if (nameRef.current) {
              gsap.set(nameRef.current, { x: 0 });
            }
          },
        });
        tl.to(projectsRef.current, {
          x: -1200,
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
        }).to(
          nameRef.current,
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.inOut",
          },
          0
        );
      }
    } else {
      setShowProjects(false);
    }
  };

  const getTarget = (href: string) => {
    // External links -> open new tab. Mail/tel/internal -> same tab.
    if (href.startsWith("http")) return "_blank";
    return "_self";
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {/* Loading Screen */}
      {isLoading && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black cursor-pointer"
          onClick={handleLoadingClick}
        >
          <div
            ref={loadingNameRef}
            className="text-raleway text-4xl text-white hover:opacity-80 transition-opacity"
          >
            alan nguyen
          </div>
        </div>
      )}

      {/* Main content - hidden during loading */}
      <div ref={contentRef} className="relative" style={{ opacity: 0 }}>
        <div ref={imageRef}>
          <Aquascape audioRef={audioRef} />
        </div>

        {/* Icons - hidden on mobile, shown on desktop */}
        <div className="hidden md:flex absolute bottom-5 right-5 flex-row gap-4 z-30">
          {ICON_LIST.map(({ key, icon: Icon, color, size, ariaLabel }) => {
            const link = ICON_LINKS[key];
            return (
              <div
                key={key}
                className={`${color ?? "text-theme-gray"} ${
                  size ?? "w-4 h-4"
                } hover:scale-110 transition-transform relative z-30`}
              >
                <div className="group flex flex-col items-center">
                  <a
                    href={link.href}
                    target={getTarget(link.href)}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    // Only render download when provided
                    download={link.download ?? undefined}
                    aria-label={ariaLabel}
                    className="relative z-30 pointer-events-auto"
                  >
                    <Icon className="w-full h-full" />
                  </a>
                  <span className="mt-4 text-raleway text-xs text-theme-gray opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {ariaLabel}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Icons - shown on mobile, hidden on desktop */}
      <div
        className="flex md:hidden flex-row gap-3 mt-3 relative z-30"
        style={{ opacity: 0 }}
      >
        {ICON_LIST.map(({ key, icon: Icon, color, size, ariaLabel }) => {
          const link = ICON_LINKS[key];
          return (
            <div
              key={key}
              className={`${color ?? "text-theme-gray"} ${
                size ?? "w-4 h-4"
              } hover:scale-110 transition-transform relative z-30`}
            >
              <div className="group flex flex-col items-center">
                <a
                  href={link.href}
                  target={getTarget(link.href)}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  // Only render download when provided
                  download={link.download ?? undefined}
                  aria-label={ariaLabel}
                  className="relative z-30 pointer-events-auto"
                >
                  <Icon className="w-full h-full" />
                </a>
                <span className="mt-2 text-raleway text-xs text-theme-gray opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {ariaLabel}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Name section and Projects section container */}
      <div className="mt-6 relative w-[1200px] min-h-[48px] overflow-visible">
        {/* Name section */}
        <div ref={nameRef} style={{ opacity: 0 }}>
          <NameSection onProjectsClick={handleProjectsClick} />
        </div>
        {/* Projects section - positioned to the right, hidden initially */}
        {showProjects && (
          <div
            ref={projectsRef}
            className="absolute top-0 left-0 w-full"
            style={{ opacity: 0 }}
          >
            <ProjectsSection onClose={handleProjectsClose} />
          </div>
        )}
      </div>
    </div>
  );
}
