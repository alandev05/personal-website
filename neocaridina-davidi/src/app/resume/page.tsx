"use client";
import TopNav from "../components/TopNav";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <TopNav />

      {/* PDF Viewer */}
      <div className="flex-1 w-full px-4 pb-4 flex items-center justify-center">
        <div className="w-full max-w-[1200px] h-full">
          <iframe
            src="/files/alan_nguyen_resume.pdf#zoom=75"
            className="w-full h-full border-0"
            title="Alan Nguyen Resume"
            style={{
              minHeight: "calc(100vh - 140px)",
              height: "calc(100vh - 140px)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
