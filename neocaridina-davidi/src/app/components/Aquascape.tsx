"use client";
import { useState } from "react";
import Image from "next/image";
import { Volume2, VolumeX } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import dynamic from "next/dynamic";

const FboAnimation = dynamic(() => import("../../components/FboAnimation"), {
  ssr: false,
});

type IconItem = {
  key: string;
  icon: LucideIcon;
  color?: string;
  size?: string;
  ariaLabel: string;
};

type IconLink = {
  href: string;
  download?: string;
};

type AquascapeProps = {
  audioRef?: React.RefObject<HTMLAudioElement | null>;
  iconList?: IconItem[];
  iconLinks?: Record<string, IconLink>;
  getTarget?: (href: string) => string;
};

export default function Aquascape({ audioRef, iconList, iconLinks, getTarget }: AquascapeProps) {
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    if (audioRef?.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  return (
    <div className="w-full max-w-[1200px] h-[150px] sm:h-[300px] md:h-[412px] relative mx-auto">
      {/* Volume toggle - top left */}
      <div className="hidden md:flex absolute top-5 left-5 z-30">
        <button
          onClick={toggleMute}
          className="text-theme-gray w-4 h-4 hover:scale-110 transition-transform cursor-pointer"
          aria-label={isMuted ? "Unmute audio" : "Mute audio"}
        >
          {isMuted ? (
            <VolumeX className="w-full h-full" />
          ) : (
            <Volume2 className="w-full h-full" />
          )}
        </button>
      </div>

      {/* Icons - hidden on mobile, shown on desktop */}
      {iconList && iconLinks && getTarget && (
        <div className="hidden md:flex absolute bottom-5 right-5 flex-row gap-4 z-30">
          {iconList.map(({ key, icon: Icon, color, size, ariaLabel }) => {
            const link = iconLinks[key];
            if (!link) return null;
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
      )}

      {/* Aquascape Image behind */}
      <div className="absolute inset-0 z-20 w-full h-full">
        <Image
          src="/aquascape.png"
          alt=""
          fill
          className="object-contain"
          priority
        />
      </div>
      {/* FBO Animation in front */}
      <div
        className="absolute inset-0 z-0 w-full h-full"
        key="fbo-animation"
      >
        <FboAnimation />
      </div>
    </div>
  );
}
