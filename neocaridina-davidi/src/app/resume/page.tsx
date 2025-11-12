"use client";
import TopNav from "../components/TopNav";
import { useEffect, useState } from "react";

export default function ResumePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const zoomLevel = isMobile ? 45 : 75;
  const heightOffset = isMobile ? 80 : 100;

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <TopNav />

      {/* PDF Viewer */}
      <div className="flex-1 w-full px-2 sm:px-4 pb-2 sm:pb-4 flex items-center justify-center">
        <div className="w-full max-w-[1200px] h-full">
          <iframe
            key={isMobile ? "mobile" : "desktop"}
            src={`/files/alan_nguyen_resume.pdf#view=FitH&zoom=${zoomLevel}`}
            className="w-full h-full border-0"
            title="Alan Nguyen Resume"
            style={{
              minHeight: `calc(100vh - ${heightOffset}px)`,
              height: `calc(100vh - ${heightOffset}px)`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
