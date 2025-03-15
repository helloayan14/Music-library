"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";

export default function Meetinstruct() {
    return (
    <div className="relative h-[50rem] overflow-hidden flex items-center justify-center">
    <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full ">
    <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
    Meet Our Instructors
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
    who will guide you on your musical journey
      </p>

      <div className="flex flex-row items-center justify-center mt-15 w-full">
      <AnimatedTooltip items={people} />
    </div>

    </WavyBackground></div>
  );
}

const people = [
    {
      id: 1,
      name: "Alice Harmon",
      designation: "Piano Instructor",
      image: "/iid1.jpg",
  
    },
    {
      id: 2,
      name: "Michael Stone",
      designation: "Guitar Instructor",
      image: "/iid2.jpg",
    },
    {
      id: 3,
      name: "Samantha Lee",
      designation: "Vocal Coach",
      image: "/iid3.jpg",
    },
    {
      id: 4,
      name: "David Carter",
      designation: "Drums Instructor",
      image: "/iid4.jpg",
    },
    {
      id: 5,
      name: "Olivia Reynolds",
      designation: "Violin Instructor",
      image: "/iid5.jpg",
    },
    {
      id: 6,
      name: "Ethan Brooks",
      designation: "Music Theory Expert",
      image: "/iid6.jpg",
    },
  ];
  
