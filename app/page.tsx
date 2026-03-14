import HeroSection from "@/components/home/HeroSection";
import FeaturedCourses from "@/components/home/FeaturedCourses";
import WhyLearnWithUs from "@/components/home/WhyLearnWithUs";
import FreeResources from "@/components/home/FreeResources";
import AboutDrSumaira from "@/components/home/AboutDrSumaira";
import Testimonials from "@/components/home/Testimonials";
import NewsletterSignup from "@/components/home/NewsletterSignup";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedCourses />
      <WhyLearnWithUs />
      <FreeResources />
      <AboutDrSumaira />
      <Testimonials />
      <NewsletterSignup />
    </>
  );
}
