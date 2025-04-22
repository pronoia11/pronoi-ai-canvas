
import ServiceCard from './ServiceCard';

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

const ClipSection = () => {
  return (
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
  );
};

export default ClipSection;
