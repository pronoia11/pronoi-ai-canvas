
import { useState } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  videoUrl?: string;
  category: 'Merchandising' | 'Clip';
}

const ServiceCard = ({ title, description, imageUrl, videoUrl, category }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="portfolio-item h-[300px] md:h-[400px] relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-full w-full">
        {videoUrl && isHovered ? (
          <video 
            src={videoUrl}
            className="h-full w-full object-cover"
            autoPlay 
            muted 
            loop
          />
        ) : (
          <img 
            src={imageUrl} 
            alt={title} 
            className="h-full w-full object-cover"
          />
        )}
      </div>
      <div className="absolute inset-0 glass-panel flex flex-col justify-end p-4 opacity-100">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-white/80 mb-2">{description}</p>
        <span className="text-sm text-primary/80 uppercase tracking-wider">{category}</span>
      </div>
    </div>
  );
};

const Services = () => {
  const merchandisingServices = [
    {
      title: "Merchandising",
      description: "Mettez en avant votre merch de façon différente.",
      imageUrl: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-very-close-shot-of-the-leaves-of-a-plant-wet-18310-large.mp4"
    }
  ];

  const clipServices = [
    {
      title: "Tracklist IA",
      description: "Présentez votre tracklist de façon innovante.",
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Visualizer",
      description: "Animations réactives au son pour accompagner votre musique.",
      imageUrl: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-ink-swirling-in-water-22226-large.mp4"
    },
    {
      title: "Canvas Spotify",
      description: "Animations de 8 secondes pour vos titres sur Spotify.",
      imageUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-galaxy-in-motion-acting-like-water-30734-large.mp4"
    },
    {
      title: "Plans d'inserts",
      description: "Visuels sur mesure pour vos clips.",
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="services" className="section bg-black">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Nos prestations</h2>
        
        <div className="space-y-24">
          {/* Merchandising Category */}
          <div className="mb-12 scroll-mt-24" id="merchandising">
            <h3 className="text-3xl md:text-5xl font-bold mb-12 text-center text-primary">
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
          <div className="scroll-mt-24" id="clip">
            <h3 className="text-3xl md:text-5xl font-bold mb-12 text-center text-primary">
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
        </div>
      </div>
    </section>
  );
};

export default Services;
