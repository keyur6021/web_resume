import React, { useState } from 'react';
import { useResumeStore } from '../../../store/useResumeStore';
import { motion } from 'framer-motion';
import { Plus, X } from 'lucide-react';

const SkillsForm = () => {
  const { skills, setSkills, projects, addProject, updateProject, removeProject } = useResumeStore();
  const [newSkill, setNewSkill] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [projectForm, setProjectForm] = useState({ name: '', url: '', description: '' });

  const handleAddSkill = (e) => {
    e.preventDefault();
    const trimmed = newSkill.trim();
    if (trimmed && !skills.includes(trimmed)) {
      setSkills([...skills, trimmed]);
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter((s) => s !== skillToRemove));
  };

  // Project handlers
  const handleSaveProject = () => {
    if (!projectForm.name) return;
    if (editingId) {
      updateProject(editingId, projectForm);
    } else {
      addProject(projectForm);
    }
    setEditingId(null);
    setProjectForm({ name: '', url: '', description: '' });
  };

  const handleEditProject = (proj) => {
    setEditingId(proj.id);
    setProjectForm(proj);
  };

  const handleProjectChange = (e) => {
    setProjectForm({ ...projectForm, [e.target.name]: e.target.value });
  };

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
      {/* Skills Section */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800 mb-1">Skills</h2>
        <p className="text-slate-500 text-sm">Add your key skills and competencies.</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium group"
            >
              {skill}
              <button onClick={() => handleRemoveSkill(skill)} className="text-blue-400 hover:text-blue-600 transition-colors">
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
        </div>

        <form onSubmit={handleAddSkill} className="mt-4 flex gap-2">
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
            placeholder="Type a skill and press Enter"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleAddSkill(e);
              }
            }}
          />
          <button type="submit" disabled={!newSkill.trim()} className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1.5">
            <Plus className="w-4 h-4" /> Add
          </button>
        </form>
      </div>

      {/* Projects Section */}
      <div className="border-t border-slate-200 pt-6">
        <h2 className="text-2xl font-bold text-slate-800 mb-1">Projects</h2>
        <p className="text-slate-500 text-sm">Showcase personal, academic, or professional projects.</p>

        {/* Existing Projects */}
        <div className="mt-4 space-y-3">
          {projects.map((proj) => (
            <div key={proj.id} className="flex items-start justify-between p-4 bg-slate-50 rounded-lg border border-slate-200">
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-slate-900 truncate">{proj.name}</h3>
                {proj.url && <p className="text-xs text-slate-500">{proj.url}</p>}
                <p className="text-sm text-slate-600 mt-1 line-clamp-2">{proj.description}</p>
              </div>
              <div className="flex gap-2 ml-4 shrink-0">
                <button onClick={() => handleEditProject(proj)} className="px-3 py-1 text-xs font-medium text-blue-600 hover:bg-blue-50 rounded transition-colors">Edit</button>
                <button onClick={() => removeProject(proj.id)} className="px-3 py-1 text-xs font-medium text-red-600 hover:bg-red-50 rounded transition-colors">Remove</button>
              </div>
            </div>
          ))}
        </div>

        {/* Add/Edit Project Form */}
        <div className="mt-4 border-t border-slate-200 pt-4">
          <h3 className="font-semibold text-slate-800 mb-3">
            {editingId ? 'Edit Project' : 'Add New Project'}
          </h3>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Project Name</label>
              <input type="text" name="name" value={projectForm.name} onChange={handleProjectChange} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm" placeholder="My Awesome Project" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">URL (Optional)</label>
              <input type="url" name="url" value={projectForm.url} onChange={handleProjectChange} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm" placeholder="https://github.com/..." />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
              <textarea name="description" value={projectForm.description} onChange={handleProjectChange} rows={3} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm resize-none" placeholder="What does this project do? What tech did you use?" />
            </div>
            <div className="flex gap-3">
              <button onClick={handleSaveProject} disabled={!projectForm.name} className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                {editingId ? 'Update' : 'Add Project'}
              </button>
              {editingId && (
                <button onClick={() => { setEditingId(null); setProjectForm({ name: '', url: '', description: '' }); }} className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
                  Cancel
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillsForm;
