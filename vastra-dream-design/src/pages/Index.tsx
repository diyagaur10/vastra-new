
import Hero from "../components/Hero";
import UploadInspiration from "../components/UploadInspiration";
import HowItWorks from "../components/HowItWorks";
import TailorShowcase from "../components/TailorShowcase";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50">
      <Hero />
      <UploadInspiration />
      <HowItWorks />
      <Features />
      <TailorShowcase />
      <Testimonials />
    </div>
  );
};

export default Index;
