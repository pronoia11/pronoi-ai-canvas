
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Instagram, Send } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message envoyé!",
      description: "Nous vous contacterons très prochainement.",
    });
    
    setFormData({
      name: "",
      email: "",
      projectType: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="section bg-black">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Contactez-nous</h2>
            <p className="text-white/80 mb-8">
              Une idée de projet ? Une question sur nos services ? 
              N'hésitez pas à nous contacter, nous vous répondrons dans les plus brefs délais.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-muted w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <p className="text-white/60 text-sm">Email</p>
                  <a href="mailto:contact@pronoia-studio.com" className="text-primary hover:underline">
                    contact@pronoia-studio.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-muted w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-white/60 text-sm">WhatsApp</p>
                  <a href="https://wa.me/33600000000" className="text-primary hover:underline">
                    +33 6 00 00 00 00
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 mt-8">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-muted w-12 h-12 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://tiktok.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-muted w-12 h-12 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
                    <path d="M15 8h.01"/>
                    <path d="M11 2v7.5m0 2.5v3"/>
                    <path d="M8 17c0 .5.2 1 .6 1.4.4.4.9.6 1.4.6"/>
                    <path d="m12 2 1.6 1.6c1 1 2.4 1.4 3.9 1.4H19v2c0 1.5-.5 2.8-1.4 3.9L16 12"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="bg-secondary/50 p-6 rounded-lg">
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Nom / Prénom
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-secondary border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-secondary border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="projectType" className="block text-sm font-medium">
                    Type de projet
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-secondary border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="" disabled>Sélectionner</option>
                    <option value="clip">Clip</option>
                    <option value="merch">Merchandising</option>
                    <option value="custom">Projet sur-mesure</option>
                    <option value="other">Autre</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-secondary border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn btn-primary w-full flex items-center justify-center"
                >
                  <Send size={18} className="mr-2" />
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
