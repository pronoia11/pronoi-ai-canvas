
const CustomProjectsSection = () => {
  return (
    <div className="scroll-mt-24" id="custom-projects">
      <h3 className="text-3xl md:text-5xl font-bold mb-12 text-center text-[#1E90FF] drop-shadow-lg hover:scale-105 transition-transform">
        Projets sur mesures
      </h3>
      <div className="flex justify-center">
        <a 
          href="#contact" 
          className="btn btn-primary text-lg px-8 py-4 hover:scale-105 transition-transform"
        >
          Contactez-nous pour un projet personnalisé
        </a>
      </div>
    </div>
  );
};

export default CustomProjectsSection;
