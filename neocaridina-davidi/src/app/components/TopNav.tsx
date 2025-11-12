"use client";
import Link from "next/link";

export default function TopNav() {
  return (
    <div className="w-full flex justify-center py-6">
      <Link
        href="/"
        className="text-raleway text-3xl text-white hover:opacity-80 transition-opacity"
      >
        alan nguyen
      </Link>
    </div>
  );
}

