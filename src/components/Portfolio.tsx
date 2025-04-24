
import { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { FileVideo, Image as ImageIcon } from "lucide-react";

interface Project {
  id: number;
  artist: string;
  imageUrl: string;
  videos: string[];
  images: string[];
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    artist: "Luna Eclipse",
    imageUrl: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    videos: ["https://assets.mixkit.co/videos/preview/mixkit-ink-swirling-in-water-22226-large.mp4"],
    images: [
      "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    description: "Conception d'une série de visualizers futuristes pour l'EP « Orbital »."
  },
  {
    id: 2,
    artist: "Neon Pulse",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    videos: ["https://assets.mixkit.co/videos/preview/mixkit-galaxy-in-motion-acting-like-water-30734-large.mp4"],
    images: [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    description: "Campagne visuelle pour le lancement de l'album « Cybernetic »."
  },
  {
    id: 3,
    artist: "Quantum Wave",
    imageUrl: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    videos: ["https://assets.mixkit.co/videos/preview/mixkit-very-close-shot-of-the-leaves-of-a-plant-wet-18310-large.mp4"],
    images: [
      "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    description: "Création d'une collection complète de Canvas Spotify pour l'album « Dimensions »."
  },
  {
    id: 4,
    artist: "Echo Void",
    imageUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    videos: ["https://assets.mixkit.co/videos/preview/mixkit-ink-swirling-in-water-22226-large.mp4"],
    images: [
      "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    description: "Direction artistique pour la mise en valeur du merchandising de la tournée mondiale."
  }
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex(prev => 
        prev < selectedProject.images.length - 1 ? prev + 1 : 0
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex(prev => 
        prev > 0 ? prev - 1 : selectedProject.images.length - 1
      );
    }
  };

  return (
    <section id="portfolio" className="section bg-[#E6E6FA]/30 relative overflow-hidden">
      <div className="absolute inset-0 backdrop-blur-[50px] opacity-30 bg-sky-100 rounded-none"></div>
      <div className="container relative z-10">
        <h2 className="text-3xl font-bold mb-4 text-[#2C2C2C] text-left md:text-5xl">Portfolio</h2>
        <p className="text-lg text-[#2C2C2C]/70 mb-12 text-center max-w-3xl mx-auto">
          Découvrez nos réalisations pour des artistes de tous horizons
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {projects.map(project => (
            <HoverCard key={project.id}>
              <HoverCardTrigger asChild>
                <button
                  onClick={() => openProject(project)}
                  className="group flex flex-col items-center gap-3 transition-transform hover:scale-105"
                >
                  <Avatar className="w-24 h-24 border-2 border-[#1E90FF]/50 hover:border-[#1E90FF] transition-colors shadow-md">
                    <AvatarImage src={project.imageUrl} alt={project.artist} />
                    <AvatarFallback className="bg-[#D0E8FF] text-[#1E90FF]">{project.artist[0]}</AvatarFallback>
                  </Avatar>
                  <span className="font-medium text-[#2C2C2C]">{project.artist}</span>
                </button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 bg-white/95 border border-[#D0E8FF] text-[#2C2C2C] shadow-md">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium mb-1">{project.artist}</h4>
                    <p className="text-sm text-[#2C2C2C]/70">{project.description}</p>
                  </div>
                  <div className="flex gap-2">
                    {project.videos.length > 0 && (
                      <FileVideo className="h-4 w-4 text-[#1E90FF]" />
                    )}
                    {project.images.length > 0 && (
                      <ImageIcon className="h-4 w-4 text-[#1E90FF]" />
                    )}
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>

        <Dialog open={!!selectedProject} onOpenChange={() => closeProject()}>
          {selectedProject && (
            <DialogContent className="bg-white/95 border-[#D0E8FF] p-0 max-w-4xl w-[90vw] max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-[#2C2C2C]">{selectedProject.artist}</h2>
                <p className="text-[#2C2C2C]/70 mb-6">{selectedProject.description}</p>
                
                {selectedProject.videos.length > 0 && (
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <FileVideo className="h-5 w-5 text-[#1E90FF]" />
                      <h3 className="text-lg font-semibold text-[#2C2C2C]">Vidéos</h3>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                      {selectedProject.videos.map((video, index) => (
                        <div key={index} className="overflow-hidden rounded-lg shadow-md">
                          <video
                            src={video}
                            className="w-full h-auto"
                            controls
                            autoPlay
                            muted
                            loop
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {selectedProject.images.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <ImageIcon className="h-5 w-5 text-[#1E90FF]" />
                      <h3 className="text-lg font-semibold text-[#2C2C2C]">Images</h3>
                    </div>
                    <div className="relative">
                      <div className="overflow-hidden rounded-lg shadow-md">
                        <img
                          src={selectedProject.images[currentImageIndex]}
                          alt={`${selectedProject.artist} - Image ${currentImageIndex + 1}`}
                          className="w-full h-auto"
                        />
                      </div>
                      
                      {selectedProject.images.length > 1 && (
                        <div className="absolute inset-0 flex items-center justify-between px-4">
                          <button
                            onClick={e => {
                              e.stopPropagation();
                              prevImage();
                            }}
                            className="bg-white/50 hover:bg-white/70 text-[#2C2C2C] rounded-full p-2 transition-colors shadow-md"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M15 18l-6-6 6-6" />
                            </svg>
                          </button>
                          <button
                            onClick={e => {
                              e.stopPropagation();
                              nextImage();
                            }}
                            className="bg-white/50 hover:bg-white/70 text-[#2C2C2C] rounded-full p-2 transition-colors shadow-md"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M9 18l6-6-6-6" />
                            </svg>
                          </button>
                        </div>
                      )}
                    </div>
                    
                    {selectedProject.images.length > 1 && (
                      <div className="flex justify-center mt-4">
                        {selectedProject.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={e => {
                              e.stopPropagation();
                              setCurrentImageIndex(index);
                            }}
                            className={`w-3 h-3 mx-1 rounded-full transition-colors ${
                              currentImageIndex === index ? "bg-[#1E90FF]" : "bg-[#D0E8FF]"
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
};

export default Portfolio;
