"use client";
import { HoverEffect } from "./ui/card-hover-effect";
export default function Webinars() {
    return (
        <div className="h-[50rem]  rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid items-center justify-center relative overflow-hidden py-15">
         <p className="text-2xl sm:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 ">
                Webinars
            </p>
         <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
         <div className="max-w-5xl mx-auto px-10 ">
      <HoverEffect items={projects} />
    </div>
        </div>
    );
}

export const projects = [
    {
      title: "Mastering Jazz Improvisation",
      description:
        "Discover advanced techniques to elevate your jazz improvisation skills with expert guidance.",
      link: "/courses/mastering-jazz-improvisation",
    },
    {
      title: "Vocal Techniques for Singers",
      description:
        "Learn how to enhance your vocal range, control, and tone with professional singing exercises.",
      link: "/courses/vocal-techniques-for-singers",
    },
    {
      title: "The Art of Fingerstyle Guitar",
      description:
        "Explore intricate fingerpicking techniques and develop your own unique acoustic guitar style.",
      link: "/courses/the-art-of-fingerstyle-guitar",
    },
    {
      title: "Music Production Essentials",
      description:
        "Get hands-on experience with digital audio workstations (DAWs) and produce high-quality music tracks.",
      link: "/courses/music-production-essentials",
    },
    {
      title: "Piano Mastery for Beginners",
      description:
        "Build a strong foundation in piano playing with essential techniques and structured lessons.",
      link: "/courses/piano-mastery-for-beginners",
    },
    {
      title: "Rhythm & Groove: Drumming Workshop",
      description:
        "Develop a solid sense of rhythm and groove through expert drumming techniques and exercises.",
      link: "/courses/rhythm-and-groove-drumming-workshop",
    },
  ];
  