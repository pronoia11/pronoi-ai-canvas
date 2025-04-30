import { useEffect, useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
const HERO_GIF = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExanVibzQ2dTl4anVpN2Rmc2Zzc2JqaXp2aXZ1c2g0dTQzNmthcmt5bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1sus3HqohKeZTZyDNT/giphy.gif";
const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const tiltRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setIsLoaded(true);

    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Initialize vanilla-tilt only on desktop
    if (tiltRef.current && !isMobile) {
      VanillaTilt.init(tiltRef.current, {
        max: 10,
        // maximum tilt rotation (degrees)
        speed: 400,
        // speed of the tilt animation
        glare: true,
        // enable glare effect
        "max-glare": 0.2,
        // maximum glare opacity
        scale: 1.03,
        // slight scale effect on hover
        gyroscope: false,
        // don't use gyroscope on mobile
        perspective: 1000,
        // perspective value for 3D effect
        transition: true,
        // smooth transition
        easing: "cubic-bezier(.03,.98,.52,.99)"
      });
    }
    return () => {
      window.removeEventListener("resize", checkMobile);
      // Clean up the tilt effect
      if (tiltRef.current && tiltRef.current.vanillaTilt) {
        tiltRef.current.vanillaTilt.destroy();
      }
    };
  }, [isMobile]);
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="h-screen min-h-[620px] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <img src={HERO_GIF} alt="background gif IA" className="w-full h-full object-cover" style={{
        objectPosition: "center"
      }} aria-hidden="true" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff33] via-[#ffffff22] to-[#ffffff11] backdrop-blur-md" />
      </div>

      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.8,
      ease: "easeOut"
    }} className="relative z-10 flex flex-col items-center justify-center w-full px-4 sm:px-8">
        <motion.h1 initial={{
        opacity: 0,
        y: 15,
        filter: "blur(3px)"
      }} animate={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)"
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }} className="text-3xl lg:text-5xl mb-3 hero-text-gradient text-pronoia-blue font-bold mx-[47px] text-center my-[16px] px-[170px] py-[32px] md:text-8xl">L'IA au service de votre imagination</motion.h1>

        <motion.p ref={tiltRef} initial={{
        opacity: 0,
        y: 15,
        filter: "blur(3px)"
      }} animate={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)"
      }} transition={{
        duration: 0.6,
        delay: 0.3
      }} className="text-shadow-sm max-w-2xl mb-8 md:text-2xl text-center font-semibold my-[8px] mx-0 text-[pronoia-light-gray] text-slate-300">
          Studio créatif spécialisé dans la génération de visuels et d&apos;animations vidéo via l&apos;intelligence artificielle.
        </motion.p>

        <motion.a href="#services" initial={{
        opacity: 0,
        scale: 0.95
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.5,
        delay: 0.5
      }} whileHover={{
        scale: 1.05,
        boxShadow: "0 8px 30px rgba(30, 144, 255, 0.2)"
      }} whileTap={{
        scale: 0.95
      }} className="glass-btn mt-2 px-8 py-4 text-base md:text-lg rounded-full inline-flex items-center gap-2 transition-all duration-300">
          <span className="gradient-text font-semibold">
            Découvrir nos services
          </span>
          <ChevronDown className="w-5 h-5 text-white/90" />
        </motion.a>
      </motion.div>

      <motion.div className="absolute bottom-10 left-1/2 transform -translate-x-1/2" initial={{
      opacity: 0,
      y: -10
    }} animate={{
      opacity: 0.8,
      y: 0
    }} transition={{
      duration: 1,
      delay: 1.2,
      repeat: Infinity,
      repeatType: "reverse"
    }}>
        <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <motion.div className="w-1.5 h-1.5 bg-white/80 rounded-full" animate={{
          y: [0, 12, 0]
        }} transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut"
        }} />
        </div>
      </motion.div>
    </section>;
};
export default Hero;