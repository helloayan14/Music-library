'use client'
import Link from "next/link";
import BlurText from "./ui/Blur-text"
import music_courses from "@/data/music_courses.json"
 
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import StarBorder from "./ui/moving-border";

interface Course {
   id:number,
   title:string,
   slug:string,
   description:string,
   price:number,
   instructor:string,
   isFeatured:boolean,
   image:string
}
const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };
export default function FeaturedCourse() {
 const featuredcourse= music_courses.courses.filter((course:Course)=>course.isFeatured)
  return (
    <div className="py-12 mt-5 ">
        <div className="flex flex-col items-center justify-center">
        <div className="">
        <BlurText
  text="Is Not the Best To Learn From the Best!"
  delay={150}
  animateBy="words"
  direction="bottom"
  onAnimationComplete={handleAnimationComplete}
  className="lg:text-5xl text-xl md:3xl  text-white "
/>
        </div>

        <div className="mt-7 text-white  ">
        <p className="text-2xl text-center sm:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
       Featured Courses
      </p>
        </div>
        <div className="mt-10 ">
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8   justify-center ">
           {featuredcourse.map((course:Course)=>(
          <div className="flex jsutify-center text-white gap-2 " key={course.id} >
            <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border shadow-sm shadow-gray-400 ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
        {course.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {course.description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={course.image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-center items-center mt-20 gap-4">
          <CardItem
            translateZ={20}
            as={Link}
            href={`/courses/${course.slug}`}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            {course.price}$
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
          By {course.instructor}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
          </div>
           ))}
        </div></div>

        <div className="mt-10 text-center">
        <Link href={"/courses"}>
                 
                 <StarBorder
   as="button"
   className="custom-class mt-3 "
   color="cyan"
   speed="5s"
 >
  View all courses
 </StarBorder>
                     
                 </Link>
        </div>
          
        </div>
    </div>
  )
}