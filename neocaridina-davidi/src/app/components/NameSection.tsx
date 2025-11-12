"use client";

type NameSectionProps = {
  onProjectsClick: () => void;
};

export default function NameSection({ onProjectsClick }: NameSectionProps) {
  return (
    <div className="w-[1200px] flex items-center justify-evenly">
      <div className="text-raleway text-3xl text-white">alan nguyen</div>
      <button className="text-raleway text-3xl text-white hover:opacity-80 transition-opacity cursor-pointer">
        about
      </button>
      <button
        onClick={onProjectsClick}
        className="text-raleway text-3xl text-white hover:opacity-80 transition-opacity cursor-pointer"
      >
        projects
      </button>
      <button className="text-raleway text-3xl text-white hover:opacity-80 transition-opacity cursor-pointer">
        experience
      </button>
    </div>
  );
}
