import { useState } from 'react';
import { AspectRatio } from './ui/aspect-ratio';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  videoUrl?: string;
  category: 'Merchandising' | 'Clip' | 'Projets sur mesures';
}

const ServiceCard = ({ title, description, imageUrl, videoUrl, category }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="portfolio-item relative rounded-lg overflow-hidden shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AspectRatio ratio={16 / 9}>
        {videoUrl && isHovered ? (
          <video 
            src={videoUrl}
            className="h-full w-full object-cover"
            autoPlay 
            muted 
            loop 
            playsInline
          />
        ) : (
          <img 
            src={imageUrl} 
            alt={title} 
            className="h-full w-full object-cover"
          />
        )}
      </AspectRatio>
      <div className="absolute inset-0 bg-[#1E90FF]/10 backdrop-blur-sm flex flex-col justify-end p-4 opacity-100">
        <h3 className="text-xl font-bold mb-2 text-[#2C2C2C]">{title}</h3>
        <p className="text-[#2C2C2C]/80 mb-2">{description}</p>
        <span className="text-sm text-[#1E90FF] uppercase tracking-wider">{category}</span>
      </div>
    </div>
  );
};

const Services = () => {
  const merchandisingServices = [
    {
      title: "Photos produits",
      description: "Des photos de qualité pour votre merchandising.",
      imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Publicité vidéo",
      description: "Mettez en avant votre merch de façon différente.",
      imageUrl: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-very-close-shot-of-the-leaves-of-a-plant-wet-18310-large.mp4"
    }
  ];

  const clipServices = [
    {
      title: "Tracklist IA",
      description: "Présentez votre tracklist de façon innovante.",
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://youtu.be/emO1LvmaPlY"
    },
    {
      title: "Visualizer",
      description: "Animations réactives au son pour accompagner votre musique.",
      imageUrl: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://example.com/visualizer-demo.mp4"
    },
    {
      title: "Canvas Spotify",
      description: "Animations de 8 secondes pour vos titres sur Spotify.",
      imageUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://example.com/canvas-demo.mp4"
    },
    {
      title: "Plans d'inserts",
      description: "Visuels sur mesure pour vos clips.",
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://example.com/inserts-demo.mp4"
    }
  ];

  const customServices = [
    {
      title: "Projet personnalisé",
      description: "Une idée unique ? Contactez-nous pour un projet sur mesure.",
      imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="services" className="section bg-[#F5F5F5]">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#2C2C2C]">Nos prestations</h2>
        
        <div className="space-y-24">
          {/* Merchandising Category */}
          <div className="mb-12 scroll-mt-24" id="merchandising">
            <h3 className="text-3xl md:text-5xl font-bold mb-12 text-center text-[#1E90FF]">
              Merchandising
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {merchandisingServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  {...service}
                  category="Merchandising"
                />
              ))}
            </div>
          </div>

          {/* Clip Category */}
          <div className="mb-12 scroll-mt-24" id="clip">
            <h3 className="text-3xl md:text-5xl font-bold mb-12 text-center text-[#1E90FF]">
              Clip
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clipServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  {...service}
                  category="Clip"
                />
              ))}
            </div>
          </div>
          
          {/* Custom Projects Category */}
          <div className="scroll-mt-24" id="custom-projects">
            <h3 className="text-3xl md:text-5xl font-bold mb-12 text-center text-[#1E90FF]">
              Projets sur mesures
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <a href="#contact" className="col-span-full">
                <ServiceCard
                  title="Projet personnalisé"
                  description="Une idée unique ? Contactez-nous pour un projet sur mesure adapté à vos besoins."
                  imageUrl="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  category="Projets sur mesures"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
