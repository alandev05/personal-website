"use client";
import { useState } from "react";
import Image from "next/image";
import { Volume2, VolumeX } from "lucide-react";
import dynamic from "next/dynamic";

const FboAnimation = dynamic(() => import("../../components/FboAnimation"), {
  ssr: false,
});

type AquascapeProps = {
  audioRef?: React.RefObject<HTMLAudioElement | null>;
};

export default function Aquascape({ audioRef }: AquascapeProps) {
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    if (audioRef?.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  return (
    <div className="w-[1200px] h-[412px] relative">
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
        className="absolute inset-0 z-0 w-[1200px] h-[412px]"
        key="fbo-animation"
      >
        <FboAnimation />
      </div>
    </div>
  );
}
