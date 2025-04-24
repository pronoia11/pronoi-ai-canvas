
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import ContactSmart from "@/components/ContactSmart";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-[#D0E8FF] text-[#2C2C2C]">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <ContactSmart />
      <Footer />
    </div>
  );
};

export default Index;
