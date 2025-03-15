"use client";

import React from "react";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";


export default function TracingBeamDemo() {
  return (
  <div className="mt-10 ">
    <p className="text-2xl text-center sm:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Why Choose Us
      </p>
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className={twMerge("font-bold", "text-xl mb-4")}>
              {item.title}
            </p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam></div>
  );
}

const dummyContent = [
  {
    title: 'Discover Your Sound with Us: A Personal Journey in Music Mastery',
    description: (
      <>
        <p>
        &apos;Embark on a musical journey that&apos;s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.&apos;

        </p>
    
      </>
    ),
    badge: "Musical Journey",
    image:
      "/d1.jpg"
  },
  {
    title: 'Live Feedback & Engagement',
    description: (
      <>
        <p>
        &apos;Immerse yourself in an interactive learning experience where feedback is immediate, just like real-time changes in a collaborative project. This approach enhances your understanding and mastery of music concepts and performance techniques.&apos;,

        </p>
        
      </>
    ),
    badge: "Live Feedback",
    image:
      "/d2.svg"
  },
  {
    title: 'Cutting-Edge Curriculum',
    description: (
      <>
        <p> &apos;Our curriculum is continuously updated to include the latest music education trends and technologies&apos; ensuring you&apos;re always learning with the most current and effective methods. Say goodbye to outdated materials and welcome an education that evolves with the industry.&apos;
        
        </p>
      </>
    ),
    badge: "Curriculum Update",
    image:
      "/d3.svg",
  },
  {
    title: 'Limitless Learning Opportunities',
    description: (
      <>
        <p>  &apos;With our expansive resource library and dynamic course offerings, you&apos;ll never find yourself without something new to explore. Our platform provides continuous opportunities for growth&apos; ensuring your musical skills are always advancing.&apos;
        
        </p>
      </>
    ),
    badge: "Learning Opportunities",
    image:
      "/id1.svg",
  },
];
