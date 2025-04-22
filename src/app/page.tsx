import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestimonailsCards from "@/components/TestimonailsCards";
import UpcommingWebinars from "@/components/UpcommingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <TestimonailsCards />
      <UpcommingWebinars />
      <Instructors />
      <Footer />
    </div>
  );
}
