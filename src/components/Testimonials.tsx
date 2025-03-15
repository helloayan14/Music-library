"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid items-center justify-center relative overflow-hidden py-10">
     <p className="text-2xl sm:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Testimonials
      </p>
     <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
       
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
    {
      quote:
        "This course transformed my playing! The structured lessons and expert guidance helped me master complex pieces effortlessly.",
      name: "John Doe",
      title: "Piano Virtuoso",
    },
    {
      quote:
        "The guitar techniques taught here are simply outstanding! I went from struggling with chords to playing full songs confidently.",
      name: "Emily Carter",
      title: "Guitar Enthusiast",
    },
    {
      quote:
        "Understanding music theory has never been easier. I now compose my own melodies with confidence thanks to this course!",
      name: "Michael Smith",
      title: "Music Theory Expert",
    },
    {
      quote:
        "I always struggled with singing on pitch, but the vocal training exercises in this course improved my voice beyond my expectations!",
      name: "Sophia Lee",
      title: "Vocal Coach",
    },
    {
      quote:
        "From basic drum patterns to complex rhythms, this course gave me all the tools I needed to become a skilled drummer.",
      name: "Daniel Ross",
      title: "Professional Drummer",
    },
  ];
  
