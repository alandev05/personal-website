"use client";

type NameSectionProps = {
  onProjectsClick: () => void;
};

export default function NameSection({ onProjectsClick }: NameSectionProps) {
  return (
    <div className="w-full max-w-[1200px] flex flex-col sm:flex-row items-center justify-center sm:justify-evenly gap-4 sm:gap-0 px-4">
      <div className="text-raleway text-xl sm:text-2xl md:text-3xl text-white">alan nguyen</div>
      <button className="text-raleway text-xl sm:text-2xl md:text-3xl text-white hover:opacity-80 transition-opacity cursor-pointer">
        about
      </button>
      <button
        onClick={onProjectsClick}
        className="text-raleway text-xl sm:text-2xl md:text-3xl text-white hover:opacity-80 transition-opacity cursor-pointer"
      >
        projects
      </button>
      <button className="text-raleway text-xl sm:text-2xl md:text-3xl text-white hover:opacity-80 transition-opacity cursor-pointer">
        experience
      </button>
    </div>
  );
}
