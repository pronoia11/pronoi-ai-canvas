
import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold font-poppins">PRONOÏA</div>
            <p className="text-white/60 mt-2">L'IA au service de votre imagination.</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-primary transition-colors"
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
            <div className="text-white/40 text-sm">
              <a href="#" className="hover:text-primary transition-colors">
                Mentions légales
              </a>
              <span className="mx-2">|</span>
              <span>© {new Date().getFullYear()} Pronoïa. Tous droits réservés.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
