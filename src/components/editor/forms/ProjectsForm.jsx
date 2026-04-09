import React, { useState } from 'react';
import { useResumeStore } from '../../../store/useResumeStore';
import { motion } from 'framer-motion';
import { Plus, Trash2, FolderGit2 } from 'lucide-react';

const ProjectsForm = () => {
  const { projects, addProject, updateProject, removeProject } = useResumeStore();
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ name: '', url: '', description: '' });

  const handleAddNew = () => {
    setEditingId(null);
    setFormData({ name: '', url: '', description: '' });
  };

  const handleEdit = (proj) => {
    setEditingId(proj.id);
    setFormData(proj);
  };

  const handleSave = () => {
    if (!formData.name) return;
    if (editingId) {
      updateProject(editingId, formData);
    } else {
      addProject(formData);
    }
    setEditingId(null);
    setFormData({ name: '', url: '', description: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800 mb-1">Projects</h2>
        <p className="text-slate-500 text-sm">Showcase personal, academic, or professional projects.</p>
      </div>

      {/* Existing Projects */}
      <div className="space-y-3">
        {projects.map((proj) => (
          <div key={proj.id} className="flex items-start justify-between p-4 bg-slate-50 rounded-lg border border-slate-200">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <FolderGit2 className="w-4 h-4 text-slate-400" />
                <h3 className="font-semibold text-slate-900 truncate">{proj.name}</h3>
              </div>
              {proj.url && <p className="text-xs text-slate-500 mt-1">{proj.url}</p>}
              <p className="text-sm text-slate-600 mt-1 line-clamp-2">{proj.description}</p>
            </div>
            <div className="flex gap-2 ml-4 shrink-0">
              <button onClick={() => handleEdit(proj)} className="p-1.5 text-slate-400 hover:text-blue-600 transition-colors">
                <FolderGit2 className="w-4 h-4" />
              </button>
              <button onClick={() => removeProject(proj.id)} className="p-1.5 text-slate-400 hover:text-red-600 transition-colors">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Form */}
      <div className="border-t border-slate-200 pt-6">
        <h3 className="font-semibold text-slate-800 mb-4">
          {editingId ? 'Edit Project' : 'Add New Project'}
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Project Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm" placeholder="My Awesome Project" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">URL (Optional)</label>
            <input type="url" name="url" value={formData.url} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm" placeholder="https://github.com/..." />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
            <textarea name="description" value={formData.description} onChange={handleChange} rows={4} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm resize-none" placeholder="What does this project do? What technologies did you use?" />
          </div>
          <div className="flex gap-3">
            <button onClick={handleSave} disabled={!formData.name} className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              {editingId ? 'Update' : 'Add Project'}
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

export default ProjectsForm;
