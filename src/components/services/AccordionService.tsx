
import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import MediaViewer from '@/components/ui/media-viewer';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface SubService {
  id: string;
  title: string;
  description: string;
  imageUrl?: string | string[];
  videoUrl?: string;
  gifUrl?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description?: string;
  subServices: SubService[];
}

interface AccordionServiceProps {
  categories: ServiceCategory[];
}

const AccordionService = ({ categories }: AccordionServiceProps) => {
  const [openCategory, setOpenCategory] = useState<string | null>(categories[0]?.id || null);
  
  return (
    <div className="space-y-8">
      {categories.map((category) => (
        <div 
          key={category.id} 
          id={category.id}
          className="scroll-mt-24 transition-all duration-300 rounded-xl overflow-hidden"
        >
          <Accordion
            type="single" 
            collapsible
            value={openCategory === category.id ? category.id : ''} 
            onValueChange={(value) => setOpenCategory(value || null)}
            className="bg-gradient-to-r from-blue-50/80 to-sky-50/40 backdrop-blur-sm border rounded-xl shadow-sm"
          >
            <AccordionItem value={category.id} className="border-0">
              <AccordionTrigger className="px-6 py-4 hover:no-underline data-[state=open]:bg-gradient-to-r data-[state=open]:from-blue-100/50 data-[state=open]:to-blue-50/50 transition-all">
                <h3 className="text-2xl md:text-3xl font-bold text-blue-600 text-left">
                  {category.title}
                </h3>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                {category.description && (
                  <p className="text-slate-600 mb-6">{category.description}</p>
                )}
                
                <div className="space-y-4">
                  {category.subServices.map((service, index) => (
                    <SubServiceItem 
                      key={service.id} 
                      service={service}
                      isLast={index === category.subServices.length - 1}
                    />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ))}
    </div>
  );
};

// Composant pour les sous-services (avec contenu dépliable)
const SubServiceItem = ({ 
  service, 
  isLast 
}: { 
  service: SubService; 
  isLast: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasMedia = service.imageUrl || service.videoUrl || service.gifUrl;
  
  const renderMedia = () => {
    if (service.videoUrl) {
      return <MediaViewer src={service.videoUrl} type="video" className="rounded-lg overflow-hidden" />;
    }
    
    if (service.gifUrl) {
      return <MediaViewer src={service.gifUrl} type="gif" className="rounded-lg overflow-hidden" />;
    }
    
    if (service.imageUrl) {
      if (Array.isArray(service.imageUrl)) {
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.imageUrl.slice(0, 4).map((url, index) => (
              <MediaViewer 
                key={index}
                src={url}
                type="image"
                alt={`${service.title} - ${index + 1}`}
                className="rounded-lg overflow-hidden"
              />
            ))}
          </div>
        );
      } else {
        return <MediaViewer src={service.imageUrl} type="image" className="rounded-lg overflow-hidden" />;
      }
    }
    
    return null;
  };
  
  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className={cn(
        "rounded-lg border border-blue-100 bg-white/50 backdrop-blur-sm transition-all overflow-hidden",
        isOpen ? "shadow-md" : "shadow-sm"
      )}
    >
      <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left">
        <h4 className="text-lg font-semibold text-blue-800">{service.title}</h4>
        <ChevronDown 
          className={cn(
            "h-5 w-5 text-blue-500 transition-transform duration-300",
            isOpen ? "transform rotate-180" : ""
          )} 
        />
      </CollapsibleTrigger>
      <CollapsibleContent className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
        <div className="p-4 pt-0 space-y-4">
          <p className="text-slate-600">{service.description}</p>
          {hasMedia && (
            <div className="mt-4 animate-fade-in">
              {renderMedia()}
            </div>
          )}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default AccordionService;
