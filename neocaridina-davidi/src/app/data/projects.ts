export type MediaItem = {
  type: "image" | "video";
  src: string;
  alt?: string;
  title?: string;
};

export type ProjectData = {
  name: string;
  tagline?: string;
  description: string;
  mediaItems: MediaItem[];
  contributors?: Array<{ name: string; linkedin?: string }>;
  links?: {
    github?: string;
    demo?: string;
    website?: string;
  };
  awards?: string;
};

export const PROJECT_DATA: Record<string, ProjectData> = {
  "discer.io": {
    name: "discer.io",
    tagline: "It's like Scratch, but for AI agents",
    description:
      "An interactive platform that teaches agentic AI with guided experiential learning and a creative multiplayer game.",
    mediaItems: [
      {
        type: "video",
        src: "https://www.youtube.com/embed/0r1ZjDX3WjM",
        title: "Discerio project video",
      },
      {
        type: "image",
        src: "/draft.jpg",
        alt: "Discerio project draft",
      },
    ],
    contributors: [
      { name: "Alan Nguyen", linkedin: "https://www.linkedin.com/in/alan-nguyen" },
      { name: "Lucas Kim", linkedin: "https://www.linkedin.com/in/lucaskim65/" },
      { name: "Roman Slack", linkedin: "https://www.linkedin.com/in/roman-slack-a91a6a266/" },
      { name: "Koushik Sarkar", linkedin: "https://www.linkedin.com/in/koushik-sarkar-5280a3253/" },
    ],
    links: {
      github: "https://github.com/RomanSlack/Discerio",
      demo: "https://devpost.com/software/discer-io",
      website: "https://www.discerio.tech/",
    },
    awards: "Best Use of Dedalus, YC x HackPrinceton Challenge - HackPrinceton Fall 2025",
  },
  capitalx: {
    name: "capitalx",
    tagline: "AI-powered credit card optimization",
    description:
      "An AI-powered mobile platform that maximizes credit card rewards through intelligent card optimization.",
    mediaItems: [
      {
        type: "video",
        src: "https://www.youtube.com/embed/w17OE9qXFHc",
        title: "capitalX project video",
      },
    ],
    contributors: [
      { name: "Alan Nguyen", linkedin: "https://www.linkedin.com/in/alan-nguyen" },
      { name: "Lucas Kim", linkedin: "https://www.linkedin.com/in/lucaskim65/" },
      { name: "Aarush Japtap", linkedin: "https://www.linkedin.com/in/aarushj/" },
      { name: "Aadit Krishna", linkedin: "https://www.linkedin.com/in/aaditkrishna/" },
    ],
    links: {
      github: "https://github.com/alandev05/capitalX",
      demo: "https://devpost.com/software/capitalx",
    },
    awards: "Best Use of Expo, Best Use of LLMs - HackPrinceton Spring 2025",
  },
  "donor-uplift": {
    name: "donor-uplift",
    description: "A platform for donor management and engagement.",
    mediaItems: [
      {
        type: "image",
        src: "/du.png",
        alt: "Donor Uplift project",
      },
    ],
    awards: "1st Place - Highest Operating Surplus - SAS Hackathon 2025",
  },
  feelcast: {
    name: "feelcast",
    tagline: "Intelligent employee wellness platform",
    description:
      "An intelligent employee wellness platform that transforms how healthcare organizations monitor staff wellbeing.",
    mediaItems: [
      {
        type: "image",
        src: "/feelcast.png",
        alt: "FeelCast project",
      },
    ],
    awards: "Finalist - Dream AI Hackathon by Founder Institute",
  },
  pparent: {
    name: "pparent",
    tagline: "AI-powered parenting planner",
    description: "An app to help parents with their personalized journeys.",
    mediaItems: [
      {
        type: "image",
        src: "/pp1.PNG",
        alt: "Planning Parenthood project",
      },
      {
        type: "image",
        src: "/pp2.PNG",
        alt: "Planning Parenthood project 2",
      },
    ],
    contributors: [
      { name: "Alan Nguyen", linkedin: "https://www.linkedin.com/in/alan-nguyen" },
      { name: "Vivian Zou", linkedin: "https://www.linkedin.com/in/vivianzou1/" },
      { name: "Sydney Du", linkedin: "https://www.linkedin.com/in/sydney-du-1ab7b635b/" },
      { name: "Meryl Zhang" },
    ],
    links: {
      github: "https://github.com/alandev05/PlanningParenthood",
      demo: "https://plume.hackmit.org/project/bxbve-fqwex-bxdav-osimy",
    },
  },
};

