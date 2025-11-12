"use client";
import { useState } from "react";
import Image from "next/image";
import TopNav from "../../components/TopNav";

type MediaItem = {
  type: "image" | "video";
  src: string;
  alt?: string;
  title?: string;
};

const mediaItems: MediaItem[] = [
  {
    type: "image",
    src: "/du.png",
    alt: "csv",
  },
];

const contributors = [
  { name: "Alan Nguyen", linkedin: "https://www.linkedin.com/in/alan-nguyen" },
];

export default function DonorUpliftPage() {
  const [currentIndex] = useState(0);

  const currentMedia = mediaItems[currentIndex];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
      <TopNav />
      <div className="w-[1200px] max-w-full p-8">
        {/* Image and text component */}
        <div className="mb-12 flex flex-col md:flex-row gap-8 items-center">
          {/* Carousel on the left */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full aspect-[4/3] bg-gray-800 rounded-lg overflow-hidden">
              {currentMedia.type === "video" ? (
                <iframe
                  key={currentIndex}
                  src={currentMedia.src}
                  title={currentMedia.title || "Video"}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              ) : (
                <Image
                  key={currentIndex}
                  src={currentMedia.src}
                  alt={currentMedia.alt || "Image"}
                  fill
                  className="object-cover"
                />
              )}
            </div>
          </div>

          {/* Text on the right */}
          <div className="w-full md:w-1/2 flex flex-col gap-4 justify-center">
            <div className="flex items-baseline gap-2">
              <div className="text-raleway text-2xl font-bold">
                Donor Uplift
              </div>
            </div>
            <p className="text-raleway text-base leading-relaxed">
              A machine learning algorithm built to learn what donors to contact
              for maximum operating surplus.
            </p>
            <p className="text-raleway text-base leading-relaxed">
              Won SAS Hackathon 2025 (iPad A16)
            </p>
          </div>
        </div>

        {/* Longer text below */}
        <div>
          {/* Contributors - one line above */}
          <div className="flex justify-end mb-2">
            <div className="text-raleway text-base leading-relaxed flex items-center gap-2 flex-wrap">
              {contributors.map((contributor, index) => (
                <span key={contributor.name}>
                  <a
                    href={contributor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity inline-flex items-center gap-1"
                  >
                    {contributor.name}
                  </a>
                  {index < contributors.length - 1 && <span>,</span>}
                </span>
              ))}
            </div>
          </div>
          {/* Discere text */}
          <p className="text-raleway text-base leading-relaxed mb-4">
            Used Python libraries pandas, scikit‑learn, XGBoost for the modeling
            core, a T‑Learner uplift design for causal effect estimation, and a
            profit optimization layer to turn lift into a ranked contact policy
            that maximizes surplus. The preprocessing was powered by a
            ColumnTransformer (one‑hot Education/Woman, numeric passthrough),
            linked to calibrated per‑arm XGBoost classifiers with
            class‑imbalance weighting and early stopping for stability.
          </p>
          <p className="text-raleway text-base leading-relaxed mb-4">
            Can&apos;t release code until winner officially announced
          </p>
          {/* <p className="text-raleway text-base leading-relaxed">
            Additional paragraphs can be added here to provide even more context
            and detail about the project. This section allows for a
            comprehensive overview of the work, including technical details,
            design decisions, and any other relevant information that would help
            viewers understand the project better.
          </p> */}
        </div>
      </div>
    </div>
  );
}
