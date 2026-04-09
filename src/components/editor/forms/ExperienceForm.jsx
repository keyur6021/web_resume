import React, { useState } from 'react';
import { useResumeStore } from '../../../store/useResumeStore';
import { motion } from 'framer-motion';
import { Plus, Trash2, Briefcase } from 'lucide-react';

const ExperienceForm = () => {
  const { experience, addExperience, updateExperience, removeExperience } = useResumeStore();
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    company: '', role: '', startDate: '', endDate: '', description: ''
  });

  const handleAddNew = () => {
    setEditingId(null);
    setFormData({ company: '', role: '', startDate: '', endDate: '', description: '' });
  };

  const handleEdit = (exp) => {
    setEditingId(exp.id);
    setFormData(exp);
  };

  const handleSave = () => {
    if (!formData.role || !formData.company) return;
    if (editingId) {
      updateExperience(editingId, formData);
    } else {
      addExperience(formData);
    }
    setEditingId(null);
    setFormData({ company: '', role: '', startDate: '', endDate: '', description: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800 mb-1">Work Experience</h2>
        <p className="text-slate-500 text-sm">Add your relevant work history. Start with your most recent position.</p>
      </div>

      {/* Existing Experience Entries */}
      <div className="space-y-3">
        {experience.map((exp) => (
          <div key={exp.id} className="flex items-start justify-between p-4 bg-slate-50 rounded-lg border border-slate-200 group">
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-slate-900 truncate">{exp.role}</h3>
              <p className="text-sm text-slate-600">{exp.company}</p>
              <p className="text-xs text-slate-500 mt-1">
                {exp.startDate} — {exp.endDate}
              </p>
            </div>
            <div className="flex gap-2 ml-4 shrink-0">
              <button onClick={() => handleEdit(exp)} className="p-1.5 text-slate-400 hover:text-blue-600 transition-colors">
                <Briefcase className="w-4 h-4" />
              </button>
              <button onClick={() => removeExperience(exp.id)} className="p-1.5 text-slate-400 hover:text-red-600 transition-colors">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Form */}
      <div className="border-t border-slate-200 pt-6">
        <h3 className="font-semibold text-slate-800 mb-4">
          {editingId ? 'Edit Experience' : 'Add New Experience'}
        </h3>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Company</label>
              <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm" placeholder="Company name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Job Title</label>
              <input type="text" name="role" value={formData.role} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm" placeholder="Your role" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Start Date</label>
              <input type="text" name="startDate" value={formData.startDate} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm" placeholder="e.g. 2021-01" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">End Date</label>
              <input type="text" name="endDate" value={formData.endDate} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm" placeholder="e.g. Present" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
            <textarea name="description" value={formData.description} onChange={handleChange} rows={4} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm resize-none" placeholder="Describe your key responsibilities and achievements..." />
          </div>
          <div className="flex gap-3">
            <button onClick={handleSave} disabled={!formData.role || !formData.company} className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              {editingId ? 'Update' : 'Add Experience'}
            </button>
            {editingId && (
              <button onClick={handleAddNew} className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
                Cancel
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceForm;
