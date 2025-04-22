import { useState } from 'react';
import { AspectRatio } from './ui/aspect-ratio';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string | string[];
  videoUrl?: string;
  category: 'Merchandising' | 'Clip' | 'Projets sur mesures';
}

const ServiceCard = ({ title, description, imageUrl, videoUrl, category }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Convert YouTube URL to embed URL if needed
  const getEmbedUrl = (url: string) => {
    if (url.includes('youtu.be') || url.includes('youtube.com')) {
      const videoId = url.includes('youtu.be') 
        ? url.split('youtu.be/')[1]
        : url.split('v=')[1];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&loop=1&playlist=${videoId}`;
    }
    return url;
  };

  const renderContent = () => {
    if (videoUrl && isHovered) {
      return (
        <iframe
          src={getEmbedUrl(videoUrl)}
          className="h-full w-full object-cover"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    }

    if (Array.isArray(imageUrl)) {
      return (
        <Carousel className="w-full">
          <CarouselContent>
            {imageUrl.map((url, index) => (
              <CarouselItem key={index}>
                <img src={url} alt={`${title} ${index + 1}`} className="h-full w-full object-cover" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      );
    }

    return <img src={imageUrl as string} alt={title} className="h-full w-full object-cover" />;
  };

  return (
    <div 
      className="portfolio-item relative rounded-lg overflow-hidden shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AspectRatio ratio={16 / 9}>
        {renderContent()}
      </AspectRatio>
      <div className={`absolute inset-0 bg-black/70 flex flex-col justify-end p-4 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-white/90 mb-2">{description}</p>
        <span className="text-sm text-white font-medium uppercase tracking-wider">{category}</span>
      </div>
    </div>
  );
};

const Services = () => {
  const merchandisingServices = [
    {
      title: "Photos produits",
      description: "Des photos de qualité pour votre merchandising.",
      imageUrl: [
        "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      ],
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
            <div className="flex justify-center">
              <a 
                href="#contact" 
                className="btn btn-primary text-lg px-8 py-4 hover:scale-105 transition-transform"
              >
                Contactez-nous pour un projet personnalisé
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
