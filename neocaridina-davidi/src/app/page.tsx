"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import type { LucideIcon } from "lucide-react";
import { Linkedin, Github, Mail, Phone, FileUser } from "lucide-react";

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
    size: "w-4 h-4",
    ariaLabel: "send email",
  },
  {
    key: "Phone",
    icon: Phone,
    color: "text-theme-gray",
    size: "w-4 h-4",
    ariaLabel: "call me",
  },
];

export default function Home() {
  const dotsRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!dotsRef.current) return;
    const dots = dotsRef.current.querySelectorAll("span");
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

    // (No cleanup needed for infinite loop; add tl.kill() on unmount if you later change repeat)
  }, []);

  const getTarget = (href: string) => {
    // External links -> open new tab. Mail/tel/internal -> same tab.
    if (href.startsWith("http")) return "_blank";
    return "_self";
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="relative">
        <Image
          src="/aquascape_features.svg"
          alt=""
          width={300}
          height={300}
          className="max-w-6xl w-full h-auto"
          priority
        />

        <div className="absolute bottom-3 right-4 text-raleway text-theme-gray text-sm font-medium px-2 py-1 rounded">
          building
          <span ref={dotsRef} aria-hidden="true" className="inline-block pl-1">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </div>

        <div className="absolute bottom-5 left-5 flex flex-row gap-4">
          {ICON_LIST.map(({ key, icon: Icon, color, size, ariaLabel }) => {
            const link = ICON_LINKS[key];
            return (
              <div
                key={key}
                className={`${color ?? "text-theme-gray"} ${
                  size ?? "w-4 h-4"
                } hover:scale-110 transition-transform`}
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

      <div className="text-raleway flex justify-center items-center text-4xl text-white">
        alan nguyen
      </div>
    </div>
  );
}
