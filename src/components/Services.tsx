import MerchandisingSection from './services/MerchandisingSection';
import ClipSection from './services/ClipSection';
import CustomProjectsSection from './services/CustomProjectsSection';
const Services = () => {
  return <section id="services" className="section bg-[#F5F5F5]">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-[#1E90FF] to-[#00BFFF] bg-clip-text text-transparent text-left">
          Nos prestations
        </h2>
        
        <div className="space-y-24">
          <MerchandisingSection />
          <ClipSection />
          <CustomProjectsSection />
        </div>
      </div>
    </section>;
};
export default Services;