import { useState, useEffect, useCallback } from 'react';
import { AspectRatio } from './ui/aspect-ratio';
import useEmblaCarousel from 'embla-carousel-react';
import VideoPlayer from './ui/video-player';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string | string[];
  videoUrl?: string;
  category: 'Merchandising' | 'Clip' | 'Projets sur mesures';
  autoplay?: boolean;
}

const ServiceCard = ({ title, description, imageUrl, videoUrl, category, autoplay = false }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<ReturnType<typeof useEmblaCarousel>[1]>();

  const getEmbedUrl = (url: string) => {
    if (url.includes('youtu.be') || url.includes('youtube.com')) {
      const videoId = url.includes('youtu.be') 
        ? url.split('youtu.be/')[1]
        : url.split('v=')[1];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&loop=1&playlist=${videoId}`;
    }
    return url;
  };

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrentSlide(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    
    api.on('select', onSelect);
    return () => {
      api.off('select', onSelect);
    };
  }, [api, onSelect]);

  useEffect(() => {
    if (autoplay && Array.isArray(imageUrl) && api) {
      const intervalId = window.setInterval(() => {
        if (api.canScrollNext()) {
          api.scrollNext();
        } else {
          api.scrollTo(0);
        }
      }, 3000);
      
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [autoplay, imageUrl, api]);

  const renderContent = () => {
    if (videoUrl && isHovered) {
      return (
        <VideoPlayer
          src={videoUrl}
          className="h-full w-full"
          autoPlay={true}
          muted={true}
          loop={true}
          showControls={false}
        />
      );
    }

    if (Array.isArray(imageUrl)) {
      return (
        <Carousel setApi={setApi} className="w-full h-full">
          <CarouselContent className="h-full">
            {imageUrl.map((url, index) => (
              <CarouselItem key={index} className="h-full">
                <img src={url} alt={`${title} ${index + 1}`} className="h-full w-full object-cover" />
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-none" />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-none" />
          
          <div className="absolute z-10 bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {imageUrl.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className={`p-0 h-1.5 min-w-0 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'w-4 bg-white hover:bg-white' 
                    : 'w-1.5 bg-white/60 hover:bg-white/80'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  api?.scrollTo(index);
                }}
                aria-label={`Aller à l'image ${index + 1}`}
              />
            ))}
          </div>
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
        "/lovable-uploads/b1b3c03d-579b-4638-ad1e-5d4d6c18daea.png",
        "/lovable-uploads/23040e9f-9859-4a05-bcf2-8dea6bc4c885.png",
        "/lovable-uploads/f5cbf0a4-7b92-49ff-9347-7359bc6bf145.png",
        "/lovable-uploads/49251337-a477-41b4-88e1-6133baf03171.png",
        "/lovable-uploads/de14492c-3007-4769-9a2f-267ea9b48a47.png",
        "/lovable-uploads/4112cc47-23b2-4811-b770-671c38d130ee.png",
        "/lovable-uploads/613d59bf-ed72-4128-9edb-86d9442e356f.png",
        "/lovable-uploads/c8b092f7-c06d-4bbe-993c-e8b6ee52229b.png",
        "/lovable-uploads/139d9cef-3a47-4d8c-ad10-151edf156b28.png",
        "/lovable-uploads/2a457dd2-1be5-43bc-b966-06c70ee8c24e.png"
      ],
      autoplay: true,
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
      videoUrl: "https://stream.42videobricks.com/SjRXQk9DdkpGb21ycWJ0bQ==/stream"
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
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-[#1E90FF] to-[#00BFFF] bg-clip-text text-transparent">
          Nos prestations
        </h2>
        
        <div className="space-y-24">
          {/* Merchandising Category */}
          <div className="mb-12 scroll-mt-24" id="merchandising">
            <h3 className="text-3xl md:text-5xl font-bold mb-12 text-center text-[#1E90FF] drop-shadow-lg hover:scale-105 transition-transform">
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
            <h3 className="text-3xl md:text-5xl font-bold mb-12 text-center text-[#1E90FF] drop-shadow-lg hover:scale-105 transition-transform">
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
        </div>
      </div>
    </section>
  );
};

export default Services;
