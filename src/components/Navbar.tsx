import { useEffect, useState, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { motion } from "framer-motion";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navLinksRef = useRef<HTMLUListElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);

    // Initialize vanilla-tilt only on desktop for nav links
    if (navLinksRef.current && !isMobile) {
      const navItems = navLinksRef.current.querySelectorAll('a');
      navItems.forEach(item => {
        VanillaTilt.init(item as HTMLElement, {
          max: 8,
          speed: 300,
          glare: true,
          "max-glare": 0.1,
          scale: 1.05,
          perspective: 800,
          transition: true,
          easing: "cubic-bezier(.03,.98,.52,.99)"
        });
      });
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);

      // Clean up tilt effect
      if (navLinksRef.current && !isMobile) {
        const navItems = navLinksRef.current.querySelectorAll('a');
        navItems.forEach(item => {
          if ((item as any).vanillaTilt) {
            (item as any).vanillaTilt.destroy();
          }
        });
      }
    };
  }, [scrolled, isMobile]);
  return <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-6 ${scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : ""}`}>
      <div className="container px-6 flex items-center justify-between bg-transparent">
        <div className="glass-btn inline-block px-4 py-2 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105">
          PRONOÏA
        </div>
        <nav className="hidden md:block">
          <motion.ul ref={navLinksRef} initial={{
          opacity: 0,
          y: -10
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          staggerChildren: 0.1
        }} className="flex space-x-4">
            {['Accueil', 'Prestations', 'Contact'].map((item, index) => <motion.li key={index} initial={{
            opacity: 0,
            y: -10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.3,
            delay: index * 0.1
          }}>
                <a href={`#${item === 'Accueil' ? 'home' : item === 'Prestations' ? 'services' : 'contact'}`} className="glass-btn inline-block px-4 py-2 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105">
                  {item}
                </a>
              </motion.li>)}
          </motion.ul>
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
    </header>;
};
export default Navbar;