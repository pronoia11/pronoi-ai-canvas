
import { useEffect, useState } from "react";

// Nouveau GIF héro fourni par l'utilisateur
const HERO_GIF =
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExanVibzQ2dTl4anVpN2Rmc2Zzc2JqaXp2aXZ1c2g0dTQzNmthcmt5bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1sus3HqohKeZTZyDNT/giphy.gif";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Fond GIF */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src={HERO_GIF}
          alt="background gif IA"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center" }}
          aria-hidden="true"
        />
        {/* Overlay semi-transparent pour lisibilité */}
        <div className="absolute inset-0 bg-[#D0E8FF]/60" />
      </div>

      {/* Contenu par-dessus le GIF */}
      <div
        className={`container relative z-10 text-center px-6 transition-all duration-1000 ${
          isLoaded ? "opacity-100 transform-none" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="hero-immersive hover-float mb-6">
          L&apos;
          <span className="text-gradient glitch drop-shadow-[0_4px_32px_rgba(30,144,255,0.45)]">
            IA
          </span>{" "}
          au service de votre{" "}
          <span className="text-gradient drop-shadow-[0_2px_32px_rgba(30,144,255,0.35)]">
            imagination
          </span>
        </h1>
        <p className="hero-immersive hover-float text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Studio créatif spécialisé dans la génération de visuels et
          d&apos;animations vidéo via l&apos;intelligence artificielle.
        </p>
        <a
          href="#services"
          className="btn btn-primary bg-[#1E90FF] text-white hover:bg-[#1E90FF]/90 hover:shadow-[0_0_15px_rgba(30,144,255,0.5)] rounded-full py-3 px-8 inline-flex items-center justify-center transition-all hover-float group"
        >
          <span className="hero-immersive group-hover:text-shadow">
            Découvrir nos services
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
