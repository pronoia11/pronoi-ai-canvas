
const About = () => {
  const tools = [
    "Kling",
    "Freepik",
    "Flux 1.1",
    "Rêve AI",
    "MidJourney"
  ];

  return (
    <section id="about" className="section bg-[#FFFFFF]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2C2C2C]">À propos</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3 text-[#1E90FF]">Notre Vision</h3>
                <p className="text-[#2C2C2C]/80">
                  Experts du prompt engineering, nous traduisons l'imaginaire des artistes grâce à l'IA. 
                  Notre expertise nous permet de transformer des concepts abstraits en visuels saisissants qui 
                  capturent l'essence de votre univers musical.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3 text-[#1E90FF]">Processus Collaboratif</h3>
                <p className="text-[#2C2C2C]/80">
                  Notre équipe réunit des directeurs artistiques, monteurs et graphistes passionnés 
                  qui travaillent en étroite collaboration pour donner vie à votre vision. 
                  Chaque projet est unique et bénéficie d'une approche personnalisée.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3 text-[#1E90FF]">Nos Outils</h3>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <span 
                      key={tool} 
                      className="bg-[#D0E8FF] px-3 py-1 rounded-full text-sm font-medium text-[#2C2C2C]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-t from-[#D0E8FF]/80 to-transparent z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="AI Art Studio" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
