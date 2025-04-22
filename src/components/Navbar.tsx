
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-6 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : ""
      }`}
    >
      <div className="container px-6 flex items-center justify-between">
        <div className="text-2xl font-bold font-poppins text-[#2C2C2C]">
          PRONOÏA
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><a href="#home" className="nav-link text-[#2C2C2C]/80 hover:text-[#1E90FF]">Accueil</a></li>
            <li><a href="#services" className="nav-link text-[#2C2C2C]/80 hover:text-[#1E90FF]">Prestations</a></li>
            <li><a href="#portfolio" className="nav-link text-[#2C2C2C]/80 hover:text-[#1E90FF]">Portfolio</a></li>
            <li><a href="#about" className="nav-link text-[#2C2C2C]/80 hover:text-[#1E90FF]">À propos</a></li>
            <li><a href="#contact" className="nav-link text-[#2C2C2C]/80 hover:text-[#1E90FF]">Contact</a></li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button className="p-2 text-[#2C2C2C]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
