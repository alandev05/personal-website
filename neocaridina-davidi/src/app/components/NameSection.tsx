"use client";
import Link from "next/link";

export default function NameSection() {
  return (
    <div className="w-[1200px] flex items-center justify-evenly">
      <div className="text-raleway text-3xl text-white">alan nguyen</div>
      <button className="text-raleway text-3xl text-white hover:opacity-80 transition-opacity">
        about
      </button>
      <Link
        href="/projects"
        className="text-raleway text-3xl text-white hover:opacity-80 transition-opacity"
      >
        projects
      </Link>
      <button className="text-raleway text-3xl text-white hover:opacity-80 transition-opacity">
        experience
      </button>
    </div>
  );
}
