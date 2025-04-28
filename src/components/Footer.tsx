
import { Mail, Phone, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#D0E8FF] py-12 border-t border-[#1E90FF]/10">
      <div className="container px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Logo and Description */}
          <div className="space-y-3">
            <div className="text-2xl font-bold font-poppins text-[#2C2C2C]">PRONOÏA</div>
            <p className="text-[#2C2C2C]/70">L'IA au service de votre imagination.</p>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#2C2C2C]">Contactez-nous</h3>
            <div className="space-y-3">
              <a 
                href="mailto:contactpronoiaweb@gmail.com" 
                className="flex items-center space-x-2 text-[#2C2C2C]/70 hover:text-[#1E90FF] transition-colors group"
              >
                <Mail className="w-5 h-5 group-hover:text-[#1E90FF]" />
                <span>contactpronoiaweb@gmail.com</span>
              </a>
              <a 
                href="https://wa.me/33756847500" 
                className="flex items-center space-x-2 text-[#2C2C2C]/70 hover:text-[#1E90FF] transition-colors group"
              >
                <Phone className="w-5 h-5 group-hover:text-[#1E90FF]" />
                <span>+33 7 56 84 75 59</span>
              </a>
            </div>
          </div>
          
          {/* Social and Legal */}
          <div className="space-y-4">
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/pronoia_artist/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/80 p-2 rounded-full hover:bg-[#1E90FF] text-[#2C2C2C]/70 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.tiktok.com/@prono.ia0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/80 p-2 rounded-full hover:bg-[#1E90FF] text-[#2C2C2C]/70 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label="TikTok"
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
            <div className="text-[#2C2C2C]/60 text-sm space-x-2">
              <a href="#" className="hover:text-[#1E90FF] transition-colors">
                Mentions légales
              </a>
              <span>|</span>
              <span>© {new Date().getFullYear()} Pronoïa. Tous droits réservés.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
