
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Send, Loader } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface SmartFormProps {
  onSubmit: (data: SmartFormData) => Promise<void>;
  className?: string;
}

export interface SmartFormData {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  timeline: string;
  goals: string[];
  message: string;
}

const projectOptions = [
  { id: "clip", label: "Clip musical" },
  { id: "merch", label: "Merchandising visuel" },
  { id: "canvas", label: "Canvas Spotify" },
  { id: "custom", label: "Projet sur-mesure" },
];

const budgetOptions = [
  { id: "small", label: "< 500€", description: "Petits projets" },
  { id: "medium", label: "500-1500€", description: "Projets moyens" },
  { id: "large", label: "1500-5000€", description: "Projets importants" },
  { id: "enterprise", label: "> 5000€", description: "Projets d'envergure" },
];

const timelineOptions = [
  { id: "urgent", label: "Urgence (< 1 semaine)" },
  { id: "standard", label: "Standard (2-3 semaines)" },
  { id: "flexible", label: "Flexible (> 1 mois)" },
];

const goalOptions = [
  { id: "brand", label: "Renforcer l'identité visuelle" },
  { id: "engagement", label: "Améliorer l'engagement sur les réseaux" },
  { id: "sales", label: "Augmenter les ventes" },
  { id: "awareness", label: "Accroître la notoriété" },
];

export const SmartForm = ({ onSubmit, className = "" }: SmartFormProps) => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [data, setData] = useState<SmartFormData>({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    timeline: "",
    goals: [],
    message: ""
  });

  const updateField = (field: keyof SmartFormData, value: any) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  const toggleGoal = (goalId: string) => {
    setData(prev => {
      if (prev.goals.includes(goalId)) {
        return { ...prev, goals: prev.goals.filter(g => g !== goalId) };
      } else {
        return { ...prev, goals: [...prev.goals, goalId] };
      }
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await onSubmit(data);
      toast({
        title: "Formulaire envoyé !",
        description: "Nous vous contacterons très prochainement.",
      });
      setCurrentStep(0);
      setData({
        name: "",
        email: "",
        projectType: "",
        budget: "",
        timeline: "",
        goals: [],
        message: ""
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Un problème est survenu. Veuillez réessayer plus tard.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0));

  const steps = [
    // Étape 1: Infos de base
    {
      title: "Présentons-nous",
      fields: (
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Votre nom
            </label>
            <input
              id="name"
              type="text"
              value={data.name}
              onChange={(e) => updateField("name", e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Comment souhaitez-vous être appelé ?"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Votre email
            </label>
            <input
              id="email"
              type="email"
              value={data.email}
              onChange={(e) => updateField("email", e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Où pouvons-nous vous contacter ?"
              required
            />
          </div>
        </div>
      ),
      isComplete: () => data.name.trim() !== "" && data.email.includes("@")
    },
    
    // Étape 2: Type de projet
    {
      title: "Votre projet",
      fields: (
        <div className="space-y-4">
          <p className="text-sm text-gray-500 mb-2">Quel type de projet souhaitez-vous réaliser ?</p>
          <div className="grid grid-cols-2 gap-3">
            {projectOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => updateField("projectType", option.id)}
                className={`p-3 rounded-lg text-left transition-all ${
                  data.projectType === option.id
                    ? "bg-blue-50 border-2 border-blue-500 text-blue-700"
                    : "bg-white border border-gray-200 hover:border-blue-300"
                }`}
              >
                <div className="flex items-center">
                  {data.projectType === option.id && (
                    <Check size={16} className="mr-2 text-blue-500" />
                  )}
                  <span className="font-medium">{option.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      ),
      isComplete: () => data.projectType !== ""
    },
    
    // Étape 3: Budget et Timeline
    {
      title: "Budget et délais",
      fields: (
        <div className="space-y-6">
          <div>
            <p className="text-sm text-gray-500 mb-2">Quel est votre budget approximatif ?</p>
            <div className="grid grid-cols-2 gap-3">
              {budgetOptions.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => updateField("budget", option.id)}
                  className={`p-3 rounded-lg text-left transition-all ${
                    data.budget === option.id
                      ? "bg-blue-50 border-2 border-blue-500"
                      : "bg-white border border-gray-200 hover:border-blue-300"
                  }`}
                >
                  <div className="font-medium">{option.label}</div>
                  <div className="text-xs text-gray-500">{option.description}</div>
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <p className="text-sm text-gray-500 mb-2">Dans quel délai avez-vous besoin de ce projet ?</p>
            <div className="space-y-2">
              {timelineOptions.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => updateField("timeline", option.id)}
                  className={`w-full p-3 rounded-lg text-left transition-all ${
                    data.timeline === option.id
                      ? "bg-blue-50 border-2 border-blue-500"
                      : "bg-white border border-gray-200 hover:border-blue-300"
                  }`}
                >
                  <span className="font-medium">{option.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      ),
      isComplete: () => data.budget !== "" && data.timeline !== ""
    },
    
    // Étape 4: Objectifs
    {
      title: "Vos objectifs",
      fields: (
        <div className="space-y-4">
          <p className="text-sm text-gray-500 mb-2">Quels sont vos principaux objectifs ? (plusieurs choix possibles)</p>
          <div className="grid grid-cols-2 gap-3">
            {goalOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => toggleGoal(option.id)}
                className={`p-3 rounded-lg text-left transition-all ${
                  data.goals.includes(option.id)
                    ? "bg-blue-50 border-2 border-blue-500"
                    : "bg-white border border-gray-200 hover:border-blue-300"
                }`}
              >
                <div className="flex items-center">
                  {data.goals.includes(option.id) && (
                    <Check size={16} className="mr-2 text-blue-500" />
                  )}
                  <span className="font-medium">{option.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      ),
      isComplete: () => data.goals.length > 0
    },
    
    // Étape 5: Message détaillé
    {
      title: "Précisez votre besoin",
      fields: (
        <div className="space-y-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Détails de votre projet
          </label>
          <textarea
            id="message"
            value={data.message}
            onChange={(e) => updateField("message", e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Décrivez votre projet plus en détail. Plus vous êtes précis, plus notre réponse sera adaptée."
            rows={5}
          />
        </div>
      ),
      isComplete: () => data.message.length >= 10
    }
  ];
  
  const currentStepData = steps[currentStep];
  const isLastStep = currentStep === steps.length - 1;
  const canProceed = currentStepData.isComplete();

  return (
    <div className={`max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden ${className}`}>
      <div className="p-6 border-b">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold">{currentStepData.title}</h3>
          <div className="text-sm text-gray-500">
            Étape {currentStep + 1} sur {steps.length}
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="w-full h-1.5 bg-gray-100 rounded-full mt-2">
          <motion.div 
            initial={{ width: "0%" }}
            animate={{ 
              width: `${((currentStep + (canProceed ? 1 : 0)) / steps.length) * 100}%` 
            }}
            className="h-full bg-blue-500 rounded-full"
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
      
      <div className="p-6">
        <form onSubmit={(e) => {
          e.preventDefault();
          if (isLastStep) {
            handleSubmit();
          } else {
            nextStep();
          }
        }}>
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {currentStepData.fields}
          </motion.div>
          
          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 0}
              className={`px-4 py-2 rounded-lg border border-gray-300 transition-colors ${
                currentStep === 0
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-100"
              }`}
            >
              Retour
            </button>
            
            <button
              type="submit"
              disabled={!canProceed || isSubmitting}
              className={`px-6 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                !canProceed || isSubmitting
                  ? "bg-blue-300 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader className="h-4 w-4 animate-spin" />
                  <span>Envoi...</span>
                </>
              ) : isLastStep ? (
                <>
                  <Send className="h-4 w-4" />
                  <span>Envoyer</span>
                </>
              ) : (
                <span>Continuer</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
