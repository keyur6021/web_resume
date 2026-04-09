import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FileText, Sparkles, Layout, Download } from 'lucide-react';

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    { icon: <Layout className="w-6 h-6 text-blue-500" />, title: 'Multiple Templates', text: 'Choose from 6+ industry-approved resume templates.' },
    { icon: <Sparkles className="w-6 h-6 text-purple-500" />, title: 'Real-time Preview', text: 'See your resume update instantly as you type.' },
    { icon: <Download className="w-6 h-6 text-green-500" />, title: 'High Quality PDF', text: 'Download your resume in standard A4 PDF format immediately.' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 overflow-hidden font-sans">
      {/* Navigation */}
      <nav className="w-full px-8 py-6 flex justify-between items-center glass fixed top-0 z-50">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-2">
          <FileText className="text-blue-600" /> Resumee
        </div>
        <button
          onClick={() => navigate('/templates')}
          className="px-6 py-2 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-colors"
        >
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-6">
            <Sparkles className="w-4 h-4" /> 100% Free & Open Source
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
            Build a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">professional</span> resume in minutes.
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
            Stand out to employers with our premium SaaS-grade resume builder. No sign up required, just choose a template, fill in your details, and download.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <button 
              onClick={() => navigate('/templates')}
              className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg shadow-lg hover:bg-blue-700 hover:scale-105 transition-all w-full sm:w-auto"
            >
              Start Building Resume
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 relative w-full max-w-lg lg:max-w-none"
        >
          {/* Abstract representations of resumes */}
          <div className="relative aspect-[4/5] bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 border border-slate-100 hover:rotate-0 transition-all duration-500">
            <div className="w-1/3 h-4 bg-slate-200 rounded mb-6"></div>
            <div className="w-full h-2 bg-slate-100 rounded mb-2"></div>
            <div className="w-5/6 h-2 bg-slate-100 rounded mb-8"></div>
            
            <div className="w-1/4 h-3 bg-slate-200 rounded mb-4 mt-8"></div>
            <div className="w-full h-16 bg-slate-50 flex items-center p-4 rounded-lg mb-4">
               <div className="w-8 h-8 rounded-full bg-slate-200 mr-4"></div>
               <div>
                 <div className="w-32 h-2 bg-slate-300 rounded mb-2"></div>
                 <div className="w-24 h-2 bg-slate-200 rounded"></div>
               </div>
            </div>
            <div className="w-full h-16 bg-slate-50 flex items-center p-4 rounded-lg">
               <div className="w-8 h-8 rounded-full bg-slate-200 mr-4"></div>
               <div>
                 <div className="w-32 h-2 bg-slate-300 rounded mb-2"></div>
                 <div className="w-24 h-2 bg-slate-200 rounded"></div>
               </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -top-8 -right-8 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute -z-10 -bottom-8 -left-8 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
