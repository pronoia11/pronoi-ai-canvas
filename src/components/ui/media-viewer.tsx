
import { useState, useEffect } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import VideoPlayer from '@/components/ui/video-player';
import { Play, ImageIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export type MediaType = 'image' | 'video' | 'gif';

interface MediaViewerProps {
  src: string;
  type?: MediaType;
  alt?: string;
  className?: string;
  ratio?: number;
  onClick?: () => void;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  isLazy?: boolean;
}

const MediaViewer = ({
  src,
  type,
  alt = 'Media content',
  className,
  ratio = 16 / 9,
  onClick,
  autoPlay = false,
  muted = true,
  loop = true,
  controls = false,
  isLazy = true,
}: MediaViewerProps) => {
  const [isLoaded, setIsLoaded] = useState(!isLazy);
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Auto-detect media type if not provided
  const detectType = (): MediaType => {
    if (type) return type;
    if (src.match(/\.(mp4|webm|mov|avi)$/i) || src.includes('youtu') || src.includes('vimeo')) {
      return 'video';
    }
    if (src.match(/\.(gif)$/i)) {
      return 'gif';
    }
    return 'image';
  };
  
  const mediaType = detectType();
  
  useEffect(() => {
    if (isLazy) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIsLoaded(true);
            observer.disconnect();
          }
        },
        { rootMargin: '200px' }
      );
      
      const element = document.getElementById(`media-${src.replace(/\W/g, '')}`);
      if (element) observer.observe(element);
      
      return () => observer.disconnect();
    }
  }, [src, isLazy]);
  
  const handleClick = () => {
    if (onClick) {
      onClick();
      return;
    }
    
    if (mediaType === 'video') {
      setIsPlaying(!isPlaying);
    }
  };
  
  return (
    <div 
      id={`media-${src.replace(/\W/g, '')}`}
      className={cn(
        "overflow-hidden rounded-lg relative transition-all duration-300 group",
        { "cursor-pointer": onClick || mediaType === 'video' },
        className
      )}
      onClick={handleClick}
    >
      <AspectRatio ratio={ratio} className="bg-slate-100/30 backdrop-blur-sm">
        {!isLoaded ? (
          <div className="flex h-full w-full items-center justify-center bg-slate-100/40 animate-pulse">
            {mediaType === 'video' ? (
              <Play className="h-12 w-12 text-slate-400/50" />
            ) : (
              <ImageIcon className="h-12 w-12 text-slate-400/50" />
            )}
          </div>
        ) : mediaType === 'video' ? (
          <VideoPlayer
            src={src}
            autoPlay={autoPlay || isPlaying}
            loop={loop}
            muted={muted}
            showControls={controls || isPlaying}
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        )}
      </AspectRatio>
      
      {isLoaded && mediaType === 'video' && !isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-full bg-white/30 backdrop-blur-sm p-4 transform transition-transform duration-300 group-hover:scale-110">
            <Play className="h-10 w-10 text-white drop-shadow-md" />
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaViewer;
