
import { ServiceCategory } from './services/AccordionService';
import AccordionService from './services/AccordionService';

const serviceCategories: ServiceCategory[] = [
  {
    id: "merchandising",
    title: "Merchandising",
    description: "Solutions visuelles professionnelles pour valoriser vos produits et votre marque",
    subServices: [
      {
        id: "photos-produits",
        title: "Photos produits",
        description: "Des photos de qualité pour mettre en valeur vos produits avec une esthétique professionnelle et cohérente.",
        imageUrl: ["/lovable-uploads/b1b3c03d-579b-4638-ad1e-5d4d6c18daea.png", "/lovable-uploads/23040e9f-9859-4a05-bcf2-8dea6bc4c885.png", "/lovable-uploads/f5cbf0a4-7b92-49ff-9347-7359bc6bf145.png", "/lovable-uploads/49251337-a477-41b4-88e1-6133baf03171.png"]
      },
      {
        id: "publicite-video",
        title: "Publicité vidéo",
        description: "Mettez en avant votre merch de façon différente avec des vidéos attractives et dynamiques.",
        videoUrl: "https://youtu.be/emO1LvmaPlY"
      }
    ]
  },
  {
    id: "clip",
    title: "Clip",
    description: "Solutions visuelles créatives pour accompagner votre musique",
    subServices: [
      {
        id: "tracklist-ia",
        title: "Tracklist IA",
        description: "Présentez votre tracklist de façon innovante avec des visualisations générées par intelligence artificielle.",
        videoUrl: "https://youtu.be/emO1LvmaPlY"
      },
      {
        id: "visualizer",
        title: "Visualizer",
        description: "Animations réactives au son pour accompagner votre musique avec un rendu professionnel.",
        videoUrl: "https://stream.42videobricks.com/SjRXQk9DdkpGb21ycWJ0bQ==/stream"
      },
      {
        id: "canvas-spotify",
        title: "Canvas Spotify",
        description: "Animations de 8 secondes pour vos titres sur Spotify, optimisées pour capter l'attention.",
        gifUrl: "https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif"
      },
      {
        id: "plans-inserts",
        title: "Plans d'inserts",
        description: "Visuels sur mesure pour enrichir vos clips avec des éléments graphiques cohérents.",
        imageUrl: ["/lovable-uploads/613d59bf-ed72-4128-9edb-86d9442e356f.png", "/lovable-uploads/c8b092f7-c06d-4bbe-993c-e8b6ee52229b.png"]
      }
    ]
  }
];

const Services = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section bg-gradient-to-b from-[#F5F5F5] to-[#E8F4FF]/30 bg-sky-100">
      <div className="container">
        <h2 className="text-4xl font-bold mb-12 text-gradient text-zinc-950 md:text-5xl">
          Nos prestations
        </h2>
        
        <AccordionService categories={serviceCategories} />

        <motion.button
          onClick={scrollToContact}
          className="mt-12 mx-auto block glass-btn px-8 py-4 text-lg font-semibold hover:scale-105 hover:-translate-y-1"
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          Discuter de votre projet sur mesure
        </motion.button>
      </div>
    </section>
  );
};

export default Services;
