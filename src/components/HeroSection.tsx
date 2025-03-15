import Link from "next/link";
import StarBorder from './ui/moving-border'
import Aurora from "./ui/Aurora";

export default function HeroSection() {

    return (

    
  <div
    className="h-auto md:h-[60rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto  md:py-0  "
    >
      <Aurora
  colorStops={["#000000", "#FFFFFF", "#000000"]}
  blend={0.5}
  amplitude={1.0}
  speed={0.5}
/>
        
        <div className="p-4 relative z-10 w-full text-center md:mb-60  " >
            <h1
            className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
            >Master the art of music</h1>
            <p
            className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
            >Dive into our comprehensive music courses and transform your musical journey today. Whether you&apos;re a beginner or looking to refine your skills, join us to unlock your true potential.</p>
            <div className="mt-4">
                <Link href={"/courses"}>
                 
                <StarBorder
  as="button"
  className="custom-class mt-10 "
  color="cyan"
  speed="5s"
>
 Get started
</StarBorder>
                    
                </Link>
            </div>
        </div>
        
        </div>)}