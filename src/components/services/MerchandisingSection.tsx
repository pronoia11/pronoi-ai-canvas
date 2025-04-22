import ServiceCard from './ServiceCard';

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
    videoUrl: "https://youtu.be/emO1LvmaPlY"
  }
];

const MerchandisingSection = () => {
  return (
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
  );
};

export default MerchandisingSection;
