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
const projects: Project[] = [{
  id: 1,
  artist: "Luna Eclipse",
  imageUrl: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  videos: ["https://assets.mixkit.co/videos/preview/mixkit-ink-swirling-in-water-22226-large.mp4"],
  images: ["https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
  description: "Conception d'une série de visualizers futuristes pour l'EP « Orbital »."
}, {
  id: 2,
  artist: "Neon Pulse",
  imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  videos: ["https://assets.mixkit.co/videos/preview/mixkit-galaxy-in-motion-acting-like-water-30734-large.mp4"],
  images: ["https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
  description: "Campagne visuelle pour le lancement de l'album « Cybernetic »."
}, {
  id: 3,
  artist: "Quantum Wave",
  imageUrl: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  videos: ["https://assets.mixkit.co/videos/preview/mixkit-very-close-shot-of-the-leaves-of-a-plant-wet-18310-large.mp4"],
  images: ["https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
  description: "Création d'une collection complète de Canvas Spotify pour l'album « Dimensions »."
}, {
  id: 4,
  artist: "Echo Void",
  imageUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  videos: ["https://assets.mixkit.co/videos/preview/mixkit-ink-swirling-in-water-22226-large.mp4"],
  images: ["https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
  description: "Direction artistique pour la mise en valeur du merchandising de la tournée mondiale."
}];
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
      setCurrentImageIndex(prev => prev < selectedProject.images.length - 1 ? prev + 1 : 0);
    }
  };
  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex(prev => prev > 0 ? prev - 1 : selectedProject.images.length - 1);
    }
  };
  return;
};
export default Portfolio;