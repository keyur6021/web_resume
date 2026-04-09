import React from 'react';
import { useResumeStore } from '../../../store/useResumeStore';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const SummaryForm = () => {
  const { summary, setSummary, personalInfo } = useResumeStore();

  const handleGenerateSummary = () => {
    // Dummy AI generation
    const job = personalInfo.jobTitle || 'Professional';
    const text = `Highly motivated and results-driven ${job} with a strong track record of success. Skilled in driving projects from conception to completion and delivering high-quality results. Exceptional communicator with a proven ability to collaborate across teams and lead initiatives.`;
    setSummary(text);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-1">Professional Summary</h2>
          <p className="text-slate-500 text-sm">Write a short summary highlighting your experience and goals.</p>
        </div>
        <button 
          onClick={handleGenerateSummary}
          className="flex items-center gap-2 text-sm px-3 py-1.5 bg-purple-50 text-purple-600 rounded-lg border border-purple-200 hover:bg-purple-100 transition-colors font-medium"
        >
          <Sparkles className="w-4 h-4" /> AI AI Assistant
        </button>
      </div>

      <div className="space-y-2">
        <textarea 
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          rows={8}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none shadow-sm"
          placeholder="e.g. Passionate software engineer with 5+ years of experience..."
        />
        <div className="text-right text-xs text-slate-400">
          Recommended length: 3-4 sentences.
        </div>
      </div>
    </motion.div>
  );
};

export default SummaryForm;
