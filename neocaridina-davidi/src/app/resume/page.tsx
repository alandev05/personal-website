"use client";
import TopNav from "../components/TopNav";
import { useEffect, useState } from "react";

export default function ResumePage() {
  const [isMobile, setIsMobile] = useState(false);
  const [embedHeight, setEmbedHeight] = useState(700);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setEmbedHeight(
        mobile ? window.innerHeight - 80 : window.innerHeight - 100
      );
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const zoomLevel = isMobile ? 45 : 75;

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <TopNav />

      {/* PDF Viewer */}
      <div className="flex-1 w-full px-2 sm:px-4 pb-2 sm:pb-4 flex items-center justify-center">
        <div className="w-full max-w-[1200px]">
          <embed
            key={isMobile ? "mobile" : "desktop"}
            src={`/files/alan_nguyen_resume.pdf#zoom=${zoomLevel}`}
            type="application/pdf"
            width="100%"
            height={embedHeight}
          />
        </div>
      </div>
    </div>
  );
}
