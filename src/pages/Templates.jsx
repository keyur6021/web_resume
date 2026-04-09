import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useResumeStore } from '../store/useResumeStore';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

const availableTemplates = [
  { id: 'minimal', name: 'Minimal', description: 'Clean and elegant, focusing on whitespace and typography.', color: 'bg-slate-100' },
  { id: 'professional', name: 'Professional', description: 'Standard ATS-friendly layout for corporate roles.', color: 'bg-blue-50' },
  { id: 'creative', name: 'Creative', description: 'Split layout with vibrant accents for designers.', color: 'bg-purple-50' },
  { id: 'corporate', name: 'Corporate', description: 'Traditional blue-tinted structure.', color: 'bg-indigo-50' },
  { id: 'modern-dark', name: 'Modern Dark', description: 'Sleek dark mode layout for tech roles.', color: 'bg-slate-900 border-slate-700' },
  { id: 'timeline', name: 'Timeline', description: 'Experience displayed in a connected timeline.', color: 'bg-teal-50' },
];

const Templates = () => {
  const navigate = useNavigate();
  const { template, setTemplate } = useResumeStore();

  const handleSelectAndProceed = (templateId) => {
    setTemplate(templateId);
    navigate('/editor');
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8 pb-20">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center text-slate-600 hover:text-slate-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </button>

        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Choose Your Template</h1>
          <p className="text-lg text-slate-600">Select a starting point. You can always change this later in the editor.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {availableTemplates.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              onClick={() => handleSelectAndProceed(t.id)}
              className={`relative cursor-pointer rounded-2xl border-2 transition-all duration-200 overflow-hidden group 
                ${template === t.id ? 'border-blue-500 shadow-lg shadow-blue-500/20' : 'border-transparent bg-white shadow-sm hover:shadow-md hover:border-slate-300'}`}
            >
              {/* Abstract Template Preview mock */}
              <div className={`aspect-[1/1.2] p-6 ${t.color} m-2 rounded-xl relative`}>
                <div className="w-1/2 h-3 bg-slate-300/50 rounded mb-4"></div>
                <div className="w-1/3 h-2 bg-slate-300/50 rounded mb-8"></div>
                
                <div className="w-full h-[1px] bg-slate-300/50 mb-4"></div>
                
                <div className="flex gap-4 mb-4">
                  <div className="w-8 h-8 rounded-full bg-slate-300/50"></div>
                  <div className="flex-1">
                     <div className="w-full h-2 bg-slate-300/50 rounded mb-2"></div>
                     <div className="w-2/3 h-2 bg-slate-300/50 rounded"></div>
                  </div>
                </div>
                
                <div className="w-full h-full absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>

                {template === t.id && (
                  <div className="absolute top-4 right-4 bg-white rounded-full text-blue-500">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                )}
              </div>

              <div className="p-5 pt-2">
                <h3 className="text-xl font-semibold text-slate-900 mb-1">{t.name}</h3>
                <p className="text-sm text-slate-500">{t.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Templates;
