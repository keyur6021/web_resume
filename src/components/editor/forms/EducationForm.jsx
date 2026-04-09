import React, { useState } from 'react';
import { useResumeStore } from '../../../store/useResumeStore';
import { motion } from 'framer-motion';
import { Plus, Trash2, GraduationCap } from 'lucide-react';

const EducationForm = () => {
  const { education, addEducation, updateEducation, removeEducation } = useResumeStore();
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    institution: '', degree: '', startDate: '', endDate: '', description: ''
  });

  const handleAddNew = () => {
    setEditingId(null);
    setFormData({ institution: '', degree: '', startDate: '', endDate: '', description: '' });
  };

  const handleEdit = (edu) => {
    setEditingId(edu.id);
    setFormData(edu);
  };

  const handleSave = () => {
    if (!formData.degree || !formData.institution) return;
    if (editingId) {
      updateEducation(editingId, formData);
    } else {
      addEducation(formData);
    }
    setEditingId(null);
    setFormData({ institution: '', degree: '', startDate: '', endDate: '', description: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800 mb-1">Education</h2>
        <p className="text-slate-500 text-sm">Add your educational background, starting with the most recent.</p>
      </div>

      {/* Existing Education Entries */}
      <div className="space-y-3">
        {education.map((edu) => (
          <div key={edu.id} className="flex items-start justify-between p-4 bg-slate-50 rounded-lg border border-slate-200 group">
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-slate-900 truncate">{edu.degree}</h3>
              <p className="text-sm text-slate-600">{edu.institution}</p>
              <p className="text-xs text-slate-500 mt-1">
                {edu.startDate} — {edu.endDate}
              </p>
            </div>
            <div className="flex gap-2 ml-4 shrink-0">
              <button onClick={() => handleEdit(edu)} className="p-1.5 text-slate-400 hover:text-blue-600 transition-colors">
                <GraduationCap className="w-4 h-4" />
              </button>
              <button onClick={() => removeEducation(edu.id)} className="p-1.5 text-slate-400 hover:text-red-600 transition-colors">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Form */}
      <div className="border-t border-slate-200 pt-6">
        <h3 className="font-semibold text-slate-800 mb-4">
          {editingId ? 'Edit Education' : 'Add New Education'}
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Institution</label>
            <input type="text" name="institution" value={formData.institution} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm" placeholder="University or school name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Degree / Program</label>
            <input type="text" name="degree" value={formData.degree} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm" placeholder="e.g. B.S. in Computer Science" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Start Date</label>
              <input type="text" name="startDate" value={formData.startDate} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm" placeholder="e.g. 2015-09" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">End Date</label>
              <input type="text" name="endDate" value={formData.endDate} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm" placeholder="e.g. 2019-06" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Description (Optional)</label>
            <textarea name="description" value={formData.description} onChange={handleChange} rows={3} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm resize-none" placeholder="Honors, relevant coursework, activities..." />
          </div>
          <div className="flex gap-3">
            <button onClick={handleSave} disabled={!formData.degree || !formData.institution} className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              {editingId ? 'Update' : 'Add Education'}
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

export default EducationForm;
