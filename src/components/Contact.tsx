
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
    <section id="contact" className="section bg-gradient-to-b from-[#D0E8FF] to-[#E6E6FA]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2C2C2C]">Contactez-nous</h2>
            <p className="text-[#2C2C2C]/80 mb-8">
              Une idée de projet ? Une question sur nos services ? 
              N'hésitez pas à nous contacter, nous vous répondrons dans les plus brefs délais.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-white shadow-sm w-12 h-12 rounded-full flex items-center justify-center mr-4 text-[#1E90FF]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <p className="text-[#2C2C2C]/60 text-sm">Email</p>
                  <a href="mailto:contactpronoiaweb@gmail.com" className="text-[#1E90FF] hover:underline">
                    contactpronoiaweb@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-white shadow-sm w-12 h-12 rounded-full flex items-center justify-center mr-4 text-[#1E90FF]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-[#2C2C2C]/60 text-sm">WhatsApp</p>
                  <a href="https://wa.me/33756847500" className="text-[#1E90FF] hover:underline">
                    +33 7 56 84 75 00
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 mt-8">
                <a 
                  href="https://www.instagram.com/pronoia_artist/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white shadow-sm w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#1E90FF] hover:text-white transition-colors duration-300"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://www.tiktok.com/@prono.ia0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white shadow-sm w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#1E90FF] hover:text-white transition-colors duration-300"
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
            <form onSubmit={handleSubmit} className="bg-white/80 p-6 rounded-lg shadow-md">
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-[#2C2C2C]">
                    Nom / Prénom
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-[#F5F5F5] border border-[#D0E8FF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E90FF] text-[#2C2C2C]"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-[#2C2C2C]">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-[#F5F5F5] border border-[#D0E8FF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E90FF] text-[#2C2C2C]"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="projectType" className="block text-sm font-medium text-[#2C2C2C]">
                    Type de projet
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-[#F5F5F5] border border-[#D0E8FF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E90FF] text-[#2C2C2C]"
                  >
                    <option value="" disabled>Sélectionner</option>
                    <option value="clip">Clip</option>
                    <option value="merch">Merchandising</option>
                    <option value="custom">Projet sur-mesure</option>
                    <option value="other">Autre</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-[#2C2C2C]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-[#F5F5F5] border border-[#D0E8FF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E90FF] text-[#2C2C2C]"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn flex items-center justify-center bg-[#1E90FF] hover:bg-[#1E90FF]/90 hover:shadow-[0_0_15px_rgba(30,144,255,0.5)] text-white rounded-full py-3 px-6 transition-all"
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
