import FeaturedCourse from "@/components/FeaturedCourse";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import  Testimonials  from "@/components/Testimonials";
import Webinars from "@/components/Webinars";
import Meetinstruct from "@/components/Meetinstruct";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white[0.2] ">
    <HeroSection/>
   <FeaturedCourse/>
   <WhyChooseUs/>
   <Testimonials/>
   <Webinars/>
   <Meetinstruct/>
   <Footer/>
    </main>
  );
}
