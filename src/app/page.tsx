import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import TestimonailsCards from "@/components/TestimonailsCards";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <h1>
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <TestimonailsCards />
    </h1>
  );
}
