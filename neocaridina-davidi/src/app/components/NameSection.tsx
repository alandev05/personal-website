"use client";
import Link from "next/link";

type NameSectionProps = {
  onProjectsClick: () => void;
  onExperienceClick: () => void;
};

export default function NameSection({
  onProjectsClick,
  onExperienceClick,
}: NameSectionProps) {
  return (
    <div className="w-full max-w-[1200px] flex flex-col sm:flex-row items-center justify-center sm:justify-evenly gap-4 sm:gap-0 px-4">
      <div className="text-raleway text-xl sm:text-2xl md:text-3xl text-white">
        alan nguyen
      </div>
      <Link
        href="/about"
        className="text-raleway text-xl sm:text-2xl md:text-3xl text-white hover:opacity-80 transition-opacity cursor-pointer"
      >
        about
      </Link>
      <button
        onClick={onProjectsClick}
        className="text-raleway text-xl sm:text-2xl md:text-3xl text-white hover:opacity-80 transition-opacity cursor-pointer"
      >
        projects
      </button>
      <button
        onClick={onExperienceClick}
        className="text-raleway text-xl sm:text-2xl md:text-3xl text-white hover:opacity-80 transition-opacity cursor-pointer"
      >
        experience
      </button>
    </div>
  );
}
