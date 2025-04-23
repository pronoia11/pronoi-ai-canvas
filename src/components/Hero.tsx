import { useEffect, useState } from "react";

// Nouveau GIF en fond
const HERO_GIF = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExanVibzQ2dTl4anVpN2Rmc2Zzc2JqaXp2aXZ1c2g0dTQzNmthcmt5bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1sus3HqohKeZTZyDNT/giphy.gif";
const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return <section id="home" className="h-screen min-h-[620px] flex items-center justify-center relative overflow-hidden">
      {/* Image de fond GIF + overlay glassmorphism */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img src={HERO_GIF} alt="background gif IA" className="w-full h-full object-cover" style={{
        objectPosition: "center"
      }} aria-hidden="true" loading="eager" />
        {/* overlay glass */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#D0E8FFbb] via-[#a3cafe99] to-[#d0e8ff55] backdrop-blur-[7px]" />
      </div>

      {/* Contenu (accroche, sous-texte, bouton) */}
      <div className={`relative z-10 flex flex-col items-center justify-center w-full px-4 sm:px-8 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        {/* Accroche principale */}
        <h1 className="glass-hero max-w-4xl mx-auto text-center text-[2.2rem] md:text-6xl lg:text-7xl font-bold leading-tight mb-8 tracking-tight animate-fade-in focus:outline-none focus-visible:ring-2" tabIndex={-1}>
          <span className="glow-text block">
            L<span className="text-blue-600">’IA </span>
            <span className="font-normal text-slate-700">au service de votre </span>
            <span className="bg-hero-gradient bg-clip-text text-7xl text-[#2000e6]/[0.57] font-extrabold">imagination</span>
          </span>
        </h1>

        {/* Sous-texte */}
        <div className="glass-panel-hero max-w-2xl w-full mb-8 md:text-2xl text-lg text-center font-semibold text-[#191c22] shadow-xl animate-fade-in animate-delay-200 my-[12px] px-[25px] py-[6px] mx-0 bg-[#324bff]/[0.56] rounded-full">
          Studio créatif spécialisé dans la génération de visuels et d&apos;animations vidéo via l&apos;intelligence artificielle.
        </div>

        {/* Bouton call-to-action */}
        <a href="#services" className="mt-2 glass-btn font-bold px-8 py-4 text-base md:text-lg rounded-full inline-flex items-center gap-2 hover:scale-[1.045] transition-transform duration-300 hover:shadow-[0_2px_30px_rgba(30,144,255,0.32)] focus:outline-none focus-visible:ring-2 animate-fade-in animate-delay-400">
          <span className="bg-gradient-to-r from-white/80 via-blue-100/90 to-blue-400/60 bg-clip-text drop-shadow-[0_2px_10px_rgba(60,180,255,0.13)] text-inherit text-center">
            Découvrir nos services
          </span>
          {/* Lucide 'arrow-down' */}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500 drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{
          filter: "drop-shadow(0 2px 8px #5fbcf580)"
        }}>
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>;
};
export default Hero;