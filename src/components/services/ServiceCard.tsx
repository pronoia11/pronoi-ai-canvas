
import { useState, useEffect, useCallback } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import VideoPlayer from '@/components/ui/video-player';
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

export default ServiceCard;
