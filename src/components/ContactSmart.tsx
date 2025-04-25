import { useRef } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Instagram, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { SmartForm, SmartFormData } from './ui/smart-form';
import { motion } from 'framer-motion';
const ContactSmart = () => {
  const {
    toast
  } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const handleSmartFormSubmit = async (formData: SmartFormData) => {
    const serviceId = 'service_nqmtlqb';
    const templateId = 'template_1jqruzb';
    const publicKey = 't9Kp9C786P0ISTyKg';
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      project_type: formData.projectType,
      budget: formData.budget,
      timeline: formData.timeline,
      goals: formData.goals.join(", "),
      message: formData.message
    };
    await emailjs.send(serviceId, templateId, templateParams, publicKey);
  };
  return <section id="contact" className="section bg-gradient-to-b from-[#D0E8FF] to-[#E6F4FF]">
      <div className="container">
        <motion.div className="text-center mb-12" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5
      }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#2C2C2C] bg-gradient-to-r from-[#1E90FF] to-[#00BFFF] bg-clip-text text-transparent">Contactez-nous</h2>
          <p className="text-lg text-[#2C2C2C]/80 max-w-2xl mx-auto">
            Une idée de projet ? Une question sur nos services ? 
            Utilisez notre formulaire intelligent pour nous décrire votre besoin.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div className="lg:col-span-2" initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }}>
            <SmartForm onSubmit={handleSmartFormSubmit} className="bg-white/80 backdrop-blur-sm shadow-xl rounded-xl" />
          </motion.div>
          
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.4
        }}>
            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-xl shadow-lg h-full">
              <h3 className="text-2xl font-semibold mb-6 text-[#2C2C2C]">Informations de contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-blue-50 shadow-sm w-12 h-12 rounded-full flex items-center justify-center mr-4 text-[#1E90FF]">
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
                  <div className="bg-blue-50 shadow-sm w-12 h-12 rounded-full flex items-center justify-center mr-4 text-[#1E90FF]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#2C2C2C]/60 text-sm">WhatsApp</p>
                    <a href="https://wa.me/33756847500" className="text-[#1E90FF] hover:underline">+33 7 56 84 75 59</a>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-200">
                  <h4 className="font-medium mb-4">Suivez-nous</h4>
                  <div className="flex items-center space-x-4">
                    <a href="https://www.instagram.com/pronoia_artist/" target="_blank" rel="noopener noreferrer" className="bg-white shadow-sm w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#1E90FF] hover:text-white transition-colors duration-300">
                      <Instagram size={20} />
                    </a>
                    <a href="https://www.tiktok.com/@prono.ia0" target="_blank" rel="noopener noreferrer" className="bg-white shadow-sm w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#1E90FF] hover:text-white transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
                        <path d="M15 8h.01" />
                        <path d="M11 2v7.5m0 2.5v3" />
                        <path d="M8 17c0 .5.2 1 .6 1.4.4.4.9.6 1.4.6" />
                        <path d="m12 2 1.6 1.6c1 1 2.4 1.4 3.9 1.4H19v2c0 1.5-.5 2.8-1.4 3.9L16 12" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default ContactSmart;