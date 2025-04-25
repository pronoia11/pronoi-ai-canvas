
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const tools = ["Kling", "Freepik", "Flux 1.1", "Rêve AI", "MidJourney"];
  
  return (
    <section id="about" className="section py-16 bg-gradient-to-b from-[#E8F4FF]/30 to-[#D0E8FF]">
      <div className="container px-6">
        <h2 className="text-4xl font-bold mb-12 text-gradient text-zinc-950 md:text-5xl">
          Nos Outils
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-white/80 backdrop-blur-sm border-none shadow-md">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-4">Technologies Créatives</h3>
              <p className="text-gray-700 mb-6">
                Nous utilisons les derniers outils d'intelligence artificielle et de design pour créer des visuels uniques et captivants pour votre projet musical.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur-sm border-none shadow-md">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-4">Notre Approche</h3>
              <p className="text-gray-700 mb-4">
                Nous combinons créativité artistique et technologie de pointe pour donner vie à votre vision musicale à travers des visuels impactants.
              </p>
              <p className="text-gray-700">
                Chaque projet est traité avec soin et attention, en veillant à ce que votre identité visuelle corresponde parfaitement à votre univers musical.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
