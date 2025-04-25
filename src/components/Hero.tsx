import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const HERO_GIF = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExanVibzQ2dTl4anVpN2Rmc2Zzc2JqaXp2aXZ1c2g0dTQzNmthcmt5bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1sus3HqohKeZTZyDNT/giphy.gif";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="h-screen min-h-[620px] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src={HERO_GIF} 
          alt="background gif IA" 
          className="w-full h-full object-cover"
          style={{ objectPosition: "center" }}
          aria-hidden="true"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff33] via-[#ffffff22] to-[#ffffff11] backdrop-blur-md" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center w-full px-4 sm:px-8"
      >
        <motion.h1
          initial={{ scale: 0.95, filter: "blur(4px)" }}
          animate={{ scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="modern-title max-w-4xl mx-auto text-center text-[2.6rem] md:text-7xl lg:text-8xl font-bold leading-tight mb-10 tracking-tight backdrop-blur-sm bg-white/5 rounded-xl p-6"
        >
          <span className="hero-text-gradient block">
            L<span className="text-blue-600">{'IA '}</span>
            <span className="font-normal text-slate-700 md:text-7xl text-6xl">
              au service de votre
              <br />imagination
            </span>
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 15, filter: "blur(3px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="modern-card max-w-2xl w-full mb-8 md:text-2xl text-lg text-center font-semibold text-[#191c22] my-[12px] px-[25px] py-[6px] mx-0 rounded-full"
        >
          Studio créatif spécialisé dans la génération de visuels et d&apos;animations vidéo via l&apos;intelligence artificielle.
        </motion.div>

        <motion.a
          href="#services"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 8px 30px rgba(30, 144, 255, 0.2)",
          }}
          whileTap={{ scale: 0.95 }}
          className="glass-btn mt-2 px-8 py-4 text-base md:text-lg rounded-full inline-flex items-center gap-2 transition-all duration-300"
        >
          <span className="gradient-text font-semibold">
            Découvrir nos services
          </span>
          <ChevronDown className="w-5 h-5 text-white/90" />
        </motion.a>
      </motion.div>

      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ duration: 1, delay: 1.2, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-white/80 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
