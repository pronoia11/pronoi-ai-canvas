
import { useEffect, useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background video with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#D0E8FF]/70 to-[#D0E8FF] z-10"></div>
      <div className="absolute inset-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-digital-tunnel-30748-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#D0E8FF]/60"></div>
      </div>
      
      <div 
        className={`container relative z-20 text-center px-6 transition-all duration-1000 ${
          isLoaded ? "opacity-100 transform-none" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-[#2C2C2C]">
          L'<span className="text-gradient glitch">IA</span> au service de votre <span className="text-gradient">imagination</span>
        </h1>
        <p className="text-xl md:text-2xl text-[#2C2C2C]/80 mb-8 max-w-2xl mx-auto">
          Studio créatif spécialisé dans la génération de visuels et d'animations vidéo via l'intelligence artificielle.
        </p>
        <a href="#services" className="btn btn-primary bg-[#1E90FF] text-white hover:bg-[#1E90FF]/90 hover:shadow-[0_0_15px_rgba(30,144,255,0.5)] rounded-full py-3 px-8 inline-flex items-center justify-center transition-all">
          Découvrir nos services
          <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
