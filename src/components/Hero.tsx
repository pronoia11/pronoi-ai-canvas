
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

// Nouveau GIF en fond
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
      {/* Image de fond GIF + overlay glassmorphism */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src={HERO_GIF} 
          alt="background gif IA" 
          className="w-full h-full object-cover"
          style={{ objectPosition: "center" }}
          aria-hidden="true"
          loading="eager"
        />
        {/* overlay glass */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#D0E8FFbb] via-[#a3cafe99] to-[#d0e8ff55] backdrop-blur-[7px] rounded-none bg-transparent" />
      </div>

      {/* Contenu (accroche, sous-texte, bouton) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="relative z-10 flex flex-col items-center justify-center w-full px-4 sm:px-8"
      >
        {/* Accroche principale */}
        <motion.h1
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="modern-title max-w-4xl mx-auto text-center text-[2.6rem] md:text-7xl lg:text-8xl font-bold leading-tight mb-10 tracking-tight focus:outline-none focus-visible:ring-2"
          tabIndex={-1}
        >
          <span className="hero-text-gradient block">
            L<span className="text-blue-600">{'IA '}</span>
            <span className="font-normal text-slate-700 md:text-7xl text-6xl">
              au service de votre
              <br />imagination
            </span>
          </span>
        </motion.h1>

        {/* Sous-texte */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="modern-card max-w-2xl w-full mb-8 md:text-2xl text-lg text-center font-semibold text-[#191c22] my-[12px] px-[25px] py-[6px] mx-0 rounded-full"
        >
          Studio créatif spécialisé dans la génération de visuels et d&apos;animations vidéo via l&apos;intelligence artificielle.
        </motion.div>

        {/* Bouton call-to-action */}
        <motion.a
          href="#services"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="mt-2 modern-button font-bold px-8 py-4 text-base md:text-lg rounded-full inline-flex items-center gap-2 transition-all duration-300 hover:shadow-[0_2px_30px_rgba(30,144,255,0.32)] focus:outline-none focus-visible:ring-2"
        >
          <span className="gradient-text drop-shadow-[0_2px_10px_rgba(60,180,255,0.13)] text-inherit text-center">
            Découvrir nos services
          </span>
          <ChevronDown className="w-5 h-5 text-blue-500 drop-shadow-lg" style={{ filter: "drop-shadow(0 2px 8px #5fbcf580)" }} />
        </motion.a>
      </motion.div>

      {/* Scroll indicator */}
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
