
import { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import MediaViewer from '@/components/ui/media-viewer';

interface Project {
  id: number;
  artist: string;
  imageUrl: string;
  videos: string[];
  images: string[];
  description: string;
  aspectRatio?: number;
}

const projects: Project[] = [
  {
    id: 1,
    artist: "Luna Eclipse",
    imageUrl: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
    videos: ["https://assets.mixkit.co/videos/preview/mixkit-ink-swirling-in-water-22226-large.mp4"],
    images: [
      "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
    ],
    description: "Conception d'une série de visualizers futuristes pour l'EP « Orbital ».",
    aspectRatio: 1 // carré
  },
  {
    id: 2,
    artist: "Neon Pulse",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    videos: ["https://assets.mixkit.co/videos/preview/mixkit-galaxy-in-motion-acting-like-water-30734-large.mp4"],
    images: [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb"
    ],
    description: "Campagne visuelle pour le lancement de l'album « Cybernetic ».",
    aspectRatio: 16/9 // paysage
  },
  {
    id: 3,
    artist: "Quantum Wave",
    imageUrl: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
    videos: ["https://assets.mixkit.co/videos/preview/mixkit-very-close-shot-of-the-leaves-of-a-plant-wet-18310-large.mp4"],
    images: [
      "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
      "https://images.unsplash.com/photo-1500673922987-e212871fec22"
    ],
    description: "Création d'une collection complète de Canvas Spotify pour l'album « Dimensions ».",
    aspectRatio: 9/16 // portrait
  },
  {
    id: 4,
    artist: "Echo Void",
    imageUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    videos: ["https://assets.mixkit.co/videos/preview/mixkit-ink-swirling-in-water-22226-large.mp4"],
    images: [
      "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
    ],
    description: "Direction artistique pour la mise en valeur du merchandising de la tournée mondiale.",
    aspectRatio: 16/9 // paysage
  }
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentMediaIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentMediaIndex(0);
  };

  const nextMedia = () => {
    if (selectedProject) {
      const totalMedia = selectedProject.images.length + selectedProject.videos.length;
      setCurrentMediaIndex(prev => (prev + 1) % totalMedia);
    }
  };

  const prevMedia = () => {
    if (selectedProject) {
      const totalMedia = selectedProject.images.length + selectedProject.videos.length;
      setCurrentMediaIndex(prev => (prev - 1 + totalMedia) % totalMedia);
    }
  };

  return (
    <section id="portfolio" className="section bg-gradient-to-b from-[#F5F5F5] to-[#E8F4FF]/30">
      <div className="container px-6">
        <h2 className="text-4xl font-bold mb-12 text-gradient text-zinc-950 md:text-5xl">
          Nos Réalisations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[300px]">
          {projects.map((project) => (
            <div 
              key={project.id}
              className={`relative overflow-hidden rounded-lg transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer ${
                project.aspectRatio === 16/9 ? 'col-span-2' : 
                project.aspectRatio === 9/16 ? 'row-span-2' : ''
              }`}
              onClick={() => openProject(project)}
            >
              <MediaViewer
                src={project.imageUrl}
                ratio={project.aspectRatio}
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-semibold text-lg">{project.artist}</h3>
                  <p className="text-white/80 text-sm">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={!!selectedProject} onOpenChange={() => closeProject()}>
          <DialogContent className="max-w-4xl w-full bg-white/95 backdrop-blur-sm p-0 overflow-hidden">
            {selectedProject && (
              <div className="relative">
                {currentMediaIndex < selectedProject.videos.length ? (
                  <MediaViewer
                    src={selectedProject.videos[currentMediaIndex]}
                    type="video"
                    className="w-full"
                    ratio={16/9}
                    controls
                  />
                ) : (
                  <MediaViewer
                    src={selectedProject.images[currentMediaIndex - selectedProject.videos.length]}
                    type="image"
                    className="w-full"
                    ratio={16/9}
                  />
                )}
                
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className="text-white font-semibold text-xl mb-2">{selectedProject.artist}</h3>
                  <p className="text-white/90">{selectedProject.description}</p>
                </div>

                <button
                  onClick={(e) => { e.stopPropagation(); prevMedia(); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors"
                >
                  ←
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); nextMedia(); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors"
                >
                  →
                </button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Portfolio;
