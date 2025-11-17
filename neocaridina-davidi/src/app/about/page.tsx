"use client";
import TopNav from "../components/TopNav";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
      <TopNav />
      <div className="w-[1200px] max-w-full p-8">
        {/* Main content section */}
        <div className="mb-12 flex flex-col md:flex-row gap-8 items-center">
          {/* Image on the left */}
          <div className="w-full md:w-1/2 mt-8">
            <div className="relative w-full aspect-[4/3] bg-gray-800 rounded-lg overflow-hidden scale-90">
              <Image
                src="/me.jpg"
                alt="Alan Nguyen"
                fill
                className="object-cover"
                style={{ objectPosition: "center 30%" }}
              />
            </div>
          </div>

          {/* Text on the right */}
          <div className="w-full md:w-1/2 flex flex-col gap-4 justify-center">
            <p className="text-raleway text-base leading-relaxed">
              Hi! I&apos;m Alan, and I love building tech that makes an impact.
            </p>
            <p className="text-raleway text-base leading-relaxed">
              I&apos;m currently a third-year Computer Science student at
              Northeastern, and I&apos;m building Ceed AI!
            </p>

            {/* Links section */}
            <div className="flex flex-wrap gap-4 mt-4">
              <a
                href="https://www.linkedin.com/in/alandoannguyen/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-raleway text-base text-white hover:opacity-80 transition-opacity underline"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/alandev05"
                target="_blank"
                rel="noopener noreferrer"
                className="text-raleway text-base text-white hover:opacity-80 transition-opacity underline"
              >
                GitHub
              </a>
              <a
                href="/files/alan_nguyen_resume.pdf"
                download="alan_nguyen_resume.pdf"
                className="text-raleway text-base text-white hover:opacity-80 transition-opacity underline"
              >
                Resume
              </a>
              <a
                href="mailto:nguyen.ala@northeastern.edu"
                className="text-raleway text-base text-white hover:opacity-80 transition-opacity underline"
              >
                Email
              </a>
              <a
                href="tel:+15086854361"
                className="text-raleway text-base text-white hover:opacity-80 transition-opacity underline"
              >
                Phone
              </a>
            </div>
          </div>
        </div>

        {/* Longer text below */}
        <div>
          <p className="text-raleway text-base leading-relaxed mb-4">
            I fell in love with coding earlier this year at my first hackathon -
            HackBrown. It showed me that there was so much that could be done,
            you only have to start.
          </p>
          <p className="text-raleway text-base leading-relaxed mb-4">
            From there, I&apos;ve been at 100%, working on diverse projects
            ranging from AI-powered apps to full-stack web platforms. I love
            solving all of the complex problems that come with turning ideas
            into functional, beautiful solutions.
          </p>
          <p className="text-raleway text-base leading-relaxed mb-4">
            When I&apos;m not coding, you can find me playing volleyball,
            cooking the best food, or taking super aesthetic photos.
          </p>
        </div>
      </div>
    </div>
  );
}
