import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Share2, LayoutTemplate, Printer, Palette, RotateCcw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import EditorForm from '../components/editor/EditorForm';
import LivePreview from '../components/preview/LivePreview';
import { useResumeStore } from '../store/useResumeStore';

const Editor = () => {
  const navigate = useNavigate();
  const [isMobilePreview, setIsMobilePreview] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const { themeColor, setThemeColor, template, resetState } = useResumeStore();

  const presetColors = [
    '#3b82f6', '#6366f1', '#8b5cf6', '#a855f7',
    '#06b6d4', '#14b8a6', '#10b981', '#22c55e',
    '#f59e0b', '#ef4444', '#ec4899', '#1e40af',
  ];

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all resume data? This cannot be undone.')) {
      resetState();
    }
  };

  return (
    <div className="h-screen w-full bg-slate-100 flex flex-col font-sans overflow-hidden">
      {/* Top Navbar */}
      <nav className="h-16 px-6 bg-white border-b border-slate-200 flex items-center justify-between shrink-0 no-print">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/templates')}
            className="flex items-center text-slate-500 hover:text-slate-800 transition-colors font-medium text-sm"
          >
            <LayoutTemplate className="w-4 h-4 mr-2" /> Templates
          </button>
          <span className="text-xs text-slate-400">|</span>
          <span className="text-sm text-slate-600 capitalize font-medium">{template?.replace('-', ' ')}</span>
        </div>

        <div className="flex items-center gap-3">
          {/* Theme Color Picker */}
          <div className="relative">
            <button
              onClick={() => setShowColorPicker(!showColorPicker)}
              className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              title="Change theme color"
            >
              <Palette className="w-4 h-4" />
            </button>
            {showColorPicker && (
              <div className="absolute right-0 top-full mt-2 bg-white border border-slate-200 rounded-xl shadow-xl p-4 z-50 w-48">
                <p className="text-xs font-medium text-slate-600 mb-3">Theme Color</p>
                <div className="grid grid-cols-4 gap-2">
                  {presetColors.map((color) => (
                    <button
                      key={color}
                      onClick={() => { setThemeColor(color); setShowColorPicker(false); }}
                      className={`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 ${themeColor === color ? 'border-slate-900 scale-110' : 'border-slate-200'}`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <input
                    type="color"
                    value={themeColor}
                    onChange={(e) => setThemeColor(e.target.value)}
                    className="w-8 h-8 rounded cursor-pointer border-0"
                  />
                  <span className="text-xs text-slate-500 font-mono">{themeColor}</span>
                </div>
              </div>
            )}
          </div>

          {/* Reset Button */}
          <button
            onClick={handleReset}
            className="p-2 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            title="Reset all data"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <button
            className="md:hidden px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium"
            onClick={() => setIsMobilePreview(!isMobilePreview)}
          >
            {isMobilePreview ? 'Edit' : 'Preview'}
          </button>

          <button
            onClick={() => window.print()}
            className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors flex items-center gap-2"
          >
            <Download className="w-4 h-4" /> Export PDF
          </button>
        </div>
      </nav>

      {/* Main Workspace */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Panel: Form */}
        <div className={`w-full md:w-1/2 lg:w-[45%] xl:w-[40%] bg-white border-r border-slate-200 flex flex-col h-full z-10 no-print ${isMobilePreview ? 'hidden md:flex' : 'flex'}`}>
          <EditorForm />
        </div>

        {/* Right Panel: Live Preview */}
        <div className={`w-full md:flex-1 bg-slate-200 overflow-y-auto ${!isMobilePreview ? 'hidden md:block' : 'block'}`}>
          <div className="min-h-full p-4 sm:p-8 flex items-start justify-center">
             <LivePreview />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
